export class log4jsconfig{

    static Log() : any{

        let log4js = require('log4js');
        log4js.configure('./config/log4js.json');
        let log = log4js.getLogger("file");
        return log;
    }
    

}