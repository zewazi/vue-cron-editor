module.exports = {
    publicPath: "/vue-cron-editor",
    transpileDependencies: ["vuetify"],
    chainWebpack: config => {
        // clear the existing entry point
        config
            .entry('main')
            .clear()

        // add your custom entry point
        config
            .entry('main')
            .add('./src/main.ts')
    }
};
