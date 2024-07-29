const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "mongodb+srv://trama1:trama1@cluster0.0axhygx.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923184474176";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_04_26_07_29_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjMyLFxuICAgICAgICAyMTAsXG4gICAgICAgIDU4LFxuICAgICAgICAyMjgsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMTQ5LFxuICAgICAgICAxMjEsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMjI4LFxuICAgICAgICAxNjEsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMTU3LFxuICAgICAgICAxNixcbiAgICAgICAgMjM2LFxuICAgICAgICAxNDEsXG4gICAgICAgIDIzNixcbiAgICAgICAgMTk1LFxuICAgICAgICA0MCxcbiAgICAgICAgMTk5LFxuICAgICAgICAxNDksXG4gICAgICAgIDc2LFxuICAgICAgICA5NCxcbiAgICAgICAgMjMsXG4gICAgICAgIDExOSxcbiAgICAgICAgMjAxLFxuICAgICAgICA1LFxuICAgICAgICAyMDAsXG4gICAgICAgIDY3LFxuICAgICAgICA2NyxcbiAgICAgICAgMjE1LFxuICAgICAgICA3MCxcbiAgICAgICAgMTIwXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEwNCxcbiAgICAgICAgMzgsXG4gICAgICAgIDI1NCxcbiAgICAgICAgNTUsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMzEsXG4gICAgICAgIDE3LFxuICAgICAgICA1NSxcbiAgICAgICAgMTcwLFxuICAgICAgICAxMjEsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMjUsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMTg2LFxuICAgICAgICA2MixcbiAgICAgICAgMjYsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMTY5LFxuICAgICAgICAxNzksXG4gICAgICAgIDc0LFxuICAgICAgICAxMjgsXG4gICAgICAgIDE2NixcbiAgICAgICAgMTI0LFxuICAgICAgICAyMzcsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMTE1LFxuICAgICAgICAyNTEsXG4gICAgICAgIDExNCxcbiAgICAgICAgNzksXG4gICAgICAgIDU2LFxuICAgICAgICAyNDMsXG4gICAgICAgIDEyM1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTg0LFxuICAgICAgICAyMzcsXG4gICAgICAgIDM3LFxuICAgICAgICAxNDIsXG4gICAgICAgIDg0LFxuICAgICAgICAxOTMsXG4gICAgICAgIDQxLFxuICAgICAgICAyMixcbiAgICAgICAgMTcxLFxuICAgICAgICA1MyxcbiAgICAgICAgMTIzLFxuICAgICAgICA3OCxcbiAgICAgICAgMTk1LFxuICAgICAgICA2NCxcbiAgICAgICAgMTIsXG4gICAgICAgIDMzLFxuICAgICAgICAxMjgsXG4gICAgICAgIDIzNyxcbiAgICAgICAgOTQsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMTk3LFxuICAgICAgICAxMzcsXG4gICAgICAgIDIyLFxuICAgICAgICAyMTgsXG4gICAgICAgIDk3LFxuICAgICAgICA0LFxuICAgICAgICAxODYsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMTIyLFxuICAgICAgICAyMTksXG4gICAgICAgIDE1MCxcbiAgICAgICAgMTE2XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE3NSxcbiAgICAgICAgNDQsXG4gICAgICAgIDg2LFxuICAgICAgICAxMTksXG4gICAgICAgIDE3NSxcbiAgICAgICAgMTQ0LFxuICAgICAgICAyMTIsXG4gICAgICAgIDQzLFxuICAgICAgICAyNDgsXG4gICAgICAgIDExMyxcbiAgICAgICAgMTYzLFxuICAgICAgICAyMTYsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMjM3LFxuICAgICAgICAxNzUsXG4gICAgICAgIDMsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMTEyLFxuICAgICAgICAyNDUsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMTg1LFxuICAgICAgICAxLFxuICAgICAgICA2MCxcbiAgICAgICAgMTY5LFxuICAgICAgICA0OCxcbiAgICAgICAgMTkyLFxuICAgICAgICA0LFxuICAgICAgICAxMDYsXG4gICAgICAgIDIyMixcbiAgICAgICAgMTE0LFxuICAgICAgICAyNTMsXG4gICAgICAgIDEyXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNjAsXG4gICAgICAgIDg1LFxuICAgICAgICA5NixcbiAgICAgICAgNTQsXG4gICAgICAgIDI3LFxuICAgICAgICAxNjksXG4gICAgICAgIDg1LFxuICAgICAgICAxOTYsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMjUzLFxuICAgICAgICAxMjUsXG4gICAgICAgIDY0LFxuICAgICAgICAxMzcsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMTY5LFxuICAgICAgICA4NCxcbiAgICAgICAgMzEsXG4gICAgICAgIDI4LFxuICAgICAgICAxODksXG4gICAgICAgIDEwOCxcbiAgICAgICAgMTEwLFxuICAgICAgICA4OCxcbiAgICAgICAgMTE0LFxuICAgICAgICAyMDksXG4gICAgICAgIDI0MSxcbiAgICAgICAgMTMzLFxuICAgICAgICAxOTMsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMjUzLFxuICAgICAgICAyNixcbiAgICAgICAgNjIsXG4gICAgICAgIDkzXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIwMixcbiAgICAgICAgNjUsXG4gICAgICAgIDE2NixcbiAgICAgICAgOTgsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMTUzLFxuICAgICAgICAxNjcsXG4gICAgICAgIDE4NixcbiAgICAgICAgMTAsXG4gICAgICAgIDIyLFxuICAgICAgICAyMTksXG4gICAgICAgIDk1LFxuICAgICAgICA3OSxcbiAgICAgICAgMTUwLFxuICAgICAgICA1NCxcbiAgICAgICAgMTI4LFxuICAgICAgICA2LFxuICAgICAgICAyMDMsXG4gICAgICAgIDY5LFxuICAgICAgICAxMjQsXG4gICAgICAgIDE1MxcbiAgICAgICAgMTgwLFxuICAgICAgICAxMTcsXG4gICAgICAgIDEwNSxcbiAgICAgICAgNDMsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMjQsXG4gICAgICAgIDIxOSxcbiAgICAgICAgNjQsXG4gICAgICAgIDcsXG4gICAgICAgIDUxLFxuICAgICAgICA4NFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyMDgsXG4gICAgICAgICAgMTkxLFxuICAgICAgICAgIDE1OCxcbiAgICAgICAgICAxLFxuICAgICAgICAgIDIwOSxcbiAgICAgICAgICAyNDksXG4gICAgICAgICAgNCxcbiAgICAgICAgICAxMDYsXG4gICAgICAgICAgMTI4LFxuICAgICAgICAgIDI0NSxcbiAgICAgICAgICAyMTEsXG4gICAgICAgICAgMTMxLFxuICAgICAgICAgIDI1NCxcbiAgICAgICAgICAzMCxcbiAgICAgICAgICA2NCxcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgMjQsXG4gICAgICAgICAgMjUwLFxuICAgICAgICAgIDMzLFxuICAgICAgICAgIDExNSxcbiAgICAgICAgICAyMDgsXG4gICAgICAgICAgMjM5LFxuICAgICAgICAgIDIzMixcbiAgICAgICAgICAzNyxcbiAgICAgICAgICA2MSxcbiAgICAgICAgICA4OSxcbiAgICAgICAgICA5NCxcbiAgICAgICAgICA4NSxcbiAgICAgICAgICA5NyxcbiAgICAgICAgICA3MSxcbiAgICAgICAgICAxMzgsXG4gICAgICAgICAgNzFcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTk5LFxuICAgICAgICAgIDIwNixcbiAgICAgICAgICAyMCxcbiAgICAgICAgICAzNCxcbiAgICAgICAgICA0OSxcbiAgICAgICAgICA1OSxcbiAgICAgICAgICAxODcsXG4gICAgICAgICAgNjUsXG4gICAgICAgICAgMTA3LFxuICAgICAgICAgIDE4OSxcbiAgICAgICAgICAxMyxcbiAgICAgICAgICAxOTgsXG4gICAgICAgICAgNjEsXG4gICAgICAgICAgMTYxLFxuICAgICAgICAgIDIzOCxcbiAgICAgICAgICAxOSxcbiAgICAgICAgICAyMjgsXG4gICAgICAgICAgMTksXG4gICAgICAgICAgMjksXG4gICAgICAgICAgMTY5LFxuICAgICAgICAgIDg2LFxuICAgICAgICAgIDE4NCxcbiAgICAgICAgICA3OSxcbiAgICAgICAgICAxNDEsXG4gICAgICAgICAgMjE1LFxuICAgICAgICAgIDIzNixcbiAgICAgICAgICA3MyxcbiAgICAgICAgICAyNTEsXG4gICAgICAgICAgMTEwLFxuICAgICAgICAgIDI0NSxcbiAgICAgICAgICAzNSxcbiAgICAgICAgICA2MlxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI1NCxcbiAgICAgICAgMTc5LFxuICAgICAgICAyMDMsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMTg4LFxuICAgICAgICAxMzEsXG4gICAgICAgIDYxLFxuICAgICAgICA3MSxcbiAgICAgICAgMTM0LFxuICAgICAgICA1OSxcbiAgICAgICAgMzEsXG4gICAgICAgIDExMSxcbiAgICAgICAgNCxcbiAgICAgICAgNzcsXG4gICAgICAgIDM2LFxuICAgICAgICAxNjYsXG4gICAgICAgIDQ4LFxuICAgICAgICAxNzUsXG4gICAgICAgIDExOCxcbiAgICAgICAgMjQ5LFxuICAgICAgICAyMTksXG4gICAgICAgIDE5MixcbiAgICAgICAgMzgsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMTQ0LFxuICAgICAgICA0LFxuICAgICAgICAxMzYsXG4gICAgICAgIDI5LFxuICAgICAgICA2MCxcbiAgICAgICAgMTI5LFxuICAgICAgICAyMTAsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMjAwLFxuICAgICAgICA4MyxcbiAgICAgICAgMTI5LFxuICAgICAgICA4NyxcbiAgICAgICAgMTQzLFxuICAgICAgICAxNzksXG4gICAgICAgIDYyLFxuICAgICAgICAyMDMsXG4gICAgICAgIDIxNCxcbiAgICAgICAgNDUsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMTQxLFxuICAgICAgICAxMTksXG4gICAgICAgIDY4LFxuICAgICAgICA3MSxcbiAgICAgICAgMTI3LFxuICAgICAgICA4MCxcbiAgICAgICAgMCxcbiAgICAgICAgNzAsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMTM2LFxuICAgICAgICAxNDAsXG4gICAgICAgIDEwMyxcbiAgICAgICAgNTUsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMTQ5LFxuICAgICAgICAyMjQsXG4gICAgICAgIDEzMixcbiAgICAgICAgMTM4LFxuICAgICAgICAyMyxcbiAgICAgICAgNzQsXG4gICAgICAgIDE0XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAyMzMsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiQ1JnU0ZBZFVoRGtMQmpBaUR0Y3VWelhqOUtZYy9rNkFLc2lWSmg1bnltdz1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW1xuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCIyNDk5OTE2NzI2MzdAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIjlDMzhBNTcxQzg0RUMyMUQ0OUNBNUZEOEU2RENERkI2XCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcyMjIyNzE1OVxuICAgIH0sXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjI0OTk5MTY3MjYzN0BzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiMzk1NzRCMzYzQkJBNEM2NDU3MjFDODMyMTdFQjlDMUJcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzIyMjI3MTYyXG4gICAgfVxuICBdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMSxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIlNnYzI1dXQzUjUyTi1EX1c5VTV1YXdcIixcbiAgXCJwaG9uZUlkXCI6IFwiN2UyOWQ5ODUtMTQ3MC00NTcyLTkyZjctMjMwM2Y4YWQ1OTEyXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDI1NSxcbiAgICAgIDEwNSxcbiAgICAgIDYxLFxuICAgICAgMjQyLFxuICAgICAgMjUxLFxuICAgICAgODMsXG4gICAgICA0MSxcbiAgICAgIDc4LFxuICAgICAgMjUsXG4gICAgICAxMDgsXG4gICAgICAxMDAsXG4gICAgICA2NCxcbiAgICAgIDE3OSxcbiAgICAgIDE2MCxcbiAgICAgIDYzLFxuICAgICAgMTg4LFxuICAgICAgMTIwLFxuICAgICAgMjI1LFxuICAgICAgOTYsXG4gICAgICA4M1xuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IGZhbHNlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTEyLFxuICAgICAgMTcwLFxuICAgICAgMTkzLFxuICAgICAgMTA3LFxuICAgICAgOTgsXG4gICAgICAxMTQsXG4gICAgICAxODUsXG4gICAgICAyMzEsXG4gICAgICA4NyxcbiAgICAgIDcwLFxuICAgICAgMTM0LFxuICAgICAgMTA3LFxuICAgICAgODUsXG4gICAgICAyNyxcbiAgICAgIDEyMSxcbiAgICAgIDM3LFxuICAgICAgMjA2LFxuICAgICAgMjA4LFxuICAgICAgNTMsXG4gICAgICAxMjNcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNOMmY2Nk1CRU5Dem5MVUdHQWdnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIlpMcnpjenNZcEdQbXA5M2h5bERCVFg4RkZBT0FNd3hGUkpzUU03aGdnWGs9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiQ1ZKRUtOVGF2T053MUNPU3BPbWFDbzZOZWVzMk1LZGcxZEY4N0NVUmZSdWFmV2JMeW1Zd08wbWkyZjF1SGZ5ME9kaWRDcEpySTVjUEFlenhRWUhNRGc9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiWWRpYldOaGs1Zmx4cDFmaEZ2b2NBMnBVaUFNV09rSlQyN0dWU2FuaFRhSHNCeGxvVzFUcXdQU2JxMFVnSXJmaG9zdXhTYW52S2w4cEttbysySTQ0RHc9PVwiXG4gIH0sXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyNDk5OTE2NzI2Mzc6MjBAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjE4NjcxOTkxMTU5MTk1MjoyMEBsaWRcIixcbiAgICBcIm5hbWVcIjogXCJZdWtp4oSiIChCZXRhKfCfjLhcIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjI0OTk5MTY3MjYzNzoyMEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDEwMCxcbiAgICAgICAgICAxODYsXG4gICAgICAgICAgMjQzLFxuICAgICAgICAgIDExNSxcbiAgICAgICAgICA1OSxcbiAgICAgICAgICAyNCxcbiAgICAgICAgICAxNjQsXG4gICAgICAgICAgOTksXG4gICAgICAgICAgMjMwLFxuICAgICAgICAgIDE2NyxcbiAgICAgICAgICAyMjEsXG4gICAgICAgICAgMjI1LFxuICAgICAgICAgIDIwMixcbiAgICAgICAgICA4MCxcbiAgICAgICAgICAxOTMsXG4gICAgICAgICAgNzcsXG4gICAgICAgICAgMTI3LFxuICAgICAgICAgIDUsXG4gICAgICAgICAgMjAsXG4gICAgICAgICAgMyxcbiAgICAgICAgICAxMjgsXG4gICAgICAgICAgNTEsXG4gICAgICAgICAgMTIsXG4gICAgICAgICAgNjksXG4gICAgICAgICAgNjgsXG4gICAgICAgICAgMTU1LFxuICAgICAgICAgIDE2LFxuICAgICAgICAgIDUxLFxuICAgICAgICAgIDE4NCxcbiAgICAgICAgICA5NixcbiAgICAgICAgICAxMjksXG4gICAgICAgICAgMTIxXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjIyMjcxNTYsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFNbzJcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQU1vMS5qc29uIjogIntcImtleURhdGFcIjpcIjhKTW1ibDArOTRHTDV1blF6bWJuUTZ0TDIrbWNDQjg1NnkxYUY2ZWc1YU09XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MzQzNTkyOTI1LFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjBcIn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFNbzIuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJuOEhvY3FVcjRnMk52cWpCRDEwMnY0N2dndDdvMG9hSWNVbTRqZ2hoNGE0PVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjM0MzU5MjkyNSxcImN1cnJlbnRJbmRleFwiOjMsXCJkZXZpY2VJbmRleGVzXCI6WzAsMSwyXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MjIxODAyNzIxMjVcIn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFNbzMuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJGc1hnY0FYSkUxUGQzN1pGUGs1Mmw3RWViTmVqQzltWUlFT05tUExMZ2ZFPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjM0MzU5MjkyNSxcImN1cnJlbnRJbmRleFwiOjQsXCJkZXZpY2VJbmRleGVzXCI6WzAsMSwyXX0sXCJ0aW1lc3RhbXBcIjpcIjBcIn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFNbzQuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCI3c1B3UjJlUDNIM3lENk80Z0JRVEZlSi8yNGtaWjlZckQ3UGozVm1oMlE0PVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjM0MzU5MjkyNSxcImN1cnJlbnRJbmRleFwiOjUsXCJkZXZpY2VJbmRleGVzXCI6WzAsMSwyXX0sXCJ0aW1lc3RhbXBcIjpcIjBIn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFNbzUuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJQWmpaUktNVmk0a0hLbjh4SHhRQi9iMmtpZWdkRUlFODk4eDNOYUdjbmowPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjM0MzU5MjkyNSxcImN1cnJlbnRJbmRleFwiOjYsXCJkZXZpY2VJbmRleGVzXCI6WzAsMSwyXX0sXCJ0aW1lc3RhbXBcIjpcIjBcIn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFNbzYuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJJa1Z0QmpJNkNEcEd0MVZ1cnNhbm54cCtBM0hRVlVmTHJ2QWxKSEs3cmdBPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjM0MzU5MjkyNSxcImN1cnJlbnRJbmRleFwiOjcsXCJkZXZpY2VJbmRleGVzXCI6WzAsMSwyXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MjIyMjcxMzY3NTVcIn0iCn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
