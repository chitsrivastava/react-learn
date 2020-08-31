const webpush = require('web-push');

export default class pushServer{

    
    constructor(props){
        super(props);
        // VAPID keys should only be generated only once.
        const validKeys = webpush.generateVAPIDKeys();
        console.log("WEB-PUSH",validKeys);
    }
}