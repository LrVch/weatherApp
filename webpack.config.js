'use strict';

/**
 * переменная окружения, которая используется для определения состояния
 * (разработка или продакшн) можно использовать как флаг
 * if(NODE_ENV === "development") { debugger; }
 * @type {string}
 */
const NODE_ENV = process.env.NODE_ENV || "development";
const webpack = require("webpack");
const path = require('path');
const ExtractTextPlugin = require("extract-text-webpack-plugin"); // для вынесения css в отдельный файл
const HtmlWebpackPlugin = require('html-webpack-plugin'); // для генерации файлов html
const AssetsPlugin = require('assets-webpack-plugin'); // для борьбы с кешированием
const outPath = NODE_ENV === "development" ? "dev": "build";

// console.log("NODE_ENV === 'development'", NODE_ENV === "development")

const PATHS = {
    src: "app",
    dist: outPath,
    publicPath: "/"
};

function addHash(template, hash) {
    return NODE_ENV == 'production' ?
        template.replace(/\.[^.]+$/, `.[${hash}]$&`) : `${template}?hash=[${hash}]`;
}

module.exports = {
    context: path.join(__dirname, PATHS.src),
    entry: { // какие модули собирать (точки входа)
        app: "./main"
    },

    output: { // собираемые файлы
        path: path.join(__dirname, PATHS.dist),
        publicPath: PATHS.publicPath, // путь до файлов относительно корня или 'http://static.mysite.com/', которые будут грузиться из интернета()
        filename: addHash('[name].js', 'hash'), // собранные файлы
        chunkFilename: addHash('[id].js', 'chunkhash'), // chunkhash
        library: "[name]" // это переменные(объекты) будут экспортированны в глобальную область
    },

    watch: NODE_ENV === "development", // сам отслеживает изменения в файлах

    watchOptions: { // таймаут между сохранением файла и сборкой default 300
        aggragateTimeout: 100
    },

    // source-map для удобной отладки в браузере
    devtool: NODE_ENV === "development" ? "cheap-inline-module-source-map" : null, // source map для разработки и продакшн


    // описывает как ищутся модули
    // resolve для модулей
    resolve: {
        modulesDirectories: ["node_modules"], // если путь к модулю указан как 'home' то будет стандартный поиск в node_modules
        extensions: ["", ".js"]
    },
    // resolve для лоадеров
    resolveLoader: {
        modulesDirectories: ["node_modules"], // если путь к модулю указан как 'home' то будет стандартный поиск в node_modules
        moduleTemplates: ["*-loader"], // шаблон для поиска лоадеров
        extensions: ["", ".js"] // какие расширения
    },

    module: {
        loaders: [
            {
                test: /\.js$/, // применяет тест к файлу, если тест проходит, то бабел сработает
                loader: "babel" // трансформатор, получает es2015, возвращает es5, optional[]=runtime выносит отдельно вспомогательный код, исключая дублирование
            },
            {
                test: /\.(pug|jade)$/,
                loader: "pug?pretty"
            },
            {
                test: /\.css$/,
                loader: 'style!css!resolve-url!autoprefixer?browsers=last 2 versions'
            },
            {
                test: /\.scss$/,
                // loaders: ["style", "css", "autoprefixer?browsers=last 2 versions", "resolve-url", "sass?sourceMap"]
                loader: ExtractTextPlugin.extract("style", 'css!autoprefixer?browsers=last 2 versions!resolve-url!sass?sourceMap')
            },
            {
                test: /\.(png|jpg|gif|svg|ttf|eot|woff|woff2)$/,
                // loader: addHash('file?name=[path][name].[ext]', 'hash:6')
                loader: 'file?name=[path][name].[ext]'
            }
            // ,
            // {
            //     test: /\.pug$/,
            //     loader: "raw-loader" // loaders: ['raw-loader'] is also perfectly acceptable.
            // }
        ]
    },

    devServer: {
        host: 'localhost', // default
        port: 8080, // default
        proxy: [{
            // path: /.*/,
            path: "/backend", // для теста тут в проекте
            target: 'http://localhost:3000'
        }]
        // contentBase: path.join(__dirname, PATHS.dist)
    },

    plugins: [
        new webpack.NoErrorsPlugin(), // для коректной обработки ошибок
        new webpack.DefinePlugin({ // добавляет глобальную переменную
            NODE_ENV: JSON.stringify(NODE_ENV) // stringify для конвертирования в текст, если берем значение из переменной окружения
        }),
        new ExtractTextPlugin(addHash('[name].css', 'contenthash'), {
            allChunks: true, // для того чтоб стили выносились отовсюду, даже из require.ensure
                            // в таком случае первый аргументв в ловдере у ExtractTextPlugin ненужен!!
            disable: NODE_ENV === "development"
        }),
        new HtmlWebpackPlugin({
            filename: 'app.html',
            inject: 'body',
            chunks: ['app'],
            chunksSortMode: "dependency",
            template: './main/index.pug'
        })
    ]
};

if (NODE_ENV === "production") {
    module.exports.plugins.push(
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false,
                drop_console: true,
                unsafe: true
            }
        }),
        new AssetsPlugin({
            filename: 'assets.json',
            path: path.join(__dirname, PATHS.dist)
        })
    );
}
