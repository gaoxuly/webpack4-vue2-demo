const path = require('path');

module.exports ={
    mode:'development',
    output: {
        publicPath: '/dist/'
    },
    module: {
        rules:[
            {
                test:/\.vue$/,
                loader: 'vue-loader'
            },
            {
                test: /\.css$/,
                use:[
                    'style-loader',
                    'css-loader'
                ]
            },
            {
                test: /\.less$/,
                use:[
                    'style-loader',
                    'css-loader',
                    'less-loader'
                ]
            },
            {
                test: /\.(gif|jpg|jpeg|png|svg)$/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            name:'[name].[ext]?[hash]'
                        }
                    }
                ]
            }
        ]
    }

}