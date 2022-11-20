const HtmlWebpackPlugin=require("html-webpack-plugin")
const path = require("path");
module.exports={
    stats:{
        errorDetails:true
    },
    entry:"./src/index.js",
    output:{
        path:path.resolve(__dirname,"dist"),
        filename:"bundle.js"
    },
    module:{
        rules:[
            {
                test:/\.(js)$/,
                exclude:/node_modules/,
                use:["babel-loader"]
            },
            {
                test:/\.(css)$/,
                use:["style-loader","css-loader"]
            },
            {
                test:/\.(jpe?g|png|svg)$/,
                use:[
                    {
                        loader:'file-loader',
                        options:{
                            name:'[name].[ext]',
                            outputPath:'img/'
                        }
                    }
                ]
            }
        ]
    },
    devServer:{        					   //Webpack development server will automatically recompile and serve the page.No need to re-establish server to every change. Kinda like nodemon
		static:{
			directory:path.resolve(__dirname,"dist"),  //This build.js wil be acessed and served ---need to be confirmed
		},
		port:3500
	},
    resolve:{
        extensions:["*",".js",".jsx"]
    },
    
    plugins:[
		new HtmlWebpackPlugin({           //I am gonna generate an 'index.html' for you and will inject build.js from output.filename to 'index.html' 
            template:path.resolve(__dirname,"public","index.html")  //path.join(root directory, folder name, fileName)
		})
	],
    mode:process.env.NODE_ENV==="production"?"production":"development"  //optional
}