##### Cammy frontend test

##### Important (Because of Mailgun account is a testing account, so some of unauth email address could not receive email)
##### I have sent invitation email to abc@cammy.com, but it doesn't have auth yet.
##### So I also created another Gmail account and gave the auth for that account.
##### Test email is xxx.cammy.test@gmail.com, If you need login password, please send email to xiaoxi625@hotmail.com
# Default email is not abc@cammy.com because mailgun account is testing one, so there is no auth from abc@cammy.com
# Two auth gmail account are  xxx.cammy.test@gmail.com and bphan625@gmail.com, only these two email address is working properly.

##### node version 8.9.x and make sure no process on port 8080, and also start API first
0. npm install
1. npm start
2. In browser, open localhost:8080
3. Fill user information(Email part please fill 'xxx.cammy.test@gmail.com' in email section) on that page, then click bottom button, then it will call api
4. It will jump to "Thank you" page.
5. You can go to database(database connection information has been provided in API readme file) check message data. it should be stored in database.
6. Also, you should receive an Email(Because of Mailgun account is a testing account, so some of unauth email address could not receive email)

##### Testing
npm run test

##### Main part of code is in /src/containers/Contact/index.js then you could find all relative code places from that index.js as well.

##### If you have any questions please send email to xiaoxi625@hotmail.com
