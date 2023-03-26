/*
Midi Sound Engine v4.0.0

Tridashie Sound Engine?

my custom sound engine https://scratch.mit.edu/projects/561308953/

My Soundbank 13,577,818 Byte

2023/03/26 Anim Tred Studio, LLC
*/
(function(modules) {
	var installedModules = {};
	function __webpack_require__(moduleId) {
		if(installedModules[moduleId]) {
			return installedModules[moduleId].exports;
		}
		var e = installedModules[moduleId] = {
			i: moduleId,
			l: false,
			exports: {}
		};
		modules[moduleId].call(e.exports, e, e.exports, __webpack_require__);
		e.l = true;
		return e.exports;
	}
	__webpack_require__.path = "";
	return __webpack_require__('./src/index.js');
})({
	'./src/soundbank.js': function(module, exports, __webpack_require__) {
		var DRUMS = {
			"snare drum": {},
			"side stick": { volume: 0.7 },
			"crash cymbal": { volume: 0.85 },
			"open hi hat": { volume: 0.5 },
			"closed hi hat": { volume: 0.5 },
			"low floor tom": {},
			"high floor tom": {},
			"low tom": {},
			"low mid tom": {},
			"hi mid tom": {},
			"high tom": {},
			"tambourine": { volume: 0.35 },
			"hand": { volume: 0.8 },
			"claves": { volume: 0.35 },
			"wood": { volume: 0.9 },
			"cowbell": { volume: 0.63 },
			"triangle": { volume: 0.5 },
			"bongo": {},
			"cabasa": {},
			"long guiro": {},
			"short guiro": { volume: 0.45 },
			"vibraslap": { volume: 0.22 },
			"cuica": {},
			"short whistle": { volume: 0.75 },
			"long whistle": { volume: 0.7 },
			"low wood": {},
			"hi bongo": {},
			"low cuica": {},
			"mute triangle": { volume: 0.5 },
			"high agogo": { volume: 0.7 },
			"low agogo": { volume: 0.7 },
			"conga": {},
			"open conga": {},
			"mute conga": {},
			"acoustic bass drum": { volume: 0.73 }
		}
		var INSTRUMENT = {
			"piano": { releaseTime: 0.12, volume: [[36, 0.8], [48, 0.65], [60, 0.4], [72, 0.3]] },
			"electric piano": { releaseTime: 0.12, volume: 0.7 },
			"organ": { releaseTime: 0.12, volume: [[48, 0.72], [60, 0.68], [72, 0.6]], releasePatch: 52 },
			"guitar": { releaseTime: 0.12, volume: [[48, 0.62], [60, 0.58]] },
			"electric guitar": { releaseTime: 0.12, releasePatch: 60, volume: 0.5 },
			"bass": { releaseTime: 0.12, releasePatch: 57, volume: [[36, 0.52], [48, 0.42], [60, 0.38], [72, 0.33]] },
			"pizzicato": { releaseTime: 0.25, volume: [[48, 0.5], [60, 0.42]], releasePatch: 47 },
			"harmonica": { loop: true, volume: 0.5 },
			"clarinet": { loop: true, volume: 0.6 },
			"saxophone": { loop: true, volume: 0.64, releasePatch: 59.75 },
			"violin": { releaseTime: 0.12, loop: true, volume: [[60, 0.62], [72, 0.58]] },
			"violin_2": { releaseTime: 0.25, loop: true, volume: [[60, 0.58], [72, 0.53]] },
			"overdriven guitar": { releasePatch: 61, loop: true, volume: [[48, 0.74], [60, 0.66]] },
			"flute": { loop: true, loopStart: 2, releasePatch: 63, loopEnd: 25, volume: [[60, 0.68], [72, 0.48]] },
			"wooden flute": { releasePatch: 58, loop: true, volume: [[60, 0.8], [72, 0.7]]},
			"bassoon": { loop: true, volume: [[36, 0.68], [48, 0.6], [60, 0.48], [72, 0.42]] },
			"choir": { releaseTime: 0.15, releasePatch: 55, loop: true, volume: [[60, 0.6], [72, 0.54]] },
			"vibraphone": { releaseTime: 0.1, releasePatch: 58, volume: 0.52 },
			"music box": { releaseTime: 0.5, releasePatch: 60.75, volume: [[60, 0.52], [72, 0.48]] },
			"steel drum": { releaseTime: 0.2, releasePatch: 57.5, volume: 0.55 },
			"marimba": { releaseTime: 0.12, releasePatch: 49, volume: [[60, 0.62], [72, 0.54]] },
			"synth lead": { releaseTime: 0.1, loop: true, releasePatch: 57,  volume: [[48, 0.5], [60, 0.45], [72, 0.4], [84, 0.3]] },
			"synth pad": { releaseTime: 0.1, loop: true,  volume: 0.6 },
			"timpani": { releaseTime: 0.1, volume: 0.8 },
			"whistle": { loop: true,  volume: 0.55 },
			"accordion": { loop: true, releasePatch: 59,  volume: [[48, 0.42], [60, 0.32], [72, 0.25]] },
			"orchestra hit": { releaseTime: 0.25, releasePatch: 63, volume: 0.8 },
			"melodic tom": { releaseTime: 0.25, releasePatch: 60, volume: 0.85  },
			"synth drum": { releaseTime: 0.25, releasePatch: 60, volume: 0.6  },
			"church organ": { releaseTime: 0.1, loop: true, releasePatch: 51, volume: [[36, 1], [48, 0.9], [60, 0.8]] },
			"trumpet": { releasePatch: 55, volume: [[48, 0.75], [60, 0.63], [72, 0.56]], loop: true },
			"trumbone": { releasePatch: 61, volume: [[48, 0.8], [60, 0.62], [72, 0.54]], loop: true },
			"taiko drum": { releaseTime: 0.25, releasePatch: 62, volume: 0.8 },
			"reverse cymbal": { volume: 0.6 },
			"gumshot": { releaseTime: 1 },
			"agogo": { releaseTime: 0.25 },
			"warm": { releaseTime: 0.25, loop: true, volume: [[60, 0.64], [72, 0.5]] }
		}
		var SOUNDBANK_INFOS = {
			// drums
			"snare drum": {
				title: "Pinkie the Babysitter (Baby Cakes) | MLP: FiM [HD]",
				source: "https://youtu.be/TJ6w9LRH7ts?t=60",
				file: "f8e9a4862f16d6e0bb58e8595cd5a4ad.wav"
			},
			"side stick": {
				title: "MLP: PONY LIFE CAPITULO 18 REACCIÓN! DERPYY!!",
				source: null,
				file: "06f1484566bb6149673c05ee9c14f5f6.wav"
			},
			"crash cymbal": {
				title: "Pinkie the Babysitter (Baby Cakes) | MLP: FiM [HD]",
				source: "https://youtu.be/TJ6w9LRH7ts?t=60",
				file: "d2047cb8e805c3d127c469de2fc1d329.wav"
			},
			"open hi hat": {
				title: "My little pony-season 8 episode 10:The Break Up Breakdown",
				source: "https://youtu.be/S3sIFvA2b-U?t=398",
				file: "46cbebfbac0b11dc76c2e738b78120e4.wav"
			},
			"closed hi hat": {
				title: "My little pony-season 8 episode 10:The Break Up Breakdown",
				source: "https://youtu.be/S3sIFvA2b-U?t=398",
				file: "d7ada32c710b0a883266f4b94b1db43c.wav"
			},
			"low floor tom": {
				title: "My Little Pony Season 5 Episode 9",
				source: "https://youtube.com/watch?v=lzpUO8-Xowk&t=471s",
				file: "4c76166ce0d9b4853e0715f107b01c28.wav"
			},
			"high floor tom":{
				title: "My Little Pony Season 5 Episode 9",
				source: "https://youtube.com/watch?v=lzpUO8-Xowk&t=471s",
				file: "5266b9988ee896bc2bab9cd496c42a98.wav"
			},
			"low tom": {
				title: "My Little Pony Season 5 Episode 9",
				source: "https://youtube.com/watch?v=lzpUO8-Xowk&t=471s",
				file: "8555d813e84048f781c4ff44c6430739.wav"
			},
			"low mid tom": {
				title: "My Little Pony Season 5 Episode 9",
				source: "https://youtube.com/watch?v=lzpUO8-Xowk&t=471s",
				file: "3b3fced980db142e737e15321a7eb7ef.wav"
			},
			"hi mid tom": {
				title: "My Little Pony Season 5 Episode 9",
				source: "https://youtube.com/watch?v=lzpUO8-Xowk&t=471s",
				file: "3e3c032e6bc334b7294310585f79662b.wav"
			},
			"high tom": {
				title: "My Little Pony Season 5 Episode 9",
				source: "https://youtube.com/watch?v=lzpUO8-Xowk&t=471s",
				file: "f57d7b55ae028fb6691530bb3c54bdb2.wav"
			},
			"tambourine": {
				title: "Daddy Pig Plays The Drums!  | @Peppa Pig - Official Channel",
				source: "https://youtu.be/aHEhixFSt-0?t=51",
				file: "4fbbc63e66e4fd7b8611c11343f91fd2.wav"
			},
			"hand": {
				title: "When I'm Sweeping",
				source: "https://youtu.be/u9l9F2H1yn0?t=16",
				file: "8158cc2e2219fb6f7cbfdfd051a3ed72.wav"
			},
			"claves": {
				title: "My little pony-season 8 episode 10:The Break Up Breakdown",
				source: "https://youtu.be/S3sIFvA2b-U?t=22",
				file: "ef64be4f8da4730868cc931f3a15656f.wav"
			},
			"wood": {
				title: "Friendship is Randomly Musical 1",
				source: "https://youtube.com/watch?v=nX1WTsUjCLM&t=67s",
				file: "94bf611190e55266b6250b8bbc17ed24.wav"
			},
			"cowbell": {
				title: "Chicken Little",
				source: null,
				file: "1760020eb37fe3709c40f60d2a8ef544.wav"
			},
			"triangle": {
				title: "[Tridashie] Friendship is Randomly Musical 2 [REUPLOAD]",
				source: "https://youtu.be/y7ho58raWac?t=30",
				file: "0136ce7fbd955f39bb46de40e12be0bc.wav"
			},
			"bongo": {
				title: "Daddy Pig Plays The Drums!  | @Peppa Pig - Official Channel",
				source: "https://youtu.be/aHEhixFSt-0?t=30",
				file: "336220063f686b0f245430f76cbceb4d.wav"
			},
			"conga": {
				title: "My Little Pony Friendship is Magic season 2 episode 19 \"Putting Your Hoof Down\"",
				source: "https://youtu.be/qjhL0p3dHwM?t=38",
				file: "fd5036ce507cd959596e9770efe62415.wav"
			},
			"cabasa": {
				title: "My little pony season 8 episode 4(Fake it 'Til you make it)",
				source: "https://youtu.be/HGK7o5TVVF4?t=1300",
				file: "8b5d05fd13d7e56d91a92690a45d03a2.wav"
			},
			"long guiro": {
				title: "Daddy Pig Plays The Drums!  | @Peppa Pig - Official Channel",
				source: "https://youtu.be/aHEhixFSt-0?t=63",
				file: "601103abf81fc9385f36dd9b47c703ee.wav"
			},
			"vibraslap": {
				title: "My little pony-season 8 episode 10:The Break Up Breakdown",
				source: "https://youtu.be/S3sIFvA2b-U?t=22",
				file: "3934ec317365ad390c5c87c633b189b0.wav"
			},
			"cuica": {
				title: "Friendship is Randomly Musical 8",
				source: "https://youtu.be/JQtbvAmwYVI?t=67",
				file: "b1ebe9cbd60498d3c28ff97ffd26bcdb.wav"
			},
			"short whistle": {
				title: "My Little Pony friendship is magic season 2 episode 7 \"May the Best Pet Win!\"",
				source: "https://youtu.be/GpSNka9ft-w?t=425",
				file: "66eeb991358947dc9354c4fe75254dca.wav"
			},
			"long whistle": {
				title: "My Little Pony friendship is magic season 2 episode 7 \"May the Best Pet Win!\"",
				source: "https://youtu.be/GpSNka9ft-w?t=425",
				file: "545ba524892f481b16633483a19ca963.wav"
			},
			"short guiro": {
				title: "Daddy Pig Plays The Drums!  | @Peppa Pig - Official Channel",
				source: "https://youtu.be/aHEhixFSt-0?t=63",
				file: "f7b53554ebdd758c615cdc574bad7ea5.wav"
			},
			"low wood": {
				title: "Friendship is Randomly Musical 1",
				source: "https://youtube.com/watch?v=nX1WTsUjCLM&t=67s",
				file: "28050489c468fd887d1b45812d183bd3.wav"
			},
			"hi bongo": {
				title: "Daddy Pig Plays The Drums!  | @Peppa Pig - Official Channel",
				source: "https://youtu.be/aHEhixFSt-0?t=30",
				file: "8bb317a1069d04e13c23af27f2fdb76c.wav"
			},
			"low cuica": {
				title: "Friendship is Randomly Musical 8",
				source: "https://youtu.be/JQtbvAmwYVI?t=67",
				file: "2373fc1cf3ff5352b7ece3603999927a.wav"
			},
			"mute triangle": {
				title: "[Tridashie] Friendship is Randomly Musical 2 [REUPLOAD]",
				source: "https://youtu.be/y7ho58raWac?t=30",
				file: "af2148dba23faab1dec7cdd31663e292.wav"
			},
			"high agogo": {
				title: "My Little Pony: FIM Season 9 Episode 15 (2,4,6 Greaaat)",
				source: "https://youtu.be/MluslXu-Pnk?t=937",
				file: "14a03edc9dcaa6099e8def15bc187e10.wav"
			},
			"low agogo": {
				title: "My Little Pony: FIM Season 9 Episode 15 (2,4,6 Greaaat)",
				source: "https://youtu.be/MluslXu-Pnk?t=937",
				file: "f0379c9ab60a09f8f7cccb1cc32ac378.wav"
			},
			"open conga": {
				title: "Peppa Pig Makes Music Instrument with Marbles | Peppa Pig Official Family Kids Cartoon",
				source: "https://youtu.be/eGb3Edtrm1s?t=64",
				file: "41ff2db5a55a45496d63fb0dbdbedd7c.wav"
			},
			"mute conga": {
				title: "Peppa Pig Makes Music Instrument with Marbles | Peppa Pig Official Family Kids Cartoon",
				source: "https://youtu.be/eGb3Edtrm1s?t=64",
				file: "66c02912796e3b9f56a6d60081b96931.wav"
			},
			"acoustic bass drum": {
				title: "Friendship is Musical | Season 3",
				source: "https://youtu.be/7WFZEuvZG0s?t=83",
				file: "a639a88d1c502adf8a3fd9889ee9ae77.wav"
			},
			// instruments 
			"piano": {
				title: "Friendship is Musical | Season 1 Episode 17-18",
				source: "https://youtu.be/_CZQ6tfivVs?t=89",
				file: "39237faddf2e6c7d3d8f6d39ae30d8e6.wav"
			},
			"electric piano": {
				title: "My Little Pony: Friendship is Magic - Season 4 Episode 3",
				source: "https://youtu.be/oqaH8rTKu8M?t=820",
				file: "d07006b09cfbac92e3c5bef85ccd3d36.wav"
			},
			"organ": {
				title: "My Little Pony : Friendship is Magic Season 1 Episode 22",
				source: "https://youtu.be/csuoJQH6Axs?t=176",
				file: "dc54c4335b9b365320ce2f0b5a3096ff.wav"
			},
			"guitar": {
				title: "Bright Mac and Pear Butter's Love Story (The Perfect Pear) | MLP: FiM [HD]",
				source: "https://youtu.be/Flv6_BrwPVU?t=193",
				file: "0328765961864d1ff2bc8aa2003489b0.wav"
			},
			"electric guitar": {
				title: "Friendship is Musical VGM #1",
				source: "https://youtu.be/qqB2J3-rMIc?t=12",
				file: "ace30ecd40b0ee7e7d77361e53e1f607.wav"
			},
			"bass": {
				title: "Friendship is Musical Season 2 First Half",
				source: "https://youtu.be/yqYQoVwFn4E?t=143",
				file: "c87bdd77085d5ef9688a4c88b5317947.wav"
			},
			"pizzicato": {
				title: "Friendship is Musical | Season 3",
				source: "https://youtu.be/7WFZEuvZG0s?t=168",
				file: "f527e3719ee8b7b64062e5f9a4b33169.wav"
			},
			"harmonica": {
				title: "Crescend Cinnamon on Twitter: \"https://t.co/zNTcb7oUSz\" / Twitter",
				source: "https://t.co/zNTcb7oUSz",
				file: "c7b1809c6bb6b0cbf1928d796d1d5eea.wav"
			},
			"clarinet": {
				title: "My Little Pony Friendship Is Magic Season 4 Episode 21 Testing, 1, 2, 3 HD",
				source: "https://youtu.be/RGIFQn8rlXw?t=282",
				file: "086fb0c3d8dfab35aaba3c8e1dfb05af.wav"
			},
			"saxophone": {
				title: "My Little Pony Friendship is Magic season 2 episode 22 \"Hurricane Fluttershy\"",
				source: "https://youtu.be/YK7vf0OkmRQ?t=953",
				file: "aa878420c089b36eab7064b70ac27818.wav"
			},
			"violin": {
				title: "Peppa Pig - Musical Instruments (full episode)",
				source: "https://youtu.be/n4gsHAH_q6s?t=69",
				file: "9f121cecc17a68610598587467cfc149.wav"
			},
			"violin_2": {
				title: "Peppa Pig - Musical Instruments (full episode)",
				source: "https://youtu.be/n4gsHAH_q6s?t=69",
				file: "f20c97f5b8369555f1f78e6c2040a8d3.wav"
			},
			"overdriven guitar": {
				title: "Friendship is Musical VGM #1",
				source: "https://youtu.be/qqB2J3-rMIc?t=24",
				file: "578d9cba77e8d6f578b31d5f4a31c151.wav"
			},
			"flute": {
				title: "Friendship is Musical | Season 5 (First Half)",
				source: "https://youtu.be/5pcCX7904d4?t=117",
				file: "10e4407f269919a8da1b686ec71d7953.wav"
			},
			"wooden flute": {
				title: "Peppa Pig Makes Music Instrument with Marbles | Peppa Pig Official Family Kids Cartoon",
				source: "https://youtu.be/eGb3Edtrm1s?t=114",
				file: "49589ee679b86fb05a411ebc302d407d.wav"
			},
			"bassoon": {
				title: "Friendship is Randomly Musical 5",
				source: "https://youtu.be/uoHPvvPGcAw?t=77",
				file: "925bc0db0ad640181cbbd961c326d1fd.wav"
			},
			"choir": {
				title: "Friendship is Musical | Season 1 Episode 21-22",
				source: "https://youtu.be/UZRoOAzI3wo?t=1",
				file: "43c9b3aafd224f62be45c990bef7896b.wav"
			},
			"vibraphone": {
				title: "My Little Pony friendship is magic season 2 episode 10 \"Secret of My Excess\"",
				source: "https://youtu.be/m9xyYfih99Q?t=49",
				file: "354604052268eeeb24b5cb6c6df3ba44.wav"
			},
			"music box": {
				title: "Friendship is Randomly Musical 3 [REUPLOAD]",
				source: "https://youtu.be/rG5ukrHNqE4?t=14",
				file: "e66135be886992bd1be58f1c6eefb8e2.wav"
			},
			"steel drum": {
				title: "Friendship is Musical | Season 3",
				source: "https://youtu.be/7WFZEuvZG0s?t=5",
				file: "98fa3eefd30afd2377db250f33dffe5d.wav"
			},
			"marimba": {
				title: "Friendship is Musical | Season 1 Episode 17-18",
				source: "https://youtu.be/_CZQ6tfivVs?t=30",
				file: "aa0531b278664dfdf9254f2f5676d0e4.wav"
			},
			"synth lead": {
				title: "Friendship is Musical | Season 1 Episode 21-22",
				source: "https://youtu.be/UZRoOAzI3wo?t=3",
				file: "eef84ef4c9a76eb92218deee402a71aa.wav"
			},
			"synth pad": {
				title: "Friendship is Musical | Season 1 Episode 13-14",
				source: "https://youtu.be/QHOjFbbbrXQ?t=40",
				file: "6dd9834236dfc66bea70e387c1481941.wav"
			},
			"timpani": {
				title: "Peppa Pig - Musical Instruments (full episode)",
				source: "https://youtu.be/n4gsHAH_q6s?t=114",
				file: "c4bad1057968e352c835bd5c805f911c.wav"
			},
			"whistle": {
				title: "Whistling Competition Between Peppa Pig and Suzy Sheep",
				source: "https://youtu.be/9ptrXeS7CaE?t=4",
				file: "1d83be8a2f77baae0f03277ea629ee93.wav"
			},
			"orchestra hit": {
				title: "Friendship is Musical | Season 1 Episode 5-6",
				source: "https://youtu.be/EXrDap-pIdk?t=109",
				file: "5fa7509939b2908b5eadd34d4965f2b6.wav"
			},
			"melodic tom": {
				title: "My Little Pony Season 5 Episode 9",
				source: "https://m.youtube.com/watch?v=lzpUO8-Xowk&t=471s",
				file: "baa611917d9f86ec22b1240a0df9e509.wav"
			},
			"synth drum": {
				title: "My Little Pony Season 5 Episode 9",
				source: "https://m.youtube.com/watch?v=lzpUO8-Xowk&t=471s",
				file: "3518b4b38e33fc590b0c6b149e913df4.wav"
			},
			"church organ": {
				title: "My Little Pony: Friendship is Magic - Season 4 Episode 3",
				source: "https://youtu.be/oqaH8rTKu8M?t=820",
				file: "da06d731163ed46fafa290346096528b.wav"
			},
			"trumpet": {
				title: "[1080p] My little Pony Friendship is Magic Season 6 Episode 14 The Cart Before the Ponies",
				source: "https://youtu.be/8pKhEvZRW34?t=915",
				file: "cdb4db94af354ae0f7d442c5b36f5b75.wav"
			},
			"trumbone": {
				title: "My Little Pony: friendship is magic | Swarm of the Century | FULL EPISODE | MLP",
				source: "https://youtu.be/ZEzgWjBMfzM?t=1290",
				file: "badad0a3c04c9c1cbe8bbc864edab749.wav"
			},
			"taiko drum": {
				title: "Daddy Pig Plays The Drums!  | @Peppa Pig - Official Channel",
				source: "https://youtu.be/aHEhixFSt-0?t=53",
				file: "52676535c7f309dbc4c771d733bbc0a4.wav"
			},
			"reverse cymbal": {
				title: "MLP FIM: Season 8 Episode 26",
				source: "https://youtu.be/u5Cbd92uQ80?t=850",
				file: "551922398f65d32746585a34757a83bf.wav"
			},
			"accordion": {
				title: "Peppa Pig - Musical Instruments (full episode)",
				source: "https://youtu.be/n4gsHAH_q6s?t=131",
				file: "f58883149c61023fb78e98e81aa5d023.wav"
			},
			"gumshot": {
				title: "[Midi Player Gumshot]",
				source: null,
				file: "997b210b9cd72734b14e71d28c666894.wav"
			},
			"agogo": {
				title: "My Little Pony: FIM Season 9 Episode 15 (2,4,6 Greaaat)",
				source: "https://youtu.be/MluslXu-Pnk?t=937",
				file: "196ddd23bcd309117e60626d3bcb17dd.wav"
			},
			"warm": {
				title: "My Little Pony Season 5 Episode 9",
				source: "https://youtu.be/lzpUO8-Xowk?t=750",
				file: "15cdf2d6f901c0e27de298d845e4718d.wav"
			}
		}
		var MIDI_INSTRUMENT = [
			// Acoustic Grand, Bright Acoustic, Electric Grand, Honky-Tonk
			"piano", "piano", "piano", "piano",
			// Electric Piano 1, Electric Piano 2, Harpsichord, Clavinet
			"electric piano", "electric piano", "piano", "piano",
			// Celesta, Glockenspiel, Music Box, Vibraphone
			"marimba", "vibraphone", "music box", "vibraphone",
			// Marimba, Xylophone, Tubular Bells, Dulcimer
			"marimba", "marimba", "vibraphone", "guitar",
			// Drawbar Organ, Percussive Organ, Rock Organ, Church Organ
			"organ", "organ", "organ", "church organ",
			// Reed Organ, Accordion, Harmonica, Tango Accordion
			"violin", "accordion", "harmonica", "accordion",
			// Nylon String Guitar, Steel String Guitar, Electric Jazz Guitar, Electric Clean Guitar
			"guitar", "guitar", "electric guitar", "electric guitar",
			// Electric Muted Guitar, Overdriven Guitar,Distortion Guitar, Guitar Harmonics
			"electric guitar", "overdriven guitar", "overdriven guitar", "overdriven guitar",
			// Acoustic Bass, Electric Bass (finger), Electric Bass (pick), Fretless Bass
			"bass", "bass", "bass", "bass",
			// Slap Bass 1, Slap Bass 2, Synth Bass 1, Synth Bass 2
			"bass", "bass", "bass", "bass",
			// Violin, Viola, Cello, Contrabass
			"violin", "violin", "violin", "violin",
			// Tremolo Strings, Pizzicato Strings, Orchestral Strings, Timpani
			"violin", "pizzicato", "bass", "timpani",
			// String Ensemble 1, String Ensemble 2, SynthStrings 1, SynthStrings 2
			"violin", "violin_2", "violin", "violin",
			// Choir Aahs, Voice Oohs, Synth Voice, Orchestra Hit
			"choir", "choir", "choir", "orchestra hit",
			// Trumpet, Trombone, Tuba, Muted Trumpet
			"trumbone", "trumbone", "trumbone", "trumbone",
			// French Horn, Brass Section, SynthBrass 1, SynthBrass 2
			"trumpet", "trumbone", "trumbone", "trumbone",
			// Soprano Sax, Alto Sax, Tenor Sax, Baritone Sax
			"saxophone", "saxophone", "saxophone", "saxophone",
			// Oboe, English Horn, Bassoon, Clarinet
			"bassoon", "clarinet", "bassoon", "clarinet",
			// Piccolo, Flute, Recorder, Pan Flute
			"flute", "flute", "wooden flute", "wooden flute",
			// Blown Bottle, Shakuhachi, Whistle, Ocarina
			"wooden flute", "wooden flute", "whistle", "wooden flute",
			// Lead 1 (square), Lead 2 (sawtooth), Lead 3 (calliope), Lead 4 (chiff)
			"synth lead", "synth lead", "wooden flute", "synth lead",
			// Lead 5 (charang), Lead 6 (voice), Lead 7 (fifths), Lead 8 (bass+lead)
			"synth lead", "choir", "synth lead", "synth lead",
			// Pad 1 (new age), Pad 2 (warm), Pad 3 (polysynth), Pad 4 (choir)
			"synth pad", "warm", "synth pad", "choir",
			// Pad 5 (bowed), Pad 6 (metallic), Pad 7 (halo), Pad 8 (sweep)
			"violin", "violin", "choir", "violin",
			// FX 1 (rain), FX 2 (soundtrack), FX 3 (crystal), FX 4 (atmosphere)
			"synth pad", "violin", "wooden flute", "choir",
			// FX 5 (brightness), FX 6 (goblins), FX 7 (echoes), FX 8 (sci-fi)
			"vibraphone", "warm", "choir", "harmonica",
			// Sitar, Banjo, Shamisen, Koto
			"overdriven guitar", "pizzicato", "bass", "bass",
			// Kalimba, Bagpipe, Fiddle, Shanai
			"marimba", "bassoon", "violin",  "bassoon",
			// Tinkle Bell, Agogo, Steel Drums, Woodblock
			"vibraphone", "agogo", "steel drum", "marimba",
			// Taiko Drum, Melodic Tom, Synth Drum, Reverse Cymbal
			"taiko drum", "melodic tom", "synth drum", "reverse cymbal",
			// Guitar Fret Noise, Breath Noise, Seashore, Bird Tweet
			"electric guitar", "wooden flute", "steel drum", "wooden flute",
			// Telephone Ring, Helicopter, Applause, Gunshot
			"vibraphone", "steel drum", "choir", "gumshot"
		]
		var DRUMS_MIDI = [
			"acoustic bass drum", // 27: ???
			"open hi hat", // 28: ???
			"null", // 29: ???
			"null", // 30: ???
			"null", // 31: ???
			"null", // 32: ???
			"null", // 33: ???
			"null", // 34: ???
			"acoustic bass drum", // 1-35: A
			"acoustic bass drum", // 2-36: A
			"side stick", // 3-37: Side Stick
			"snare drum", // 4-38: Acoustic Snare
			"hand", // 5-39: Hand Clap
			"snare drum", // 6-40: Electric Snare
			"low floor tom", // 7-41: Low Floor Tom
			"closed hi hat", // 8-42: Closed Hi-hat
			"high floor tom", // 9-43: High Floor Tom
			"closed hi hat", // 10-44: Pedal Hi-hat
			"low tom", // 11-45: Low Tom
			"open hi hat", // 12-46: Open Hi-hat
			"low mid tom", // 13-47: Low-Mid Tom
			"hi mid tom", // 14-48: Hi-Mid Tom
			"crash cymbal", // 15-49: Crash Cymbal 1
			"high tom", // 16-50: High Tom
			"open hi hat", // 17-51: Ride Cymbal 1
			"crash cymbal", // 18-52: Chinese Cymbal
			"tambourine", // 19-53: Ride Bell
			"tambourine", // 20-54: Tambourine
			"crash cymbal", // 21-55: Splash Cymbal
			"cowbell", // 22-56: Cowbell
			"crash cymbal", // 23-57: Crash Cymbal 2
			"vibraslap", // 24-58: Vibra Slap
			"open hi hat", // 25-59: Ride Cymbal 2
			"hi bongo", // 26-60: High Bongo
			"bongo", // 27-61: Low Bongo
			"mute conga", // 28-62: Mute High Conga
			"open conga", // 29-63: Open High Conga
			"conga", // 30-64: Low Conga
			"bongo", // 31-65: High Timbale
			"conga", // 32-66: Low Timbale
			"high agogo", // 33-67: High Agogo
			"low agogo", // 34-68: Low Agogo
			"cabasa", // 35-69: Cabasa
			"cabasa", // 36-70: Maracas
			"short whistle", // 37-71: Short Whistle
			"long whistle", // 38-72: Long Whistle
			"short guiro", // 39-73: Short Guiro
			"long guiro", // 40-74: Long Guiro
			"claves", // 41-75: Claves
			"wood", // 42-76: High Wood Block
			"low wood", // 43-77: Low Wood Block
			"cuica", // 44-78: Mute Cuica
			"low cuica", // 45-79: Open Cuica
			"mute triangle", // 46-80: Mute Triangle
			"triangle", // 47-81: Open Triangle
			"cabasa", // 48-82: ???
			"cabasa", // 49-83: ???
			"null", // 50-84: ???
			"claves", // 51-85: ???
			"null", // 52-86: ???
			"null" // 53-87: ???
		];
		exports.SOUNDBANK_INFOS = SOUNDBANK_INFOS;
		exports.MIDI_INSTRUMENT = MIDI_INSTRUMENT;
		exports.DRUMS_MIDI = DRUMS_MIDI;
		exports.DRUMS = DRUMS;
		exports.INSTRUMENT = INSTRUMENT;
	},
	'./src/midiparser.js': function(module, exports, __webpack_require__) {
		var MidiParser = function(data) {
			this.data = new Uint8Array(data);
			this.dataLength = this.data.length;
			this.index = 0;
			this.chuckSize = 0;
			this.duration = 0;
		}
		MidiParser.prototype.parse = function() {
			// After reading through the definitions of the three different MIDI formats a number of times I have come up with the following
			// summations for the types -
			// Type 0: Everything happens on Track 1 - any others tracks in a type 0 MIDI should incur an error
			// Type 1: Track 1 contains all timing related events. All other tracks are independent of each other except that they share the timing from track 1
			// Type 2: All tracks are completely independent
			// From these, my idea for unifying the way they can all be handled in the code is as follows -
			// Type 2 is essentially multiple occurences of type 0. I.e. All tracks contain timing and everything else for that specific track
			// For type 1, if I inject the timing from track 1 into all the other tracks and then remove track 1 then it essentially becomes a type 2
			// For type 2, if I inject all the tracks into track 1 then it becomes a type 0
			// This means that I can ultimately handle the parsing by treating every post-edited file as a type 0 file
			var midID = this.readUTFBytes(4);
			if (midID == "RIFF") {
				this.readBytes(4);
				if (this.readUTFBytes(8) !== "RMIDdata") {
					throw new Error("Invalid MIDI file");
				}
				this.readBytes(4);
				midID = this.readUTFBytes(4);
			}
			if (midID !== "MThd") {
				throw new Error("Invalid MIDI file")
			}
			if (this.readUnsignedLong() !== 6) {
				throw new Error("Invalid MIDI file");
			}
			var formatType = this.readUnsignedShort();
			var numberTracks = this.readUnsignedShort();
			var timeDivision = this.readUnsignedShort();
			var tracks = [];
			var trackID = 0;
			var _readUnsignedLong = this.readUnsignedLong.bind(this);
			var _readVariableLength = this.readVariableLength.bind(this);
			var _readUnsignedByte = this.readUnsignedByte.bind(this);
			var _readBytes = this.readBytes.bind(this);
			while (trackID < numberTracks) {
				this.dataLength = this.data.length;
				var chuckId = this.readUTFBytes(4);
				if (!(chuckId == "MTrk")) {
					console.log("unknowm track: " + chuckId);
					throw new Error("MTrk not found for track number " + (trackID + 1) + " - invalid MIDI file");
				}
				var notes = {};
				var tempos = {};
				var texts = {};
				var keyPressure = {};
				var channelPressure = {};
				var pitchBends = {};
				var controllers = {};
				var programChange = {};
				var timeSignature = {};
				var noteOn = [];
				notes.channel = [];
				notes.pitch = [];
				notes.tickOff = [];
				notes.tickOn = [];
				notes.velocity = [];
				tempos.setting = [];
				tempos.tick = [];
				texts.tick = [];
				texts.type = [];
				texts.text = [];
				keyPressure.tick = [];
				keyPressure.key = [];
				channelPressure.tick = [];
				channelPressure.channel = [];
				channelPressure.value = [];
				pitchBends.channel = [];
				pitchBends.tick = [];
				pitchBends.pitch = [];
				controllers.channel = [];
				controllers.tick = [];
				controllers.control = [];
				controllers.value = [];
				programChange.tick = [];
				programChange.channel = [];
				programChange.program = [];
				timeSignature.tick = [];
				timeSignature.numerator = [];
				timeSignature.denominator = [];
				var chuckSize = _readUnsignedLong();
				this.dataLength = this.index + chuckSize;
				var pulseCounter = 0;
				var eventTypeValue = 0;
				var newListLength = 0;
				var midiChannel = 0;
				var parameter1 = 0;
				var parameter2 = 0;
				while (this.index < this.dataLength) {
					pulseCounter += _readVariableLength();
					var value = _readUnsignedByte();
					if (value == 255) {
						switch (_readUnsignedByte()) {
							case 47:
								// This is the end-of-track meta command so force the pointer to the end of the chunk to exit gracefully
								this.index = this.dataLength;
								break;
							case 81:
								tempos.tick.push(pulseCounter);
								tempos.setting.push(_readBytes(_readVariableLength()));
								break;
							case 1:
							case 2:
							case 3:
							case 4:
							case 5:
							case 6:
							case 7:
								var typ = this.data[this.index - 1];
								var l = _readVariableLength();
								var t = '';
								for (let i = 0; i < l; i++) {
									t += String.fromCharCode(_readUnsignedByte());
								}
								texts.tick.push(pulseCounter);
								texts.type.push(typ);
								texts.text.push(t);
								break;
							case 88:
								timeSignature.tick.push(pulseCounter);
								timeSignature.numerator.push(this.data[this.index++]);
								timeSignature.denominator.push(this.data[this.index++]);
								this.index -= 2;
								var temp = _readVariableLength();
								this.index += temp;
								break;
							default:
								// Most meta events are ignored. These are -
								// 0: Sequence number
								// 32: MIDI Channel prefix
								// 84: SMTPE offset
								// 89: Key signature
								// 127: Sequencer-specific meta-event
								var temp = _readVariableLength();
								this.index += temp;
						}
					} else {
						if (value > 239) {
							var temp = _readVariableLength();
							this.index += temp;
							// All system exclusive events are ignored. These are -
							// 240: F0 Sysex event
							// 247: F7 Sysex event
						} else {
							if (value > 127) {
								midiChannel = value % 16;
								eventTypeValue = ((value - midiChannel) / 16);
							} else {
								// TODO: Ought to check the previous command was a midi one in which case this is referred to as "running status"
								this.index -= 1;
							}
							parameter1 = _readUnsignedByte();
							// "Program change" and "Channel pressure" don't take an extra parameter
							if (!(eventTypeValue == 12 || eventTypeValue == 13)) {
								parameter2 = _readUnsignedByte();
							}
							switch (eventTypeValue) {
								case 8:
									newListLength = noteOn.length - 1;
									for (var i = newListLength; i !== -1; i--) {
										if (parameter1 == notes.pitch[i] && midiChannel == notes.channel[i] && noteOn[i] == true) {
											notes.tickOff[i] = pulseCounter;
											noteOn[i] = false;
											break;
										}
									}
									break;
								case 9:
									if (parameter2 > 0) {
										notes.tickOn.push(pulseCounter);
										notes.tickOff.push(0);
										notes.channel.push(midiChannel);
										notes.pitch.push(parameter1);
										notes.velocity.push(parameter2);
										noteOn.push(true);
									} else {
										newListLength = noteOn.length - 1;
										for (var i = newListLength; i !== -1; i--) {
											if (parameter1 == notes.pitch[i] && midiChannel == notes.channel[i] && noteOn[i] == true) {
												notes.tickOff[i] = pulseCounter;
												noteOn[i] = false;
												break;
											}
										}
									}
									break;
								case 11:
									controllers.tick.push(pulseCounter);
									controllers.channel.push(midiChannel);
									controllers.control.push(parameter1);
									controllers.value.push(parameter2);
									break;
								case 12:
									programChange.tick.push(pulseCounter);
									programChange.channel.push(midiChannel);
									programChange.program.push(parameter1);
									break;
								case 14:
									pitchBends.tick.push(pulseCounter);
									pitchBends.channel.push(midiChannel);
									pitchBends.pitch.push(parameter2 * 128 + parameter1);
									break;
								case 10:
									keyPressure.tick.push(pulseCounter);
									keyPressure.key.push(parameter1);
									break;
								case 13:
									channelPressure.tick.push(pulseCounter);
									channelPressure.channel.push(midiChannel);
									channelPressure.value.push(parameter1);
									break;
							}
						}
					}
				}
				if (this.index !== this.dataLength) {
					throw new Error("Track number " + (trackID + 1) + " has overrun - invalid MIDI file");
				}
				var result = {};
				result.notes = notes;
				result.tempos = tempos;
				result.pitchBends = pitchBends;
				result.controllers = controllers;
				result.texts = texts;
				result.keyPressure = keyPressure;
				result.channelPressure = channelPressure;
				result.programChange = programChange;
				result.timeSignature = timeSignature;
				result.pulseCounterLength = pulseCounter;
				tracks.push(result);
				trackID += 1;
			}
			return {
				"tracks": tracks,
				"timeDivision": timeDivision,
				"formatType": formatType
			}
		}
		MidiParser.prototype.readUnsignedLong = function() {
			return this.readBytes(4);
		}
		MidiParser.prototype.readUnsignedByte = function() {
			return this.data[this.index++];
		}
		MidiParser.prototype.readUnsignedShort = function() {
			return this.readBytes(2);
		}
		MidiParser.prototype.readVariableLength = function() {
			var value = 0;
			while (true) {
				if (!(this.index < this.dataLength)) {
					throw new Error("Unexpected end of input");
				}
				var temp = this.data[this.index++];
				value = ((value * 128) + (temp % 128));
				if (temp < 128) {
					return value;
				}
			}
		}
		MidiParser.prototype.readUTFBytes = function(byteCount) {
			var d = "";
			for (var i = 0; i < byteCount; i++) {
				if (!(this.index < this.dataLength)) {
					throw new Error("Unexpected end of input");
				}
				d += String.fromCharCode(this.data[this.index]);
				this.index += 1;
			}
			return d;
		}
		MidiParser.prototype.readBytes = function(byteCount) {
			var d = 0;
			for (var i = 0; i < byteCount; i++) {
				if (!(this.index < this.dataLength)) {
					throw new Error("Unexpected end of input");
				}
				d = ((d * 256) + this.data[this.index++]);
			}
			return d;
		}
		module.exports = MidiParser;
	},
	'./src/track.js': function(module, exports, __webpack_require__) {
		var Track = function(mse, trackNumber, data) {
			this.mse = mse;
			this.currentPulse = 0;
			this.trackNumber = trackNumber;
			this.decodeNoteQueue = data.notes;
			this.decodeTempoQueue = data.tempos;
			this.decodeTextsQueue = data.texts;
			this.decodeKeyPressureQueue = data.keyPressure;
			this.decodeChannelPressureQueue = data.channelPressure;
			this.decodeControllers = data.controllers;
			this.pulseCounterLength = data.pulseCounterLength;
			if (!("last" in this.decodeControllers)) {
				var controllersLast = new Array(128 * 16);
				for (let index = 0; index < (128 * 16); index++) {
					controllersLast[index] = null;
				}
				this.decodeControllers.last = [];
				for (let index = 0; index < this.decodeControllers.tick.length; index++) {
					const _g = this.decodeControllers.control[index] + (128 * this.decodeControllers.channel[index]);
					this.decodeControllers.last.push(controllersLast[_g]);
					controllersLast[_g] = index;
				}
			}
			this.decodePitchBends = data.pitchBends;
			if (!("last" in this.decodePitchBends)) {
				var pitchBendsLast = new Array(16);
				for (let index = 0; index < 16; index++) {
					pitchBendsLast[index] = null;
				}
				this.decodePitchBends.last = [];
				for (let index = 0; index < this.decodePitchBends.tick.length; index++) {
					const _g = this.decodePitchBends.channel[index];
					this.decodePitchBends.last.push(pitchBendsLast[_g]);
					pitchBendsLast[_g] = index;
				}
			}
			this.decodeProgramChanges = data.programChange;
			if (!("last" in this.decodeProgramChanges)) {
				var lasts = new Array(16);
				for (let index = 0; index < 16; index++) {
					lasts[index] = null;
				}
				this.decodeProgramChanges.last = [];
				for (let index = 0; index < this.decodeProgramChanges.tick.length; index++) {
					const _g = this.decodeProgramChanges.channel[index];
					this.decodeProgramChanges.last.push(lasts[_g]);
					lasts[_g] = index;
				}
			}
		}
		Track.prototype.toJSON = function() {
			var obj = {};
			obj.notes = this.decodeNoteQueue;
			obj.tempos = this.decodeTempoQueue;
			obj.texts = this.decodeTextsQueue;
			obj.keyPressure = this.decodeKeyPressureQueue;
			obj.channelPressure = this.decodeChannelPressureQueue;
			obj.programChange = this.decodeProgramChanges;
			obj.controllers = this.decodeControllers;
			obj.pulseCounterLength = this.pulseCounterLength;
			obj.pitchBends = this.decodePitchBends;
			return obj;
		}
		Track.prototype.reset = function() {
			this.tempo = 500000 / this.mse.timeDivision;
			this.noteTracker = 0;
			this.controllerIndex = 0;
			this.pitchBendIndex = 0;
			this.tempoTick = 0;
			this.tempoTracker = 0;
			this.tempoTime = 0;
			this.instrumentChannelIndex = 0;
		}
		Track.prototype.getTempo = function() {
			return this.decodeTempoQueue;
		}
		Track.prototype.update = function() {
			var _t = this.currentPulse;
			if (this.decodePitchBends.tick.length > 0) {
				while (this.pitchBendIndex < this.decodePitchBends.tick.length && _t >= this.decodePitchBends.tick[this.pitchBendIndex]) {
					this.mse.pitchBendChannel[this.decodePitchBends.channel[this.pitchBendIndex]] = this.decodePitchBends.pitch[this.pitchBendIndex];
					this.pitchBendIndex += 1;
				}
				this.pitchBendIndex -= 1;
				while (this.pitchBendIndex >= 0 && _t < this.decodePitchBends.tick[this.pitchBendIndex]) {
					var _id = this.decodePitchBends.last[this.pitchBendIndex];
					if (_id !== null) {
						this.mse.pitchBendChannel[this.decodePitchBends.channel[_id]] = this.decodePitchBends.pitch[_id];
					} else {
						this.mse.pitchBendChannel[this.decodePitchBends.channel[this.pitchBendIndex]] = 8192;
					}
					this.pitchBendIndex -= 1;
				}
				this.pitchBendIndex += 1;
			}
			if (this.decodeProgramChanges.tick.length > 0) {
				while (this.instrumentChannelIndex < this.decodeProgramChanges.tick.length && _t >= this.decodeProgramChanges.tick[this.instrumentChannelIndex]) {
					this.mse.instrumentChannel[this.decodeProgramChanges.channel[this.instrumentChannelIndex]] = this.decodeProgramChanges.program[this.instrumentChannelIndex];
					this.instrumentChannelIndex += 1;
				}
				this.instrumentChannelIndex -= 1;
				while (this.instrumentChannelIndex >= 0 && _t < this.decodeProgramChanges.tick[this.instrumentChannelIndex]) {
					var _id = this.decodeProgramChanges.last[this.instrumentChannelIndex];
					if (_id !== null) {
						this.mse.instrumentChannel[this.decodeProgramChanges.channel[_id]] = this.decodeProgramChanges.program[_id];
					} else {
						this.mse.instrumentChannel[this.decodeProgramChanges.channel[this.instrumentChannelIndex]] = 0;
					}
					this.instrumentChannelIndex -= 1;
				}
				this.instrumentChannelIndex += 1;
			}
			if (this.decodeControllers.tick.length > 0) {
				while ((this.controllerIndex < this.decodeControllers.tick.length) && (_t >= this.decodeControllers.tick[this.controllerIndex])) {
					var controller = [];
					controller.push(this.decodeControllers.channel[this.controllerIndex]);
					controller.push(this.decodeControllers.control[this.controllerIndex]);
					controller.push(this.decodeControllers.value[this.controllerIndex]);
					this.setController(controller[0], controller[1], controller[2], false);
					this.controllerIndex += 1;
				}
				this.controllerIndex -= 1;
				while ((this.controllerIndex >= 0) && (_t < this.decodeControllers.tick[this.controllerIndex])) {
					var controller = [];
					controller.push(this.decodeControllers.channel[this.controllerIndex]);
					controller.push(this.decodeControllers.control[this.controllerIndex]);
					controller.push(this.decodeControllers.value[this.controllerIndex]);
					var _id = this.decodeControllers.last[this.controllerIndex];
					if (_id !== null) {
						controller = [];
						controller.push(this.decodeControllers.channel[_id]);
						controller.push(this.decodeControllers.control[_id]);
						controller.push(this.decodeControllers.value[_id]);
						this.setController(controller[0], controller[1], controller[2], false);
					} else {
						this.setController(controller[0], controller[1], controller[2], true);
					}
					this.controllerIndex -= 1;
				}
				this.controllerIndex += 1;
			}
		}
		Track.prototype.setController = function(channel, control, value, isEnd) {
			switch (control) {
				case 6: // Data Entry (MSB)
					this.mse.dataEntryMSB[channel] = value;
					break;
				case 7: // Channel Volume (formerly Main Volume)
					this.mse.volumeChannel[channel] = value;
					if (isEnd) {
						this.mse.volumeChannel[channel] = 127;
					}
					break;
				case 10: // Pan
					this.mse.panChannel[channel] = value;
					break;
				case 11: // Expression Controller
					this.mse.expressionChannel[channel] = value;
					if (isEnd) {
						this.mse.expressionChannel[channel] = 127;
					}
					break;
				case 38: // Data entry (LSB)
					this.mse.dataEntryLSB[channel] = value;
					break;
				case 64: // Damper pedal on/off (Sustain)
					this.mse.sustainPedalChannel[channel] = value;
					if (isEnd) {
						this.mse.sustainPedalChannel[channel] = 0;
					}
					if (this.mse.isEffect) {
						for (let i = 0; i < this.mse.notesPlaying.length; i++) {
							const c = this.mse.notesPlaying[i];
							if (!c) {
								continue;
							}
							if (channel == c.channel) {
								if (this.mse.sustainPedalChannel[channel] > 0) {
									c.duration = Infinity;
								} else {
									c.duration = c.dur;
									if (c.release && !c.release.ended && this.currentPulse - c.startTime >= c.duration) {
										c.release.ended = true;
									}
								}
							}
						}
					}
					break;
				case 100: // Registered Parameter Number LSB
					this.mse.registeredParameterLSBchannel[channel] = value;
					break;
				case 101: // Registered Parameter Number MSB
					this.mse.registeredParameterMSBchannel[channel] = value;
					break;
				case 0: // Bank Select (MSB)
				case 1: // Modulation wheel (MSB)
				case 2: // Breath control (MSB)
				case 4: // Foot controller (MSB)
				case 5: // Portamento time (MSB)
				case 8: // Balance (MSB)
				case 12: // Effect control 1 (MSB)
				case 13: // Effect control 2 (MSB)
				case 16: // General Purpose Controller #1 (MSB)
				case 17: // General Purpose Controller #2 (MSB)
				case 18: // General Purpose Controller #3 (MSB)
				case 19: // General Purpose Controller #4 (MSB)
				case 32: // Bank Select (LSB)
				case 33: // Modulation wheel (LSB)
				case 34: // Breath control (LSB)
				case 36: // Foot controller (LSB)
				case 37: // Portamento time (LSB)
				case 39: // Channel Volume (formerly Main Volume) (LSB)
				case 40: // Balance (LSB)
				case 42: // Pan (LSB)
				case 43: // Expression Controller (LSB)
				case 44: // Effect control 1 (LSB)
				case 45: // Effect control 2 (LSB)
				case 48: // General Purpose Controller #1 (LSB)
				case 49: // General Purpose Controller #2 (LSB)
				case 50: // General Purpose Controller #3 (LSB)
				case 51: // General Purpose Controller #4 (LSB)
				case 65: // Portamento on/off
				case 66: // Sustenuto on/off
				case 67: // Soft pedal on/off
				case 68: // Legato Footswitch
				case 69: // Hold 2
				case 70: // Sound Controller 1 (Sound Variation) (LSB)
				case 71: // Sound Controller 2 (Timbre) (LSB)
				case 72: // Sound Controller 3 (Release Time) (LSB)
				case 73: // Sound Controller 4 (Attack Time) (LSB)
				case 74: // Sound Controller 5 (Brightness) (LSB)
				case 75: // Sound Controller 6 (LSB)
				case 76: // Sound Controller 7 (LSB)
				case 77: // Sound Controller 8 (LSB)
				case 78: // Sound Controller 9 (LSB)
				case 79: // Sound Controller 10 (LSB)
				case 80: // General Purpose Controller #5 (LSB)
				case 81: // General Purpose Controller #6 (LSB)
				case 82: // General Purpose Controller #7 (LSB)
				case 83: // General Purpose Controller #8 (LSB)
				case 84: // Portamento Control
				case 91: // Effects 1 Depth (LSB)
				case 92: // Effects 2 Depth (LSB)
				case 93: // Effects 3 Depth (LSB)
				case 94: // Effects 4 Depth (LSB)
				case 95: // Effects 5 Depth (LSB)
				case 96: // Data entry +1
				case 97: // Data entry -1
				case 98: // Non-Registered Parameter Number (LSB)
				case 99: // Non-Registered Parameter Number (MSB)
				case 120: // All Sound Off
				case 121: // Reset All Controllers
				case 122: // Local control on/off
				case 123: // All notes off
				case 124: // Omni mode off (+ all notes off)
				case 125: // Omni mode on (+ all notes off)
				case 126: // Poly mode on/off (+ all notes off)
				case 127: // Poly mode on (incl mono=off +all notes off)
					break;
			}
		}
		Track.prototype.getNote = function(mute) {
			var GS = [];
			if (this.decodeNoteQueue.tickOn.length > 0) {
				while (this.noteTracker < this.decodeNoteQueue.tickOn.length && this.currentPulse > this.decodeNoteQueue.tickOn[this.noteTracker]) {
					if (!mute) {
						GS.push(this.noteTracker);
					}
					this.noteTracker += 1;
				}
				this.noteTracker -= 1;
				while (this.noteTracker >= 0 && this.currentPulse < this.decodeNoteQueue.tickOn[this.noteTracker]) {
					this.noteTracker -= 1;
				}
				this.noteTracker += 1;
			}
			return GS;
		}
		module.exports = Track;
	},
	'./src/player.js': function(module, exports, __webpack_require__) {
		var MidiParser = __webpack_require__("./src/midiparser.js");
		var SOUNDBANKS = __webpack_require__("./src/soundbank.js");
		var Track = __webpack_require__("./src/track.js");
		var SOUNDBANK_INFOS = SOUNDBANKS.SOUNDBANK_INFOS;
		var MIDI_INSTRUMENT = SOUNDBANKS.MIDI_INSTRUMENT;
		var DRUMS_MIDI = SOUNDBANKS.DRUMS_MIDI;
		var DRUMS = SOUNDBANKS.DRUMS;
		var INSTRUMENT = SOUNDBANKS.INSTRUMENT;
		const ASSET_URL = 'https://assets.scratch.mit.edu/internalapi/asset/$md5ext/get/';
		var Player = function() {
			this.audioContext = new AudioContext();
			this.node = this.audioContext.createGain();
			this.node.gain.value = 1;
			this.node.connect(this.audioContext.destination);
			this.soundbank = {};
			this.startTime = 0;
			this.step = this.step.bind(this);
			this.duration = 0;
			this.muteMusicr = false;
			this.DateTime = 0;
			this.frameStart = 0;
			this.onplaynote = null;
			this.onended = null;
			this.onprogress = null;
			this.speed = 1;
			this.isEffect = true;
			this.isPaused = true;
			this.currentTime = 0;
			this.currentTimeLast = 0;
			this.notesPlaying = new Array(100);
			for (var i = 0; i < this.notesPlaying.length; i++) {
				this.notesPlaying[i] = null;
			}
			this.trackQueue = [];
			this.tempo = 0;
			this.tempoTracker = 0;
			this.tempoTime = 0;
			this.currentPulse = 0;
			this.formatType = 0;
			this._soundbank = {};
			this._soundbankLoaded = 0;
			this.isTempoTrack = null;
			this.frameStart = Date.now();
			this.interval = setInterval(this.step, 1000 / 60);
			this.resetEffect();
		}
		Player.prototype.resetEffect = function () {
			this.pitchBendChannel = [8192, 8192, 8192, 8192, 8192, 8192, 8192, 8192, 8192, 8192, 8192, 8192, 8192, 8192, 8192, 8192];
			this.volumeChannel = [127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127];
			this.instrumentChannel = [0, 0, 0, 0, 0, 0, 0, 0, 0, null, 0, 0, 0, 0, 0, 0];
			this.expressionChannel = [127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127];
			this.panChannel = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
			this.dataEntryMSB = [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2];
			this.dataEntryLSB = [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2];
			this.registeredParameterMSBchannel = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
			this.registeredParameterLSBchannel = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
			this.sustainPedalChannel = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
		};
		Player.prototype.cleanup = function() {
			this.stop();
			this.resetEffect();
			this.duration = 0;
			this.trackQueue = [];
			this.tempo = 0;
			this.tempoTracker = 0;
			this.tempoTime = 0;
			this.currentPulse = 0;
			this.isTempoTrack = null;
			this.currentTime = 0;
			this.currentTimeLast = 0;
			if (this.oncleanup) {
				this.oncleanup();
			}
		}
		Player.prototype.resetTrack = function() {
			this.tempo = 500000 / this.timeDivision;
			this.tempoTracker = 0;
			this.tempoTime = 0;
			this.currentPulse = 0;
			for (var i = 0; i < this.trackQueue.length; i++) {
				this.trackQueue[i].reset();
			}
		}
		Player.prototype.setCurrentTime = function(s) {
			this.muteMusicr = true;
			this.stopAllPlaying();
			if (this.currentTime == s) {
				return;
			}
			var _s = Math.max(0, Math.min(this.duration, s));
			if (_s <= 0) {
				this.currentTime = 0;
				this.resetTrack();
				this.setStartTime(0);
			} else {
				this.currentTime = _s;
				this.setStartTime(this.currentTime);
			}
			this.stepUpdateTrackTime();
		}
		Player.prototype.setStartTime = function(s) {
			this.startTime = (Date.now() - ((s / this.speed) * 1000));
		}
		Player.prototype.setSpeed = function(s) {
			this.speed = s;
			this.setStartTime(this.currentTime);
		}
		Player.prototype.decodeAudio = function(ab) {
			var _this = this;
			return new Promise(function(resolve, reject) {
				_this.audioContext.decodeAudioData(ab, function (buffer) {
					resolve(buffer);
				}, function (err2) {
					reject("Could not decode audio: " + err2);
				});
			});
		}
		Player.prototype.loadSoundbankBuffer = function(name) {
			var _this = this;
			return fetch(ASSET_URL.replace('$md5ext', SOUNDBANK_INFOS[name].file)).then(function(r) { return r.arrayBuffer() }).then(function(buffer) {
				var d = new DataView(buffer);
				var data = [];
				for (var i5 = 0; i5 < buffer.byteLength; i5++) {
					data.push(d.getUint8(i5, true));
				}
				return _this.decodeAudio(buffer).then(function(o) {
					return new Promise(function(resolve, reject) {resolve({data: new Uint8Array(data), buffer: o})});
				})
			}).then(function(sound) {
				_this.soundbank[name] = sound;
			});
		}
		Player.prototype.loadSoundbank = function() {
			return this.loadSoundbankAll();
		}
		Player.prototype.loadSoundbankAll = function() {
			var _this = this;
			const promises = [];
			this._soundbankLoaded = 0;
			for (const name in SOUNDBANK_INFOS) {
				if (!this.soundbank[name]) {
					this._soundbankLoaded += 1;
					const promise = this.loadSoundbankBuffer(name);
					promises.push(promise.then(function () {
						_this.onprogress && _this.onprogress("loaded instruments " + _this._soundbankLoaded);
						_this._soundbankLoaded -= 1;
					}));
				}
			}
			_this.onprogress && _this.onprogress("loaded instruments " + _this._soundbankLoaded);
			return Promise.all(promises).then(function() {
				_this.onprogress && _this.onprogress("");
			});
		}
		Player.prototype.setVolume = function(v) {
			this.node.gain.value = v;
		}
		Player.prototype.play = function() {
			if (this.currentTime <= 0) {
				this.resetTrack();
			}
			this.isPaused = false;
			this.setStartTime(this.currentTime);
			if (this.currentTime >= this.duration) {
				this.currentTime = 0;
				this.setStartTime(0);
				this.resetTrack();
			}
		}
		Player.prototype.stopAllPlaying = function() {
			for (var i = 0; i < this.notesPlaying.length; i++) {
				if (!this.notesPlaying[i]) {
					continue;
				}
				this.notesPlaying[i].ended = true;
			}
		}
		Player.prototype.stop = function() {
			this.isPaused = true;
			this.currentTime = 0;
			this.setStartTime(0);
			this.resetTrack();
			this.stopAllPlaying();
		}
		Player.prototype.pause = function() {
			this.isPaused = true;
			this.setStartTime(this.currentTime);
			this.stopAllPlaying();
		}
		Player.prototype.getNoteLength = function() {
			var gfg = 0;
			for (var i = 0; i < this.trackQueue.length; i++) {
				gfg += this.trackQueue[i].decodeNoteQueue.tickOn.length;
			}
			return gfg;
		}
		Player.prototype.getNoteTracker = function() {
			var gfg = 0;
			for (var i = 0; i < this.trackQueue.length; i++) {
				gfg += this.trackQueue[i].noteTracker;
			}
			return gfg;
		}
		Player.prototype.getTempoLength = function() {
			var gfg = 0;
			for (var i = 0; i < this.trackQueue.length; i++) {
				gfg += this.trackQueue[i].decodeTempoQueue.tick.length;
			}
			return gfg;
		}
		Player.prototype.getTempoTracker = function() {
			var gfg = 0;
			for (var i = 0; i < this.trackQueue.length; i++) {
				gfg += this.trackQueue[i].tempoTracker;
			}
			return gfg;
		}
		Player.prototype.getSoundBankSize = function() {
			var result = 0;
			for (var name in this.soundbank) {
				result += this.soundbank[name].data.length;
			}
			return result;
		}
		Player.prototype.vidAudio = function(samples, n) {
			if (Array.isArray(samples)) {
				for (var i = samples.length - 1; i >= 0; i--) {
					if (n >= samples[i][0]) {
						return samples[i][1];
					}
				}
				return samples[0][1];
			}
			return samples || 1;
		}
		Player.prototype.playNote = function(n) {
			if (n.type == 'note') {
				var span = INSTRUMENT[MIDI_INSTRUMENT[n.instrument - 1]];
				if (!span) return;
				const buffer = this.soundbank[MIDI_INSTRUMENT[n.instrument - 1]];
				if (!buffer) return;
				const source = this.audioContext.createBufferSource();
				const note = this.audioContext.createGain();
				source.buffer = buffer.buffer;
				if (source.loop = span.loop) {
					source.loopStart = 2;
					source.loopEnd = 5;
				}
				source.connect(note);
				var pitch = (span.releasePatch ? (n.pitch + (span.releasePatch - 60)) : n.pitch);
				source.playbackRate.value = Math.pow(2, ((pitch - 60) / 12));
				const gain = note.gain;
				var volume = n.volume * this.vidAudio(span.volume, n.pitch);
				gain.value = volume;
				const releaseGain = this.audioContext.createGain();
				var releaseDuration = span.releaseTime;
				if (typeof releaseDuration === 'undefined') {
					releaseDuration = 0.01;
				}
				const releaseStart = this.audioContext.currentTime + n.duration;
				const releaseEnd = releaseStart + releaseDuration;
				releaseGain.gain.setValueAtTime(1, releaseStart);
				releaseGain.gain.linearRampToValueAtTime(0.0001, releaseEnd);
				note.connect(releaseGain);
				releaseGain.connect(this.node);
				source.start();
				source.stop(releaseEnd);
			} else if (n.type == 'drum') {
				var span = DRUMS[DRUMS_MIDI[n.drum - 27]];
				if (!span) return;
				const buffer = this.soundbank[DRUMS_MIDI[n.drum - 27]];
				if (!buffer) return;
				const source = this.audioContext.createBufferSource();
				const note = this.audioContext.createGain();
				source.buffer = buffer.buffer;
				source.connect(note);
				note.connect(this.node);
				const gain = note.gain;
				var volume = (n.volume * (span.volume || 1)) * 0.8;
				gain.value = volume;
				source.start();
			}
		}
		Player.prototype.playNotes = function(n, id) {
			var _id = id;
			if (_id < 0) {
				_id = this.notesPlaying.indexOf(null);
				if (_id == -1) {
					return;
				}
			}
			if (n.volume == 0) {
				return;
			}
			if (n.type == 1) {
				var span = INSTRUMENT[MIDI_INSTRUMENT[n.instrument - 1]];
				if (!span) return;
				const buffer = this.soundbank[MIDI_INSTRUMENT[n.instrument - 1]];
				if (!buffer) return;
				const source = this.audioContext.createBufferSource();
				const note = this.audioContext.createGain();
				source.buffer = buffer.buffer;
				if (source.loop = span.loop) {
					source.loopStart = 2;
					source.loopEnd = 5;
				}
				source.connect(note);
				var pitch = (span.releasePatch ? (n.pitch + (span.releasePatch - 60)) : n.pitch);
				source.playbackRate.value = Math.pow(2, ((pitch - 60) / 12));
				const gain = note.gain;
				var volume = (n.volume / 100) * this.vidAudio(span.volume, n.pitch);
				gain.value = volume;
				const releaseGain = this.audioContext.createGain();
				releaseGain.gain.value = 1;
				note.connect(releaseGain);
				releaseGain.connect(this.node);
				var releaseDuration = span.releaseTime;
				if (typeof releaseDuration === 'undefined') {
					releaseDuration = 0;
				}
				var te = {
					_pitch: n.pitch,
					_volume: n.volume,
					_instrument: n.instrument,
					ended: false,
					source: source,
					note: note,
					duration: n.dur,
					dur: n.dur,
					release: {
						duration: releaseDuration,
						releaseGain: releaseGain,
						ended: false,
					},
					volume: volume,
					pitch: pitch,
					startTime: n.start,
					track: n.track,
					channel: n.channel
				};
				te.endedFunction = function () {
					te.ended = true;
				}
				source.addEventListener("ended", te.endedFunction);
				this._startNote(te);
				this._updateEffectNote(te);
				source.start();
				this.notesPlaying[_id] = te;
			} else if (n.type == 0) {
				var span = DRUMS[DRUMS_MIDI[n.drum - 27]];
				if (!span) return;
				const buffer = this.soundbank[DRUMS_MIDI[n.drum - 27]];
				if (!buffer) return;
				const source = this.audioContext.createBufferSource();
				const note = this.audioContext.createGain();
				source.buffer = buffer.buffer;
				source.connect(note);
				note.connect(this.node);
				const gain = note.gain;
				var volume = ((n.volume / 100) * (span.volume || 1)) * 0.8;
				gain.value = volume;
				var te = {
					_pitch: n.drum,
					_volume: n.volume,
					_instrument: 0,
					ended: false,
					note: note,
					startTime: n.start,
					volume: volume,
					pitch: 60,
					source: source,
					track: n.track,
					channel: n.channel
				};
				te.endedFunction = function () {
					te.ended = true;
				}
				source.addEventListener("ended", te.endedFunction);
				this._startNote(te);
				this._updateEffectNote(te);
				source.start();
				this.notesPlaying[_id] = te;
			}
		}
		Player.prototype.getSustainPedalChannel = function(channel) {
			return this.sustainPedalChannel[channel];
		}
		Player.prototype.getPanChannel = function(channel) {
			return (this.panChannel[channel] - 64) / 63 * 100;
		}
		Player.prototype.getVolumeChannel = function(channel) {
			return (this.volumeChannel[channel] * (this.expressionChannel[channel] / 127)) / 127;
		}
		Player.prototype.getPitchBend = function(channel) {
			if (channel == 9) {
				return 0;
			}
			var value = this.dataEntryMSB[channel];
			return (((this.pitchBendChannel[channel] - 8192) / 8192) * value);
		}
		Player.prototype._startNote = function(n) {
			if (this.isEffect && n.track) {
				if (this.getSustainPedalChannel(n.channel) > 0) {
					n.duration = Infinity;
				}
			}
		}
		Player.prototype._updateEffectNote = function(n) {
			if (this.isEffect && n.track) {
				n.source.playbackRate.value = Math.pow(2, (((n.pitch + this.getPitchBend(n.channel)) - 60) / 12));
				n.note.gain.value = n.volume * this.getVolumeChannel(n.channel);
				if (n.pan) {
					const p = (this.getPanChannel(n.channel) + 100) / 200;
					const leftVal = Math.cos(p * Math.PI / 2);
					const rightVal = Math.sin(p * Math.PI / 2);
					n.pan.leftGain.gain.setValueAtTime(leftVal, this.audioContext.currentTime);
					n.pan.rightGain.gain.setValueAtTime(rightVal, this.audioContext.currentTime);
				}
			} else {
				n.source.playbackRate.value = Math.pow(2, ((n.pitch - 60) / 12));
				n.note.gain.value = n.volume;
				n.duration = n.dur;
			}
		}
		Player.prototype.step = function() {
			this.DateTime = (Date.now() - this.frameStart) / 1000;
			if (this.currentTime > this.duration && !this.isPaused) {
				this.currentTime = this.duration;
				this.setStartTime(this.duration);
				for (var i = 0; i < this.notesPlaying.length; i++) {
					var dn = this.notesPlaying[i];
					if (!dn) {
						continue;
					}
					dn.ended = true;
				}
				if (this.onended) this.onended();
				this.isPaused = true;
			}
			this.currentTimeLast = this.currentTime;
			if (!this.isPaused && !this.muteMusicr) {
				this.currentTime = ((Date.now() - this.startTime) * this.speed) / 1000;
			}
			this.stepUpdateTrackTime();
			this.stepUpdateTrack();
			this.stepPlayingNote();
			this.stepNotesPlaying();
			if (this.muteMusicr) {
				this.muteMusicr = false;
			}
			this.frameStart = Date.now();
		}
		Player.prototype.stepUpdateTrackTime = function() {
			if (this.currentTimeLast == this.currentTime) {
				return;
			}
			var f = this.currentTimeLast * 1000000;
			var d = this.currentTime * 1000000;
			if (d > f) {
				while (true) {
					if (d > f) {
						this._stepUpdateTrackTime(f, 1);
					} else {
						f = d;
						this._stepUpdateTrackTime(f, 1);
						break;
					}
					f += 100000;
				}
			} else {
				if (d < f) {
					while (true) {
						if (d < f) {
							this._stepUpdateTrackTime(f, -1);
						} else {
							f = d;
							this._stepUpdateTrackTime(f, -1);
							break;
						}
						f -= 100000;
					}
				}
			}
		}
		Player.prototype._stepUpdateTrackTime = function(_t, h) {
			if (h == 0) {
				return;
			}
			var _currentPulse = 0;
			for (var i = 0; i < this.trackQueue.length; i++) {
				var track = this.trackQueue[i];
				var tempos = track.decodeTempoQueue;
				if (this.isTempoTrack) {
					_currentPulse = (track.tempoTick + ((_t - track.tempoTime) / track.tempo));
					if (h > 0) {
						while (track.tempoTracker < tempos.tick.length && _currentPulse >= tempos.tick[track.tempoTracker]) {
							track.tempoTime += (tempos.tick[track.tempoTracker] - track.tempoTick) * track.tempo;
							track.tempoTick = tempos.tick[track.tempoTracker];
							track.tempo = tempos.setting[track.tempoTracker] / this.timeDivision;
							_currentPulse = (track.tempoTick + ((_t - track.tempoTime) / track.tempo));
							track.tempoTracker += 1;
						}
					} else {
						if (h < 0) {
							track.tempoTracker -= 1;
							while (track.tempoTracker >= 0 && _currentPulse < tempos.tick[track.tempoTracker]) {
								track.tempoTracker -= 1;
								if (track.tempoTracker >= 0) {
									track.tempo = tempos.setting[track.tempoTracker] / this.timeDivision;
									track.tempoTime += (tempos.tick[track.tempoTracker] - track.tempoTick) * track.tempo;
									track.tempoTick = tempos.tick[track.tempoTracker];
								} else {
									track.tempo = 500000 / this.timeDivision;
									track.tempoTime = 0;
									track.tempoTick = 0;
								}
								_currentPulse = (track.tempoTick + ((_t - track.tempoTime) / track.tempo));
							}
							track.tempoTracker += 1;
						}	
					}
					track.currentPulse = _currentPulse;
				} else {
					_currentPulse = (this.tempoTracker + ((_t - this.tempoTime) / this.tempo));
					if (h > 0) {
						while (track.tempoTracker < tempos.tick.length && _currentPulse >= tempos.tick[track.tempoTracker]) {
							this.tempoTime += (tempos.tick[track.tempoTracker] - this.tempoTracker) * this.tempo;
							this.tempoTracker = tempos.tick[track.tempoTracker];
							this.tempo = tempos.setting[track.tempoTracker] / this.timeDivision;
							_currentPulse = (this.tempoTracker + ((_t - this.tempoTime) / this.tempo));
							track.tempoTracker += 1;
						}
					} else {
						if (h < 0) {
							track.tempoTracker -= 1;
							while (track.tempoTracker >= 0 && _currentPulse < tempos.tick[track.tempoTracker]) {
								track.tempoTracker -= 1;
								if (track.tempoTracker >= 0) {
									this.tempo = tempos.setting[track.tempoTracker] / this.timeDivision;
									this.tempoTime += (tempos.tick[track.tempoTracker] - this.tempoTracker) * this.tempo;
									this.tempoTracker = tempos.tick[track.tempoTracker];
								} else {
									this.tempo = 500000 / this.timeDivision;
									this.tempoTime = 0;
									this.tempoTracker = 0;
								}
								_currentPulse = (this.tempoTracker + ((_t - this.tempoTime) / this.tempo));
							}
							track.tempoTracker += 1;
						}	
					}
				}
			}
			if (!this.isTempoTrack) {
				this.currentPulse = (this.tempoTracker + ((_t - this.tempoTime) / this.tempo));
				for (var i = 0; i < this.trackQueue.length; i++) {
					this.trackQueue[i].currentPulse = this.currentPulse;
					this.trackQueue[i].tempoTick = this.tempoTracker;
					this.trackQueue[i].tempoTime = this.tempoTime;
					this.trackQueue[i].tempo = this.tempo;
				}
			}
		}
		Player.prototype.stepUpdateTrack = function() {
			for (var i = 0; i < this.trackQueue.length; i++) {
				this.trackQueue[i].update();
			}
		}
		Player.prototype.stepPlayingNote = function() {
			var playNote = [];
			for (var i = 0; i < this.trackQueue.length; i++) {
				var _track = this.trackQueue[i];
				var decodeNoteQueue = _track.decodeNoteQueue;
				var fh = _track.getNote(this.muteMusicr);
				var fdd = 0;
				for (var i1 = 0; i1 < fh.length; i1++) {
					var n = fh[i1];
					var channel = decodeNoteQueue.channel[n];
					var inst = (channel == 9 ? 0 : (this.instrumentChannel[channel] + 1));
					var dur = decodeNoteQueue.tickOff[n] - decodeNoteQueue.tickOn[n];
					var start = decodeNoteQueue.tickOn[n];
					var pitch = decodeNoteQueue.pitch[n];
					var volume = decodeNoteQueue.velocity[n] - 1;
					if (!volume) {
						continue;
					}	
					if (inst > 0) {
						if (dur > 0) {
							if (this.onplaynote) {
								this.onplaynote({
									pitch: pitch,
									dur: (dur * _track.tempo) / 1000000,
									instrument: inst,
									volume: (volume / 126),
									channel: channel,
									type: 1
								});
							}
							playNote.push({
								type: 1,
								instrument: inst,
								pitch: pitch,
								volume: volume,
								channel: channel,
								track: this.trackQueue[i].trackNumber,
								dur: dur,
								start, start,
							});
							fdd++;
						}
					} else {
						if (dur > 0) {
							if (this.onplaynote) {
								this.onplaynote({
									drum: pitch,
									volume: (volume / 126),
									channel: channel,
									type: 0
								});
							}
							playNote.push({
								type: 0,
								drum: pitch,
								volume: volume,
								channel: channel,
								track: _track.trackNumber,
								dur: dur,
								start, start,
							});
							fdd++;
						}
					}
				}
			}
			if ((!this.isPaused) && this.node.gain.value) {
				var _l = Math.min(this.notesPlaying.length, playNote.length);
				for (var i = 0; i < _l; i++) {
					var note = playNote[i];
					var result = null;
					var _id = -1;
					for (var i6 = 0; i6 < this.notesPlaying.length; i6++) {
						var gfdg = this.notesPlaying[i6];
						if (!gfdg) {
							continue;
						}
						if (gfdg.channel == note.channel) {
							if (gfdg._instrument > 0 && note.type == 1) {
								if (gfdg._instrument == note.instrument && gfdg._pitch == note.pitch) {
									result = gfdg;
									_id = i6;
									break;
								}
							} else {
								if (gfdg._instrument == 0 && note.type == 0) {
									if (gfdg._pitch == note.drum) {
										result = gfdg;
										_id = i6;
										break;
									}
								}
							}
						}
					}
					if (result) {
						result.source.removeEventListener("ended", n.endedFunction);
						result.source.disconnect();
						result.note.disconnect();
						result.ended = true;
						this.notesPlaying[_id] = null;
					}
					this.playNotes(playNote[i], _id);
				}
			}
		}
		Player.prototype.stepNotesPlaying = function() {
			var newList = [];
			for (let i = this.notesPlaying.length; i--;) {
				var n = this.notesPlaying[i];
				if (!n) {
					continue;
				}
				if (!n.ended) {
					if (n.release) {
						var track = this.trackQueue[n.track - 1];
						if (!("startTime" in n)) {
							n.startTime = track.currentPulse;
						}
						if (!n.release.ended && (track.currentPulse - n.startTime) >= n.duration) {
							n.release.ended = true;
						}
						if (n.release.ended) {
							if (!("startTime" in n.release)) {
								n.release.startTime = Date.now();
							}
							if (n.release.duration) {
								n.release.releaseGain.gain.value = Math.max(0, (1 - ((Date.now() - n.release.startTime) / (n.release.duration * 1000))));
								if ((Date.now() - n.release.startTime) >= (n.release.duration * 1000)) {
									n.ended = true;
								}
							} else {
								n.ended = true;
							}
						}
					}
					this._updateEffectNote(n);
				}
				if (n.ended) {
					n.source.removeEventListener("ended", n.endedFunction);
					n.source.disconnect();
					n.note.disconnect();
					this.notesPlaying[i] = null;
				}
			}
		}
		Player.prototype.loadMid = function(data) {
			this.stop();
			this.cleanup();
			var parser = new MidiParser(data);
			var gf_h = Date.now();
			var result = parser.parse();
			this.loadedTime = Date.now() - gf_h;
			this.loadMidi(result);
		}
		Player.prototype.toJSON = function() {
			var obj = {};
			var resultTracks = [];
			for (var i = 0; i < this.trackQueue.length; i++) {
				resultTracks.push(this.trackQueue[i].toJSON());
			}
			obj.tracks = resultTracks;
			obj.timeDivision = this.timeDivision;
			obj.formatType = this.formatType;
			obj.duration = this.duration;
			return obj;
		}
		Player.prototype.loadMidi = function(data) {
			this.stop();
			this.cleanup();
			var data_1 = data;
			var tracks = data_1.tracks;
			this.trackQueue = [];
			this.timeDivision = data_1.timeDivision;
			this.formatType = data_1.formatType;
			this.isTempoTrack = this.formatType == 2;
			for (var i = 0; i < tracks.length; i++) {
				this.trackQueue.push(new Track(this, i + 1, tracks[i]));
			}
			this.tempo = 500000 / data_1.timeDivision;
			var duration = 0;
			if (this.isTempoTrack) {
				var dur = 0;
				for (var i = 0; i < this.trackQueue.length; i++) {
					var tempos = this.trackQueue[i].decodeTempoQueue;
					var tempoTime = 0;
					var tempoTick = 0;
					var tempo = 500000 / this.timeDivision;
					var time = 0;
					for (var _i = 0; _i < tempos.tick.length; _i++) {
						time += (tempos.tick[_i] - tempoTick) * tempo;
						tempoTick = tempos.tick[_i];
					}
					time += (this.trackQueue[i].pulseCounterLength - tempoTick) * tempo;
					if (time > dur) {
						dur = time;
					}
				}
				duration = dur;
			} else {
				var _l = 0;
				var _tracks = [];
				for (var i = 0; i < this.trackQueue.length; i++) {
					var len = this.trackQueue[i].pulseCounterLength;
					if (len > _l) {
						_l = len;
					}
					_tracks.push({
						tempoTracker: 0
					});
				}
				var tempoTime = 0;
				var tempoTick = 0;
				var tempo = 500000 / this.timeDivision;
				var time = 0;
				var _tempoLength = this.getTempoLength();
				var f = 0;
				while (f < _tempoLength) {
					var _currentPulse = 0;
					for (var i = 0; i < _tracks.length; i++) {
						var tempos = this.trackQueue[i].decodeTempoQueue;
						_currentPulse = (tempoTick + ((time - tempoTime) / tempo));
						while (_tracks[i].tempoTracker < tempos.tick.length && _currentPulse >= tempos.tick[_tracks[i].tempoTracker]) {
							tempoTime += (tempos.tick[_tracks[i].tempoTracker] - tempoTick) * tempo;
							tempoTick = tempos.tick[_tracks[i].tempoTracker];
							tempo = tempos.setting[_tracks[i].tempoTracker] / this.timeDivision;
							_currentPulse = (tempoTick + ((time - tempoTime) / tempo));
							_tracks[i].tempoTracker += 1;
							f += 1;
						}
					}
					time += 500000;
				}
				tempoTime += (_l - tempoTick) * tempo;
				duration = tempoTime;
			}
			
			this.resetTrack();
			this.duration = duration / 1000000;
			if (this.onload) {
				this.onload();
			}
		}
		module.exports = Player;
	},
	'./src/index.js': function(module, exports, __webpack_require__) {
		var Player = __webpack_require__("./src/player.js");
		var MidiParser = __webpack_require__("./src/midiparser.js");
		var SOUNDBANKS = __webpack_require__("./src/soundbank.js");
		var SOUNDBANK_INFOS = SOUNDBANKS.SOUNDBANK_INFOS;
		var MIDI_INSTRUMENT = SOUNDBANKS.MIDI_INSTRUMENT;
		var DRUMS_MIDI = SOUNDBANKS.DRUMS_MIDI;
		var DRUMS = SOUNDBANKS.DRUMS;
		var INSTRUMENT = SOUNDBANKS.INSTRUMENT;
		exports.Player = Player;
		exports.MidiParser = MidiParser;
		exports.MIDI_INSTRUMENT = MIDI_INSTRUMENT;
		exports.DRUMS_MIDI = DRUMS_MIDI;
		exports.DRUMS = DRUMS;
		exports.INSTRUMENT = INSTRUMENT;
		exports.SOUNDBANK_INFOS = SOUNDBANK_INFOS;
		window.AnimTredInstruments = exports;
	}
});