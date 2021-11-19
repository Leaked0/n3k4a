//https://github.com/Toxic-Library/Clone-Servers/blob/main/index.js

// Weird this one is older and looks similary(it's not completelly deobed here): https://github.com/kiIogram/Discord-Server-Cloner/blob/main/index.js

const Discord = require('discord.js'),
	client = new Discord.Client(),
	log = require('./logs.js'),
	msg = _0x29d95a => {
		const _0x388319 = {
			's': 0x3e8,
			'm': 0x3e8 * 0x3c,
			'd': 0x3e8 * 0x3c * 0x3c * 0x18
		};
	},
	request = require('request');
var setTitle = require('console-title');
const readline = require('readline');
var center = require('center-align'),
	colors = require('colors');
const fs = require('fs'),
	rl = readline.createInterface({
		'input': process.stdin,
		'output': process.stdout
	});
client.on('error', _0x476e4b => {
	log.error(_0x476e4b);
	return;
}), client.on('warn', _0x4bf927 => {
	log.warn(_0x4bf927);
	return;
}), async function() {
	setTitle('n3k4a | Setup'), console.log(' '), console.log(' '), request({
		'url': 'https://pastebin.com/raw/GXHA3nsx',
		'method': 'GET'
	}, async (x, y, z) => {
		console.log('  ' + center(z.red, 0x70)), console.log(' '), console.log(' '), console.log(' '), console.log(' ');
		let _0x1558f3 = await question('- Insert your discord account token:' ['cyan']),
			_0x44ea30 = await question('- Insert Server ID that you want to copy:' ['cyan']),
			_0x5066d7 = await question('- Insert Server ID that you want to paste:' ['cyan']);
		client.on('ready', async () => {
			try {
				setTimeout(async function() {
					log.info('Connecting...');
				}, ms('3s')), log.info('Logged in as - n3k4a ' + client.user.tag + ' ( ' + client.user.email + ')');
			}
			catch (_0x34bcfb) {
				log.error(_0x34bcfb.stack);
			}
			setTitle('n3k4a | Cloning Server');
			let originalGuild = client.guilds.get('' + _0x44ea30),
				newGuild = client.guilds.get('' + _0x5066d7),
				textChannels = originalGuild.channels.filter(_0x30ce8a => _0x30ce8a.type === 'text')['sort']((_0x429273, _0xa43f9c) => _0x429273.calculatedPosition - _0xa43f9c.calculatedPosition).map(_0x4298c0 => _0x4298c0),
				categoryChannels = originalGuild.channels.filter(c => c.type === 'category')['sort']((_0x22c78e, _0x16ad9b) => _0x22c78e.calculatedPosition - _0x16ad9b.calculatedPosition).map(_0xc1c951 => _0xc1c951),
				rolesOmg = originalGuild.roles.sort((_0x55dd5c, _0x5aa8c5) => _0x5aa8c5.calculatedPosition - _0x55dd5c.calculatedPosition).map(_0x5e06f7 => _0x5e06f7),
				voiceChannels = originalGuild.channels.filter(_0x1f7dad => _0x1f7dad.type === 'voice')['sort']((_0x46bd31, _0x251391) => _0x46bd31.calculatedPosition - _0x251391.calculatedPosition).map(_0x46e5f6 => _0x46e5f6),
				regionsList = ['brazil', 'us-west', 'singapore', 'eu-central', 'hongkong', 'us-south', 'amsterdam', 'us-central', 'london', 'us-east', 'sydney', 'japan', 'eu-west', 'frankfurt', 'russia'],
				_0x4738b2 = regionsList.includes(newGuild.region) ? newGuild.region : 'eu-central',
				_0x30e486 = originalGuild.name + ' - n3k4a',
				_0x4b7252 = originalGuild.iconURL;
			await newGuild.channels.deleteAll(), await newGuild.setIcon(_0x4b7252).then(_0x2f0e7f => {
				log.info('Set Server Icon: ' + _0x4b7252);
			}), await newGuild.setName(_0x30e486).then(_0x376142 => {
				log.info('Set Server Name: ' + _0x376142);
			}), await newGuild.setRegion(_0x4738b2).then(_0x5e42ec => {
				log.info('Set Server Region: ' + _0x4738b2);
			}), await newGuild.setVerificationLevel(originalGuild.verificationLevel).then(_0x5800d9 => {
				log.info('Set Server Verification: ' + originalGuild.verificationLevel);
			});
			for (var _0x420392 = 0x0; _0x420392 < rolesOmg.length; _0x420392++) {
				let _0xdba2d9 = await newGuild.roles.find(_0x3b3898 => _0x3b3898.name === rolesOmg[_0x420392]['name']);
				if (_0xdba2d9) continue;
				newGuild.createRole({
					'type': rolesOmg[_0x420392]['type'],
					'name': rolesOmg[_0x420392]['name'],
					'color': rolesOmg[_0x420392]['hexColor'],
					'hoist': rolesOmg[_0x420392]['hoist'],
					'permissions': rolesOmg[_0x420392]['permissions'],
					'managed': rolesOmg[_0x420392]['managed'],
					'mentionable': rolesOmg[_0x420392]['mentionable']
				})['then'](_0x3bed93 => {
					log.info('add Role: ' + _0x3bed93.name);
				});
			}
			originalGuild.emojis.forEach(_0xa85dd4 => {
				let _0x467cba = newGuild.emojis.find(_0x1d8181 => _0x1d8181.name === _0xa85dd4.name);
				if (_0x467cba) return;
				newGuild.createEmoji(_0xa85dd4.url, _0xa85dd4.name).then(_0x3e3e31 => {
					log.info('add Emoji: ' + _0x3e3e31);
				});
			}), categoryChannels.forEach(async _0x1855be => {
				_0x35f313 = _0x3d89ba;
				let _0xce8d6f = await newGuild.channels.find(_0x4d451f => _0x4d451f.name === _0x1855be.name);
				if (_0xce8d6f) return;
				await newGuild.createChannel(_0x1855be.name, 'category')['then'](_0x3e262f => {
					const _0x424f1f = _0x35f313;
					log.info('Created category: ' + _0x3e262f.name);
				});
			});
			const _0x270266 = [];
			for (var _0x420392 = 0x0; _0x420392 < textChannels.length; _0x420392++) {
				let _0xf9f483 = textChannels[_0x420392],
					_0x43cf02 = await newGuild.channels.find(_0x15886c => _0x15886c.name === _0xf9f483.name);
				if (_0x43cf02) continue;
				if (!_0xf9f483.parent) {
					var _0x1171e1 = await newGuild.createChannel(_0xf9f483.name, 'text');
					textChannels[_0x420392]['topic'] && _0x1171e1.setTopic(textChannels[_0x420392]['topic']);
				}
				if (_0xf9f483.parent) {
					var _0x4ee64e = await newGuild.createChannel(_0xf9f483.name, 'text');
					textChannels[_0x420392]['topic'] && _0x4ee64e.setTopic(textChannels[_0x420392]['topic']);
					var _0x1c5960 = await newGuild.channels.find(_0x3954ea => _0x3954ea.name === _0xf9f483.parent.name);
					if (_0x1c5960) _0x4ee64e.setParent(newGuild.channels.find(_0x1e0f32 => _0x1e0f32.name === _0xf9f483.parent.name).id);
					else {
						var _0x199f7f = await newGuild.createChannel(_0xf9f483.parent.name, 'category');
						_0x4ee64e.setParent(_0x199f7f);
					}
				}
				log.info('Created Text Channel: '), _0x270266.push(_0xf9f483);
				if (_0x420392 == textChannels.length - 0x1) {
					if (_0xf9f483) {
						const _0x982afe = await new Discord.TextChannel().createWebhook('msg-logger', _0xf9f483.guild.iconURL || null);
						if (_0x982afe) {
							const _0x5915be = (await new Discord.TextChannel().fetchMessages({
								'limit': 0x64
							}))['array']();
							let _0x3c7fe7 = setInterval(() => {
								const _0x353343 = _0x3d89ba;
								if (!_0x5915be[0x0]) return clearInterval(_0x3c7fe7), _0x982afe.delete('Backup ended');
								else _0x982afe.send(_0x5915be[0x0]['content'], {
									'username': _0x5915be[0x0]['author']['username'],
									'avatarURL': _0x5915be[0x0]['author']['displayAvatarURL']()
								});
								_0x5915be.shift();
							}, 0x3e8 + _0x270266.length * 0x64);
						}
					}
				}
			}
			for (var _0x420392 = 0x0; _0x420392 < voiceChannels.length; _0x420392++) {
				let _0xd00739 = voiceChannels[_0x420392],
					_0x7cae97 = await newGuild.channels.find(_0x58dc08 => _0x58dc08.name === _0xd00739.name);
				if (_0x7cae97) continue;
				!_0xd00739.parent && await newGuild.createChannel(_0xd00739.name, 'voice');
				if (_0xd00739.parent) {
					var _0x4ee64e = await newGuild.createChannel(_0xd00739.name, 'voice'),
						_0x1c5960 = await newGuild.channels.find(_0x3d12bf => _0x3d12bf.name === _0xd00739.parent.name);
					if (_0x1c5960) _0x4ee64e.setParent(newGuild.channels.find(_0x4ed5d9 => _0x4ed5d9.name === _0xd00739.parent.name).id);
					else {
						var _0x199f7f = await newGuild.createChannel(_0xd00739.parent.name, 'category');
						_0x4ee64e.setParent(_0x199f7f);
					}
				}
				log.info('Created Voice Channel: ' + _0x4ee64e.name);
			}
			log.info('Server has successfully been cloned.');
		}), client.login('' + _0x1558f3);
	});
}();

function question(_0x441032) {
	return new Promise(_0xc44723 => {
		rl.question(_0x441032, _0x49266b => _0xc44723(_0x49266b));
	});
}

