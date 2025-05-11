const fs = require('fs-extra')
if (fs.existsSync('config.env')) require('dotenv').config({ path: __dirname+'/config.env' })


//═══════[Required Variables]════════,[Make sure you put all values in "" , '']\\
global.owner = process.env.OWNER_NUMBER || '94750625375' ; // Add Your Number without +
global.mongodb = process.env.MONGODB_URI || "mongodb+srv://sandaru:sandu123@cluster0.piqcnbr.mongodb.net/" ; // put mongodb key here
global.port=5000  ;
global.audio = '' ; 
global.video = '' ;
global.blockJids = process.env.BLOCK_JID ||'120363221057889216@g.us' ;
global.allowJids = process.env.ALLOW_JID ||'94750625375@s.whatsapp.net' ;
global.email = 'sithumkalhara271@gmail.com' ; 
global.github = 'https://github.com/Sithuwa/SITHU-MD' ;
global.location = 'Ampara' ;
global.timezone  = process.env.TIME_ZONE || 'Asia/Colombo' //add correct timezone or leave it same , otherwise you get erros
global.gurl = 'https://www.youtube.com/@SITHUWA-MD' ; 
global.sudo =  process.env.SUDO || "94750625375" ; // Do not change it
global.devs = "94761516805"; //Dont change it From here
global.mztit = process.env.SKTIT ||"💛SITHUWA💛", // add your title here
global.Gname = process.env.GNAME ||"sɪᴛʜᴜ-ᴍᴅ-sᴜᴘᴘᴏʀᴛ",
global.zyt = process.env.ZYT || 'https://www.youtube.com/@SITHUWA-MD',
global.waUrl = process.env.WAURL ||"https://chat.whatsapp.com/GmvpSn3gDvw0svXoknTDL9",
global.website = 'https://github.com/Sithuwa/SITHU-MD' ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || 'https://telegra.ph/file/4ba85b752de56b77264c5.jpg' ;
module.exports = {
  sessionName: process.env.SESSION_ID || 'SITHUWA-MD;;;eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoicVBtY0NXTThCeDh5NXBUemR2T21DVHNQYmRaSjZpcFFrZ0VVQlkwNVRHbz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiTm5SUDM1aTZSYWdvVUNuWHFScUQybHdOQlZVbmRHazNsSzN1SkxpaTVtaz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJxQzNsMSt2cHJQWDV0S1h3Mm1BcXZIQmM0YS9tTHF4c2dROXh6WU9kMFdvPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI3U3BEenJjaDJ1YWhGNU1HU3lmZUc2NW56SkU0dEJYSWF6MWVhdTErMm4wPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjZONEFKcUJhV3o5SVNQS0haSkQ0M3h3NWRtOUJTdkZQSHFhaEQ1WmZ6RjQ9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ilp2SlZGdWhwdllBRnV5UnFnWGNUOTNQNzcxQ3VSZXFCbUpmU20ybUJrVjQ9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiaU5ZWFBleG95czRCV1BGVXcwK1l2dEtPL0ZkaWRaSkk4c2dPSkg3ZGgwTT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiaUwrNmN0YXNhV2NyN3RPYVhwQnB0WHdSUS8wZTVNS1IrY1JSRW5pNGZsST0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjFzbnZNUkNvaTNJWTNzMS9rVG1HMjR4aUZHSFBweW41NVA4WDZOTUlNREo3bVN5ald2NFFnVHp6bmFOc3huYmttd2lZTG5nS0FxOGdHMEZJQXVHTkJnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTkwLCJhZHZTZWNyZXRLZXkiOiIyWTJ4TmYzVEdrUXFDa1RQSWdpWWFwcTdsMEJBd2RGR0lTY0FYZUlHdVYwPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6NjEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjo2MSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJXRHVFSUYzSVJnYTdRN2lmTzJoZFd3IiwicGhvbmVJZCI6Ijc2NWRhMGEyLWU4YTMtNDZkYi05MTFhLTU3MWI3NGNhZGE1NSIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI4M1hwUzJzaVhJTHJOSjhJVmxFdVFkS3p3ZVU9In0sInJlZ2lzdGVyZWQiOmZhbHNlLCJiYWNrdXBUb2tlbiI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlhsNGxTQ2RleUdNNENvOFVpTzBGbjluQi9uVT0ifSwicmVnaXN0cmF0aW9uIjp7fSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ01DSTBUUVF6Y3VEd1FZWUFTQUFLQUE9IiwiYWNjb3VudFNpZ25hdHVyZUtleSI6IlpwRmNkbDJUTjNySzdQSUgxT280d1dKYkNmNUFVVnluOHNha1dWcWdKVms9IiwiYWNjb3VudFNpZ25hdHVyZSI6ImVZNi9GamwxN3JuODFOUHFjbTRwQlBCZ0o2UVdpN3BuUklpcHVWd0FteUl5MktsZS9QMGluMndWMjJtTFRHakxNeFo5UkhHeWtmd0FSSGs4UE1kc0RRPT0iLCJkZXZpY2VTaWduYXR1cmUiOiI4dDNHcWo4Nko0eU1McVlFa3ZPS2dIV2hmYzc4VnhTZzNiWlFXZXNpdFYrWHdoRDF4dVVqT0dhOGJ0M1N2RkIrbXlTTEFtRVhoN21DZms1M2ZuWGdBUT09In0sIm1lIjp7ImlkIjoiOTQ3NTk1NTgxMzg6MUBzLndoYXRzYXBwLm5ldCJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiI5NDc1OTU1ODEzODoxQHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQldhUlhIWmRremQ2eXV6eUI5VHFPTUZpV3duK1FGRmNwL0xHcEZsYW9DVloifX1dLCJwbGF0Zm9ybSI6ImFuZHJvaWQiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3NDY5ODY0NDl9',      //Put Your Session Id Here
  botname: process.env.BOT_NAME || 'sɪᴛʜᴜ_ᴍᴅ',  // add the botname you want
  ownername:  process.env.OWNER_NAME || `ツ PROFESH RASH`, // add your name
  author:  process.env.PACK_AUTHER || '𝚂𝙸𝚃𝙷𝚄𝙼 𝙺𝙰𝙻𝙷𝙰𝚁𝙰', 
  auto_read_status : process.env.AUTO_READ_STATUS || 'true', // if it true it automatically views status and send status in your inbox
  packname:  process.env.PACK_NAME || "sɪᴛʜᴜ_ᴍᴅ" , 
  autoreaction: process.env.AUTO_REACTION || 'true', // if it true it will react to all messages
  antibadword : process.env.ANTI_BAD_WORD || 'nobadwordokey',
  alwaysonline: process.env.ALWAYS_ONLINE || 'true', // it will show always online, false it if you dont want
  antifake :   process.env.FAKE_COUNTRY_CODE ||'212',
  readmessage: process.env.READ_MESSAGE || 'false', // it will read all your messages, false it if you dont want
  autovoice: process.env.AUTO_VOICE || 'true',
  HANDLERS: process.env.PREFIX || '.',
  warncount : process.env.WARN_COUNT || 2,
  disablepm: process.env.DISABLE_PM || "false", // if true it will disable your pm
  MsgsInLog:process.env.MSGS_IN_LOG ||'false',
  pmMsgsInLog:process.env.PM_MSGS_IN_LOGS ||'false',
  levelupmessage: process.env.LEVEL_UP_MESSAGE || 'true', 
  antilink: process.env.ANTILINK_VALUES || 'chat.whatsapp.com',
  antilinkaction: process.env.BRANCH || 'remove',
  BRANCH: process.env.BRANCH || 'Main',
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME,
  HEROKU_API_KEY: process.env.HEROKU_API_KEY,
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "34wcCGPoe3yaGtpiBZgx4SN7", // add your remove bg key if you have it
  caption :process.env.CAPTION || "\t*★ᴘᴏᴡᴇʀᴇᴅ ʙʏ★ sɪᴛʜᴜ-ᴍᴅ* ",
  promote_demote_messages : process.env.PROMOTE_DEMOTE_MESSAGES || 'true' ,
  OPENAI_API_KEY: process.env.OPENAI_API_KEY ||'' , // add your openai key if you have it
  VERSION: process.env.VERSION || '𝚅.𝟷.𝟸.𝟽',
  LANG: process.env.THEME|| 'SITHU_MD',
  menu : process.env.MENU || '', // Not Available in current Version
  WORKTYPE: process.env.WORKTYPE || 'public' // if private only you can use your bot, if public everyone use your bot
};


let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(`Update'${__filename}'`)
    delete require.cache[file]
	require(file)
})
