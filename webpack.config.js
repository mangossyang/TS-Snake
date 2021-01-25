
const path = require('path')
const htmlWebpackPlugin= require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
module.exports={
    entry:'./src/index.ts',
    output:{
        //打包文件的目录
        path:path.resolve(__dirname,'dist'),
        //文件名
        filename:"bundle.js",
        environment:{
            arrowFunction:false
        }
    },
    //指定webpack打包时要使用的模块
    module:{
        rules:[
            {
                //test指定规则生效的文件
                test:/\.ts$/,
                //要使用的loader
                use:[
                    //配置babel
                    {
                        //指定加载器
                        loader:'babel-loader',
                        //设置加载器
                        options:{
                            //预定义环境
                            presets:[
                                //指定环境的插件
                               [ "@babel/preset-env",
                                {
                                    //要兼容的目标浏览器
                                    targets:{
                                        "chrome":"58",
                                        "ie":"11"
                                    },
                                    //指定corejs版本
                                    "corejs":"3",
                                    //使用corejs方式
                                    "useBuiltIns":"usage"
                                }
                            ]
                        ]
                        }
                    },
                    'ts-loader'
                ],
                exclude:'/node_modules'
            },
            {
                //设置less文件的处理
                test:/\.less$/,
                use:[
                    "style-loader",
                    "css-loader",
                    // {
                    //     loader:"postcss-loader",
                    //     options:{
                    //         postcssOptions:{
                    //             plugins:[
                    //                 "postcss-preset-env",
                    //                 {
                    //                     browsers:'last 2 versions'
                    //                 }
                    //             ]
                    //         }
                    //     }
                    // },
                    "less-loader"
                ]
            }
        ]
    },
    //配置webpack插件
    plugins:[
        new CleanWebpackPlugin(),
        new htmlWebpackPlugin({
            template: './src/index.html'
        })
    ],
    //设置引用模块
    resolve:{
        extensions:['.ts','.js']
    }


}