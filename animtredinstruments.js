/*
Anim Tred Instruments 5 Enterprise v5.1.0

a Cartoon the Sounds, record OBS Studio a Edit program: Adobe Premiere

My Soundbanks 14,844,448 byte

2023/4/28 Anim Tred Studio, LLC
*/
var AnimTredInstruments = (function() {
	var DRUM_INFO = {
		"snare drum": ["pinkie-pie-60", 0.7],
		"side stick": ["angel-bunny-stick", 0.48],
		"crash cymbal": ["pinkie-pie-61", 0.5],
		"open hi hat": ["mlp-fim-s8e10-grass-398-1", 0.37],
		"closed hi hat": ["mlp-fim-s8e10-grass-398-2", 0.37],
		"low floor tom": ["mlp-fim-s5e9-471-1", 0.7],
		"high floor tom": ["mlp-fim-s5e9-471-2", 0.7],
		"low tom": ["mlp-fim-s5e9-471-3", 0.7],
		"low mid tom": ["mlp-fim-s5e9-471-4", 0.7],
		"hi mid tom": ["mlp-fim-s5e9-471-5", 0.7],
		"high tom": ["mlp-fim-s5e9-471-6", 0.7],
		"tambourine": ["peppa-pig-drums-51", 0.22],
		"hand": ["rainbowdash-applejack-handclap", 0.5],
		"claves": ["mlp-fim-s8e10-22", 0.16],
		"claves_1": ["peppa-pig-drums-107", 0.4],
		"wood": ["twilight-wood-67-0", 0.45],
		"cowbell": ["chicken-little", 0.42],
		"triangle": ["applejack-30-0", 0.35],
		"bongo": ["peppa-pig-drums-30-0", 0.66],
		"conga": ["mlp-s2e19-38", 0.5],
		"cabasa": ["mlp-s8e4-1300", 0.7],
		"long guiro": ["peppa-pig-drums-63-0", 0.6],
		"vibraslap": ["mlp-fim-s8e10-22-1", 0.165],
		"cuica": ["derpy-67-0", 0.75],
		"short whistle": ["mlp-fim-s2e7-425-1", 0.56],
		"long whistle": ["mlp-fim-s2e7-425-0", 0.52],
		"short guiro": ["peppa-pig-drums-63-1", 0.3],
		"low wood": ["twilight-wood-67-1", 0.45],
		"hi bongo": ["peppa-pig-drums-30-1", 0.66],
		"low cuica": ["derpy-67-1", 0.75],
		"mute triangle": ["applejack-30-1", 0.35],
		"high agogo": ["mlp-fim-s9e15-937-0", 0.2],
		"low agogo": ["mlp-fim-s9e15-937-1", 0.2],
		"open conga": ["peppa-pig-mmiwm-64-0", 0.75],
		"mute conga": ["peppa-pig-mmiwm-64-1", 0.75],
		"acoustic bass drum": ["pinkie-pie-83", 0.54]
	}
	var INSTRUMENT_INFO = {
		"piano": ["mlp-applebloom-89", [[36, 0.8], [48, 0.65], [60, 0.4], [72, 0.3]], false, 0.1, null],
		"electric piano": ["mlp-s4e3-820-1", 0.7, false, 0.1, null],
		"organ": ["mlp-s1e22-176", [[48, 0.72], [60, 0.68], [72, 0.6]], true, 0.1, 52],
		"guitar": ["mlp-pearbutter-193", [[48, 0.6], [60, 0.5]], false, 0.1, null],
		"electric guitar": ["mlp-12", 0.5, false, 0.1, 60],
		"bass": ["daisy-143", [[36, 0.52], [48, 0.42], [60, 0.36], [72, 0.32]], false, 0.1, 57],
		"pizzicato": ["mlp-s3-applebloom-168", [[48, 0.5], [60, 0.42]], false, 0.25, 46.85],
		"harmonica": ["viaconcbs-0", 0.5, true, null, null],
		"clarinet": ["mlp-fim-s4e21-282", 0.5, true, null, null],
		"saxophone": ["mlp-fim-s2e22-953", 0.72, true, null, 59.75],
		"violin": ["peppa-pig-mi-69-1", [[60, 0.7], [72, 0.6]], true, 0.1, null],
		"violin_2": ["peppa-pig-mi-69-2", [[60, 0.58], [72, 0.53]], true, 0.25, null],
		"violin_3": ["peppa-pig-mi-69-3", [[60, 0.58], [72, 0.53]], true, 0.25, null],
		"overdriven guitar": ["mlp-24-1", [[48, 0.8], [60, 0.7], [72, 0.6]], true, null, 61],
		"sitar": ["mlp-24-2", 0.74, false, 1, 61],
		"flute": ["mlp-s5-117", [[60, 0.68], [72, 0.48]], true, null, 63],
		"wooden flute": ["peppa-pig-mmiwm-144", [[60, 0.8], [72, 0.7]], true, null, 58],
		"bassoon": ["pinkie-pie-77", [[36, 0.7], [48, 0.55], [60, 0.4], [72, 0.42]], true, null, null],
		"choir": ["mlp-fim-s1-fluttershy-1", [[48, 0.6], [60, 0.5], [72, 0.4], [84, 0.3]], true, 0.1, 55],
		"vibraphone": ["mlp-fim-s2e10-49", 0.52, false, 0.1, 58],
		"music box": ["pinkie-pie-14", 0.48, false, 0.25, 60.75],
		"steel drum": ["mlp-s3-fim-5", 0.5, false, 0.25, 57.5],
		"marimba": ["mlp-s1-fim-30", [[60, 0.62], [72, 0.54]], false, 0.1, 49],
		"synth lead": ["mlp-s1e21-fim-3", [[48, 0.6], [60, 0.5], [72, 0.4], [84, 0.3]], true, 0.1, 57],
		"synth pad": ["mlp-s1e13-fim-40", [[60, 0.6], [72, 0.5]], true, 0.1, null],
		"timpani": ["peppa-pig-mi-114", 0.74, false, 0.1, null],
		"whistle": ["peppa-pig-w-4", [[60, 0.6], [72, 0.5]], true, null, null],
		"orchestra hit": ["mlp-s1-fim-109", 0.7, false, 0.25, 63],
		"melodic tom": ["mlp-s5e9-471-1", 0.85, false, 0.25, 60],
		"synth drum": ["mlp-s5e9-471-2", 0.6, false, 0.25, 60],
		"church organ": ["mlp-s4e3-820-2", [[36, 1], [48, 0.9], [60, 0.8]], true, 0.1, 51],
		"trumpet": ["mlp-s6e14-915", [[36, 0.8], [48, 0.7], [60, 0.6]], true, null, 55],
		"trumbone": ["mlp-swarm-od-the-century-1290", [[36, 0.98], [48, 0.8], [60, 0.62], [72, 0.52]], true, null, 61],
		"taiko drum": ["peppa-pig-drums-53", 0.8, false, 0.25, 62],
		"reverse cymbal": ["mlp-fim-s8e26-850", 0.5, false, null, null],
		"accordion": ["peppa-pig-mi-131", [[48, 0.42], [60, 0.32], [72, 0.25]], true, null, 59],
		"gumshot": ["gumshot", 1, false, 1, null],
		"agogo": ["mlp-fim-s9e15-937", 1, false, 0.25, 54.75],
		"warm": ["mlp-fim-s5e9-750", [[60, 0.64], [72, 0.5]], true, 0.25, null]
	}
	var SOUNDBANKS_INFO = {
		"pinkie-pie-60": {
			title: "Pinkie the Babysitter (Baby Cakes) | MLP: FiM [HD]",
			source: "https://youtu.be/TJ6w9LRH7ts?t=60",
			file: "https://assets.scratch.mit.edu/internalapi/asset/f8e9a4862f16d6e0bb58e8595cd5a4ad.wav/get/"
		},
		"angel-bunny-stick": {
			title: "MLP: PONY LIFE CAPITULO 18 REACCIÓN! DERPYY!!",
			source: null,
			file: "https://assets.scratch.mit.edu/internalapi/asset/06f1484566bb6149673c05ee9c14f5f6.wav/get/"
		},
		"pinkie-pie-61": {
			title: "Pinkie the Babysitter (Baby Cakes) | MLP: FiM [HD]",
			source: "https://youtu.be/TJ6w9LRH7ts?t=60",
			file: "https://assets.scratch.mit.edu/internalapi/asset/d2047cb8e805c3d127c469de2fc1d329.wav/get/"
		},
		"mlp-fim-s8e10-grass-398-1": {
			title: "My little pony-season 8 episode 10:The Break Up Breakdown",
			source: "https://youtu.be/S3sIFvA2b-U?t=398",
			file: "https://assets.scratch.mit.edu/internalapi/asset/46cbebfbac0b11dc76c2e738b78120e4.wav/get/"
		},
		"mlp-fim-s8e10-grass-398-2": {
			title: "My little pony-season 8 episode 10:The Break Up Breakdown",
			source: "https://youtu.be/S3sIFvA2b-U?t=398",
			file: "https://assets.scratch.mit.edu/internalapi/asset/d7ada32c710b0a883266f4b94b1db43c.wav/get/"
		},
		"mlp-fim-s5e9-471-1": {
			title: "My Little Pony Season 5 Episode 9",
			source: "https://youtube.com/watch?v=lzpUO8-Xowk&t=471s",
			file: "https://assets.scratch.mit.edu/internalapi/asset/4c76166ce0d9b4853e0715f107b01c28.wav/get/"
		},
		"mlp-fim-s5e9-471-2": {
			title: "My Little Pony Season 5 Episode 9",
			source: "https://youtube.com/watch?v=lzpUO8-Xowk&t=471s",
			file: "https://assets.scratch.mit.edu/internalapi/asset/5266b9988ee896bc2bab9cd496c42a98.wav/get/"
		},
		"mlp-fim-s5e9-471-3": {
			title: "My Little Pony Season 5 Episode 9",
			source: "https://youtube.com/watch?v=lzpUO8-Xowk&t=471s",
			file: "https://assets.scratch.mit.edu/internalapi/asset/8555d813e84048f781c4ff44c6430739.wav/get/"
		},
		"mlp-fim-s5e9-471-4": {
			title: "My Little Pony Season 5 Episode 9",
			source: "https://youtube.com/watch?v=lzpUO8-Xowk&t=471s",
			file: "https://assets.scratch.mit.edu/internalapi/asset/3b3fced980db142e737e15321a7eb7ef.wav/get/"
		},
		"mlp-fim-s5e9-471-5": {
			title: "My Little Pony Season 5 Episode 9",
			source: "https://youtube.com/watch?v=lzpUO8-Xowk&t=471s",
			file: "https://assets.scratch.mit.edu/internalapi/asset/3e3c032e6bc334b7294310585f79662b.wav/get/"
		},
		"mlp-fim-s5e9-471-6": {
			title: "My Little Pony Season 5 Episode 9",
			source: "https://youtube.com/watch?v=lzpUO8-Xowk&t=471s",
			file: "https://assets.scratch.mit.edu/internalapi/asset/f57d7b55ae028fb6691530bb3c54bdb2.wav/get/"
		},
		"peppa-pig-drums-51": {
			title: "Daddy Pig Plays The Drums!  | @Peppa Pig - Official Channel",
			source: "https://youtu.be/aHEhixFSt-0?t=51",
			file: "https://assets.scratch.mit.edu/internalapi/asset/4fbbc63e66e4fd7b8611c11343f91fd2.wav/get/"
		},
		"rainbowdash-applejack-handclap": {
			title: "When I'm Sweeping",
			source: "https://youtu.be/u9l9F2H1yn0?t=16",
			file: "https://assets.scratch.mit.edu/internalapi/asset/8158cc2e2219fb6f7cbfdfd051a3ed72.wav/get/"
		},
		"mlp-fim-s8e10-22": {
			title: "My little pony-season 8 episode 10:The Break Up Breakdown",
			source: "https://youtu.be/S3sIFvA2b-U?t=22",
			file: "https://assets.scratch.mit.edu/internalapi/asset/ef64be4f8da4730868cc931f3a15656f.wav/get/"
		},
		"twilight-wood-67-0": {
			title: "Friendship is Randomly Musical 1",
			source: "https://youtube.com/watch?v=nX1WTsUjCLM&t=67s",
			file: "https://assets.scratch.mit.edu/internalapi/asset/94bf611190e55266b6250b8bbc17ed24.wav/get/"
		},
		"chicken-little": {
			title: "Chicken Little",
			source: null,
			file: "https://assets.scratch.mit.edu/internalapi/asset/1760020eb37fe3709c40f60d2a8ef544.wav/get/"
		},
		"applejack-30-0": {
			title: "[Tridashie] Friendship is Randomly Musical 2 [REUPLOAD]",
			source: "https://youtu.be/y7ho58raWac?t=30",
			file: "https://assets.scratch.mit.edu/internalapi/asset/0136ce7fbd955f39bb46de40e12be0bc.wav/get/"
		},
		"peppa-pig-drums-30-0": {
			title: "Daddy Pig Plays The Drums!  | @Peppa Pig - Official Channel",
			source: "https://youtu.be/aHEhixFSt-0?t=30",
			file: "https://assets.scratch.mit.edu/internalapi/asset/336220063f686b0f245430f76cbceb4d.wav/get/"
		},
		"mlp-s2e19-38": {
			title: "My Little Pony Friendship is Magic season 2 episode 19 \"Putting Your Hoof Down\"",
			source: "https://youtu.be/qjhL0p3dHwM?t=38",
			file: "https://assets.scratch.mit.edu/internalapi/asset/fd5036ce507cd959596e9770efe62415.wav/get/"
		},
		"mlp-s8e4-1300": {
			title: "My little pony season 8 episode 4(Fake it 'Til you make it)",
			source: "https://youtu.be/HGK7o5TVVF4?t=1300",
			file: "https://assets.scratch.mit.edu/internalapi/asset/8b5d05fd13d7e56d91a92690a45d03a2.wav/get/"
		},
		"peppa-pig-drums-63-0": {
			title: "Daddy Pig Plays The Drums!  | @Peppa Pig - Official Channel",
			source: "https://youtu.be/aHEhixFSt-0?t=63",
			file: "https://assets.scratch.mit.edu/internalapi/asset/601103abf81fc9385f36dd9b47c703ee.wav/get/"
		},
		"mlp-fim-s8e10-22-1": {
			title: "My little pony-season 8 episode 10:The Break Up Breakdown",
			source: "https://youtu.be/S3sIFvA2b-U?t=22",
			file: "https://assets.scratch.mit.edu/internalapi/asset/3934ec317365ad390c5c87c633b189b0.wav/get/"
		},
		"derpy-67-0": {
			title: "Friendship is Randomly Musical 8",
			source: "https://youtu.be/JQtbvAmwYVI?t=67",
			file: "https://assets.scratch.mit.edu/internalapi/asset/b1ebe9cbd60498d3c28ff97ffd26bcdb.wav/get/"
		},
		"mlp-fim-s2e7-425-1": {
			title: "My Little Pony friendship is magic season 2 episode 7 \"May the Best Pet Win!\"",
			source: "https://youtu.be/GpSNka9ft-w?t=425",
			file: "https://assets.scratch.mit.edu/internalapi/asset/66eeb991358947dc9354c4fe75254dca.wav/get/"
		},
		"mlp-fim-s2e7-425-0": {
			title: "My Little Pony friendship is magic season 2 episode 7 \"May the Best Pet Win!\"",
			source: "https://youtu.be/GpSNka9ft-w?t=425",
			file: "https://assets.scratch.mit.edu/internalapi/asset/545ba524892f481b16633483a19ca963.wav/get/"
		},
		"peppa-pig-drums-63-1": {
			title: "Daddy Pig Plays The Drums!  | @Peppa Pig - Official Channel",
			source: "https://youtu.be/aHEhixFSt-0?t=63",
			file: "https://assets.scratch.mit.edu/internalapi/asset/f7b53554ebdd758c615cdc574bad7ea5.wav/get/"
		},
		"twilight-wood-67-1": {
			title: "Friendship is Randomly Musical 1",
			source: "https://youtube.com/watch?v=nX1WTsUjCLM&t=67s",
			file: "https://assets.scratch.mit.edu/internalapi/asset/28050489c468fd887d1b45812d183bd3.wav/get/"
		},
		"peppa-pig-drums-107": {
			title: "Daddy Pig Plays The Drums!  | @Peppa Pig - Official Channel",
			source: "https://youtu.be/aHEhixFSt-0?t=107",
			file: "https://assets.scratch.mit.edu/internalapi/asset/36fcd64dfdd0c2aae35884252a5ea147.wav/get/"
		},
		"peppa-pig-drums-30-1": {
			title: "Daddy Pig Plays The Drums!  | @Peppa Pig - Official Channel",
			source: "https://youtu.be/aHEhixFSt-0?t=30",
			file: "https://assets.scratch.mit.edu/internalapi/asset/8bb317a1069d04e13c23af27f2fdb76c.wav/get/"
		},
		"derpy-67-1": {
			title: "Friendship is Randomly Musical 8",
			source: "https://youtu.be/JQtbvAmwYVI?t=67",
			file: "https://assets.scratch.mit.edu/internalapi/asset/2373fc1cf3ff5352b7ece3603999927a.wav/get/"
		},
		"applejack-30-1": {
			title: "[Tridashie] Friendship is Randomly Musical 2 [REUPLOAD]",
			source: "https://youtu.be/y7ho58raWac?t=30",
			file: "https://assets.scratch.mit.edu/internalapi/asset/af2148dba23faab1dec7cdd31663e292.wav/get/"
		},
		"mlp-fim-s9e15-937-0": {
			title: "My Little Pony: FIM Season 9 Episode 15 (2,4,6 Greaaat)",
			source: "https://youtu.be/MluslXu-Pnk?t=937",
			file: "https://assets.scratch.mit.edu/internalapi/asset/0031c264d2c1ec068f606944a73e14ca.wav/get/"
		},
		"mlp-fim-s9e15-937-1": {
			title: "My Little Pony: FIM Season 9 Episode 15 (2,4,6 Greaaat)",
			source: "https://youtu.be/MluslXu-Pnk?t=937",
			file: "https://assets.scratch.mit.edu/internalapi/asset/9c9640c2e0c3ce724e0e72a56d29ecbc.wav/get/"
		},
		"peppa-pig-mmiwm-64-0": {
			title: "Peppa Pig Makes Music Instrument with Marbles | Peppa Pig Official Family Kids Cartoon",
			source: "https://youtu.be/eGb3Edtrm1s?t=64",
			file: "https://assets.scratch.mit.edu/internalapi/asset/41ff2db5a55a45496d63fb0dbdbedd7c.wav/get/"
		},
		"peppa-pig-mmiwm-64-1": {
			title: "Peppa Pig Makes Music Instrument with Marbles | Peppa Pig Official Family Kids Cartoon",
			source: "https://youtu.be/eGb3Edtrm1s?t=64",
			file: "https://assets.scratch.mit.edu/internalapi/asset/66c02912796e3b9f56a6d60081b96931.wav/get/"
		},
		"pinkie-pie-83": {
			title: "Friendship is Musical | Season 3",
			source: "https://youtu.be/7WFZEuvZG0s?t=83",
			file: "https://assets.scratch.mit.edu/internalapi/asset/a639a88d1c502adf8a3fd9889ee9ae77.wav/get/"
		},
		"mlp-applebloom-89": {
			title: "Friendship is Musical | Season 1 Episode 17-18",
			source: "https://youtu.be/_CZQ6tfivVs?t=89",
			file: "https://assets.scratch.mit.edu/internalapi/asset/39237faddf2e6c7d3d8f6d39ae30d8e6.wav/get/"
		},
		"mlp-s4e3-820-1": {
			title: "My Little Pony: Friendship is Magic - Season 4 Episode 3",
			source: "https://youtu.be/oqaH8rTKu8M?t=820",
			file: "https://assets.scratch.mit.edu/internalapi/asset/d07006b09cfbac92e3c5bef85ccd3d36.wav/get/"
		},
		"mlp-s1e22-176": {
			title: "My Little Pony : Friendship is Magic Season 1 Episode 22",
			source: "https://youtu.be/csuoJQH6Axs?t=176",
			file: "https://assets.scratch.mit.edu/internalapi/asset/6404e29622b6443eae9ad68be58cd962.wav/get/"
		},
		"mlp-pearbutter-193": {
			title: "Bright Mac and Pear Butter's Love Story (The Perfect Pear) | MLP: FiM [HD]",
			source: "https://youtu.be/Flv6_BrwPVU?t=193",
			file: "https://assets.scratch.mit.edu/internalapi/asset/0328765961864d1ff2bc8aa2003489b0.wav/get/"
		},
		"mlp-12": {
			title: "Friendship is Musical VGM #1",
			source: "https://youtu.be/qqB2J3-rMIc?t=12",
			file: "https://assets.scratch.mit.edu/internalapi/asset/ace30ecd40b0ee7e7d77361e53e1f607.wav/get/"
		},
		"daisy-143": {
			title: "Friendship is Musical Season 2 First Half",
			source: "https://youtu.be/yqYQoVwFn4E?t=143",
			file: "https://assets.scratch.mit.edu/internalapi/asset/c87bdd77085d5ef9688a4c88b5317947.wav/get/"
		},
		"mlp-s3-applebloom-168": {
			title: "Friendship is Musical | Season 3",
			source: "https://youtu.be/7WFZEuvZG0s?t=168",
			file: "https://assets.scratch.mit.edu/internalapi/asset/f527e3719ee8b7b64062e5f9a4b33169.wav/get/"
		},
		"viaconcbs-0": {
			title: "Crescend Cinnamon on Twitter: \"https://t.co/zNTcb7oUSz\" / Twitter",
			source: "https://t.co/zNTcb7oUSz",
			file: "https://assets.scratch.mit.edu/internalapi/asset/c7b1809c6bb6b0cbf1928d796d1d5eea.wav/get/"
		},
		"mlp-fim-s4e21-282": {
			title: "My Little Pony Friendship Is Magic Season 4 Episode 21 Testing, 1, 2, 3 HD",
			source: "https://youtu.be/RGIFQn8rlXw?t=282",
			file: "https://assets.scratch.mit.edu/internalapi/asset/086fb0c3d8dfab35aaba3c8e1dfb05af.wav/get/"
		},
		"mlp-fim-s2e22-953": {
			title: "My Little Pony Friendship is Magic season 2 episode 22 \"Hurricane Fluttershy\"",
			source: "https://youtu.be/YK7vf0OkmRQ?t=953",
			file: "https://assets.scratch.mit.edu/internalapi/asset/aa878420c089b36eab7064b70ac27818.wav/get/"
		},
		"peppa-pig-mi-69-1": {
			title: "Peppa Pig - Musical Instruments (full episode)",
			source: "https://youtu.be/n4gsHAH_q6s?t=69",
			file: "https://assets.scratch.mit.edu/internalapi/asset/9f121cecc17a68610598587467cfc149.wav/get/"
		},
		"peppa-pig-mi-69-2": {
			title: "Peppa Pig - Musical Instruments (full episode)",
			source: "https://youtu.be/n4gsHAH_q6s?t=69",
			file: "https://assets.scratch.mit.edu/internalapi/asset/f20c97f5b8369555f1f78e6c2040a8d3.wav/get/"
		},
		"peppa-pig-mi-69-3": {
			title: "Peppa Pig - Musical Instruments (full episode)",
			source: "https://youtu.be/n4gsHAH_q6s?t=69",
			file: "https://assets.scratch.mit.edu/internalapi/asset/18e43c755854bd0d3cb86024ae0d33fe.wav/get/"
		},
		"mlp-24-1": {
			title: "Friendship is Musical VGM #1",
			source: "https://youtu.be/qqB2J3-rMIc?t=24",
			file: "https://assets.scratch.mit.edu/internalapi/asset/578d9cba77e8d6f578b31d5f4a31c151.wav/get/"
		},
		"mlp-24-2": {
			title: "Friendship is Musical VGM #1",
			source: "https://youtu.be/qqB2J3-rMIc?t=24",
			file: "https://assets.scratch.mit.edu/internalapi/asset/51c34706fad6b6a0358bc219b5069491.wav/get/"
		},
		"mlp-s5-117": {
			title: "Friendship is Musical | Season 5 (First Half)",
			source: "https://youtu.be/5pcCX7904d4?t=117",
			file: "https://assets.scratch.mit.edu/internalapi/asset/10e4407f269919a8da1b686ec71d7953.wav/get/"
		},
		"peppa-pig-mmiwm-144": {
			title: "Peppa Pig Makes Music Instrument with Marbles | Peppa Pig Official Family Kids Cartoon",
			source: "https://youtu.be/eGb3Edtrm1s?t=114",
			file: "https://assets.scratch.mit.edu/internalapi/asset/49589ee679b86fb05a411ebc302d407d.wav/get/"
		},
		"pinkie-pie-77": {
			title: "Friendship is Randomly Musical 5",
			source: "https://youtu.be/uoHPvvPGcAw?t=77",
			file: "https://assets.scratch.mit.edu/internalapi/asset/925bc0db0ad640181cbbd961c326d1fd.wav/get/"
		},
		"mlp-fim-s1-fluttershy-1": {
			title: "Friendship is Musical | Season 1 Episode 21-22",
			source: "https://youtu.be/UZRoOAzI3wo?t=1",
			file: "https://assets.scratch.mit.edu/internalapi/asset/43c9b3aafd224f62be45c990bef7896b.wav/get/"
		},
		"mlp-fim-s2e10-49": {
			title: "My Little Pony friendship is magic season 2 episode 10 \"Secret of My Excess\"",
			source: "https://youtu.be/m9xyYfih99Q?t=49",
			file: "https://assets.scratch.mit.edu/internalapi/asset/354604052268eeeb24b5cb6c6df3ba44.wav/get/"
		},
		"pinkie-pie-14": {
			title: "Friendship is Randomly Musical 3 [REUPLOAD]",
			source: "https://youtu.be/rG5ukrHNqE4?t=14",
			file: "https://assets.scratch.mit.edu/internalapi/asset/e66135be886992bd1be58f1c6eefb8e2.wav/get/"
		},
		"mlp-s3-fim-5": {
			title: "Friendship is Musical | Season 3",
			source: "https://youtu.be/7WFZEuvZG0s?t=5",
			file: "https://assets.scratch.mit.edu/internalapi/asset/98fa3eefd30afd2377db250f33dffe5d.wav/get/"
		},
		"mlp-s1-fim-30": {
			title: "Friendship is Musical | Season 1 Episode 17-18",
			source: "https://youtu.be/_CZQ6tfivVs?t=30",
			file: "https://assets.scratch.mit.edu/internalapi/asset/aa0531b278664dfdf9254f2f5676d0e4.wav/get/"
		},
		"mlp-s1e21-fim-3": {
			title: "Friendship is Musical | Season 1 Episode 21-22",
			source: "https://youtu.be/UZRoOAzI3wo?t=3",
			file: "https://assets.scratch.mit.edu/internalapi/asset/eef84ef4c9a76eb92218deee402a71aa.wav/get/"
		},
		"mlp-s1e13-fim-40": {
			title: "Friendship is Musical | Season 1 Episode 13-14",
			source: "https://youtu.be/QHOjFbbbrXQ?t=40",
			file: "https://assets.scratch.mit.edu/internalapi/asset/6dd9834236dfc66bea70e387c1481941.wav/get/"
		},
		"peppa-pig-mi-114": {
			title: "Peppa Pig - Musical Instruments (full episode)",
			source: "https://youtu.be/n4gsHAH_q6s?t=114",
			file: "https://assets.scratch.mit.edu/internalapi/asset/c4bad1057968e352c835bd5c805f911c.wav/get/"
		},
		"peppa-pig-w-4": {
			title: "Whistling Competition Between Peppa Pig and Suzy Sheep",
			source: "https://youtu.be/9ptrXeS7CaE?t=4",
			file: "https://assets.scratch.mit.edu/internalapi/asset/1d83be8a2f77baae0f03277ea629ee93.wav/get/"
		},
		"mlp-s1-fim-109": {
			title: "Friendship is Musical | Season 1 Episode 5-6",
			source: "https://youtu.be/EXrDap-pIdk?t=109",
			file: "https://assets.scratch.mit.edu/internalapi/asset/5fa7509939b2908b5eadd34d4965f2b6.wav/get/"
		},
		"mlp-s5e9-471-1": {
			title: "My Little Pony Season 5 Episode 9",
			source: "https://m.youtube.com/watch?v=lzpUO8-Xowk&t=471s",
			file: "https://assets.scratch.mit.edu/internalapi/asset/baa611917d9f86ec22b1240a0df9e509.wav/get/"
		},
		"mlp-s5e9-471-2": {
			title: "My Little Pony Season 5 Episode 9",
			source: "https://m.youtube.com/watch?v=lzpUO8-Xowk&t=471s",
			file: "https://assets.scratch.mit.edu/internalapi/asset/3518b4b38e33fc590b0c6b149e913df4.wav/get/"
		},
		"mlp-s4e3-820-2": {
			title: "My Little Pony: Friendship is Magic - Season 4 Episode 3",
			source: "https://youtu.be/oqaH8rTKu8M?t=820",
			file: "https://assets.scratch.mit.edu/internalapi/asset/da06d731163ed46fafa290346096528b.wav/get/"
		},
		"mlp-s6e14-915": {
			title: "[1080p] My little Pony Friendship is Magic Season 6 Episode 14 The Cart Before the Ponies",
			source: "https://youtu.be/8pKhEvZRW34?t=915",
			file: "https://assets.scratch.mit.edu/internalapi/asset/cdb4db94af354ae0f7d442c5b36f5b75.wav/get/"
		},
		"mlp-swarm-od-the-century-1290": {
			title: "My Little Pony: friendship is magic | Swarm of the Century | FULL EPISODE | MLP",
			source: "https://youtu.be/ZEzgWjBMfzM?t=1290",
			file: "https://assets.scratch.mit.edu/internalapi/asset/badad0a3c04c9c1cbe8bbc864edab749.wav/get/"
		},
		"peppa-pig-drums-53": {
			title: "Daddy Pig Plays The Drums!  | @Peppa Pig - Official Channel",
			source: "https://youtu.be/aHEhixFSt-0?t=53",
			file: "https://assets.scratch.mit.edu/internalapi/asset/52676535c7f309dbc4c771d733bbc0a4.wav/get/"
		},
		"mlp-fim-s8e26-850": {
			title: "MLP FIM: Season 8 Episode 26",
			source: "https://youtu.be/u5Cbd92uQ80?t=850",
			file: "https://assets.scratch.mit.edu/internalapi/asset/551922398f65d32746585a34757a83bf.wav/get/"
		},
		"peppa-pig-mi-131": {
			title: "Peppa Pig - Musical Instruments (full episode)",
			source: "https://youtu.be/n4gsHAH_q6s?t=131",
			file: "https://assets.scratch.mit.edu/internalapi/asset/f58883149c61023fb78e98e81aa5d023.wav/get/"
		},
		"gumshot": {
			title: "[Midi Player Gumshot]",
			source: null,
			file: "https://assets.scratch.mit.edu/internalapi/asset/997b210b9cd72734b14e71d28c666894.wav/get/"
		},
		"mlp-fim-s9e15-937": {
			title: "My Little Pony: FIM Season 9 Episode 15 (2,4,6 Greaaat)",
			source: "https://youtu.be/MluslXu-Pnk?t=937",
			file: "https://assets.scratch.mit.edu/internalapi/asset/196ddd23bcd309117e60626d3bcb17dd.wav/get/"
		},
		"mlp-fim-s5e9-750": {
			title: "My Little Pony Season 5 Episode 9",
			source: "https://youtu.be/lzpUO8-Xowk?t=750",
			file: "https://assets.scratch.mit.edu/internalapi/asset/15cdf2d6f901c0e27de298d845e4718d.wav/get/"
		}
	}
	var MIDI_INSTRUMENT = [
		"piano", "piano", "piano", "piano",
		"electric piano", "electric piano", "piano", "piano",
		"marimba", "vibraphone", "music box", "vibraphone",
		"marimba", "marimba", "vibraphone", "guitar",
		"organ", "organ", "organ", "church organ",
		"violin", "accordion", "harmonica", "accordion",
		"guitar", "guitar", "electric guitar", "electric guitar",
		"electric guitar", "overdriven guitar", "overdriven guitar", "overdriven guitar",
		"bass", "bass", "bass", "bass",
		"bass", "bass", "bass", "bass",
		"violin", "violin", "violin", "violin",
		"violin", "pizzicato", "bass", "timpani",
		"violin", "violin_2", "violin", "violin",
		"choir", "choir", "choir", "orchestra hit",
		"trumbone", "trumbone", "trumbone", "trumbone",
		"trumpet", "trumbone", "trumbone", "trumbone",
		"saxophone", "saxophone", "saxophone", "saxophone",
		"bassoon", "clarinet", "bassoon", "clarinet",
		"flute", "flute", "wooden flute", "wooden flute",
		"wooden flute", "wooden flute", "whistle", "wooden flute",
		"synth lead", "synth lead", "wooden flute", "synth lead",
		"synth lead", "choir", "synth lead", "synth lead",
		"synth pad", "warm", "synth pad", "choir",
		"warm", "violin_3", "choir", "violin_2",
		"synth pad", "violin", "wooden flute", "choir",
		"vibraphone", "warm", "choir", "harmonica",
		"sitar", "pizzicato", "bass", "bass",
		"marimba", "bassoon", "violin", "bassoon",
		"vibraphone", "agogo", "steel drum", "marimba",
		"taiko drum", "melodic tom", "synth drum", "reverse cymbal",
		"electric guitar", "wooden flute", "steel drum", "wooden flute",
		"vibraphone", "steel drum", "choir", "gumshot"
	];
	var DRUMS_MIDI = [
		"acoustic bass drum",
		"open hi hat",
		"null",
		"null",
		"claves",
		"null",
		"claves",
		"null",
		"acoustic bass drum",
		"acoustic bass drum",
		"side stick",
		"snare drum",
		"hand",
		"snare drum",
		"low floor tom",
		"closed hi hat",
		"high floor tom",
		"closed hi hat",
		"low tom",
		"open hi hat",
		"low mid tom",
		"hi mid tom",
		"crash cymbal",
		"high tom",
		"open hi hat",
		"crash cymbal",
		"tambourine",
		"tambourine",
		"crash cymbal",
		"cowbell",
		"crash cymbal",
		"vibraslap",
		"open hi hat",
		"hi bongo",
		"bongo",
		"mute conga",
		"open conga",
		"conga",
		"bongo",
		"conga",
		"high agogo",
		"low agogo",
		"cabasa",
		"cabasa",
		"short whistle",
		"long whistle",
		"short guiro",
		"long guiro",
		"claves",
		"wood",
		"low wood",
		"cuica",
		"low cuica",
		"mute triangle",
		"triangle",
		"cabasa",
		"cabasa",
		"null",
		"claves_1",
		"null",
		"null"
	];
	var MidiParser = function(data) {
		this.data = new Uint8Array(data);
		this.dataLength = this.data.length;
		this.index = 0;
	}
	MidiParser.prototype.parse = function() {
		var _this = this;
		var _data = _this.data;
		var _readVariableLength = _this.readVariableLength.bind(_this);
		var _readBytes = _this.readBytes.bind(_this);
		var _readUTFBytes = _this.readUTFBytes.bind(_this);
		var midID = _readUTFBytes(4);
		if (midID == "RIFF") {
			_readBytes(4);
			if (_readUTFBytes(8) !== "RMIDdata") {
				throw new Error("Invalid RMI file");
			}
			_readBytes(4);
			midID = _readUTFBytes(4);
		}
		if (midID !== "MThd") {
			throw new Error("Invalid MIDI file");
		}
		if (_readBytes(4) !== 6) {
			throw new Error("Invalid MIDI file");
		}
		var formatType = _readBytes(2);
		var trackLength = _readBytes(2);
		var timeDivision = _readBytes(2);
		var tracks = [];
		var trackID = 0;
		while (trackID < trackLength) {
			_this.dataLength = _data.length;
			var chuckId = _readUTFBytes(4);
			if (!(chuckId == "MTrk")) {
				throw new Error("MTrk not found for track number " + (trackID + 1) + " - invalid MIDI file");
			}
			var notes = {};
			var tempos = {};
			var texts = {};
			var keyPressure = {};
			var channelPressure = {};
			var pitchBends = {};
			var controllers = {};
			var programs = {};
			var timeSignature = {};
			var keySignature = {};
			var systemExclusive = {};
			var notesOn = [];
			var pulseCounter = 0;
			var eventTypeValue = 0;
			var midiChannel = 0;
			var event = 0;
			var parameter1 = 0;
			var parameter2 = 0;
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
			keyPressure.channel = [];
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
			programs.tick = [];
			programs.channel = [];
			programs.program = [];
			timeSignature.tick = [];
			timeSignature.numerator = [];
			timeSignature.denominator = [];
			keySignature.tick = [];
			keySignature.type = [];
			keySignature.value = [];
			systemExclusive.tick = [];
			systemExclusive.data = [];
			systemExclusive.fx = [];
			_this.dataLength = _readBytes(4) + _this.index;
			while (_this.index < _this.dataLength) {
				pulseCounter += _readVariableLength();
				event = _data[_this.index++];
				if (event == 255) {
					switch (_data[_this.index++]) {
						case 47:
							_this.index = _this.dataLength;
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
							texts.tick.push(pulseCounter);
							texts.type.push(_data[_this.index - 1]);
							texts.text.push(_readUTFBytes( _readVariableLength()));
							break;
						case 88:
							timeSignature.tick.push(pulseCounter);
							timeSignature.numerator.push(_data[_this.index++]);
							timeSignature.denominator.push(_data[_this.index++]);
							_this.index -= 2;
							var ii = _readVariableLength();
							_this.index += ii;
							break;
						case 89:
							keySignature.tick.push(pulseCounter);
							keySignature.value.push(_data[_this.index++]);
							keySignature.type.push(_data[_this.index++]);
							_this.index -= 2;
							var ii = _readVariableLength();
							_this.index += ii;
							break;
						default:
							var ii = _readVariableLength();
							_this.index += ii;
					}
				} else {
					if (event > 239) {
						var ii = _readVariableLength();
						var dat = [];
						for (var i = 0; i < ii; i++) {
							dat.push(_data[_this.index++]);
						}
						systemExclusive.tick.push(pulseCounter);
						systemExclusive.data.push(dat);
						systemExclusive.fx.push(event - 240);
					} else {
						if (event > 127) {
							midiChannel = event % 16;
							eventTypeValue = ((event - midiChannel) / 16);
						} else {
							_this.index--;
						}
						parameter1 = _data[_this.index++];
						if (!(eventTypeValue == 12 || eventTypeValue == 13)) {
							parameter2 = _data[_this.index++];
						}
						switch (eventTypeValue) {
							case 8:
								var i = notesOn.length;
								while (i--) {
									if (parameter1 == notes.pitch[i] && midiChannel == notes.channel[i] && notesOn[i] == true) {
										notes.tickOff[i] = pulseCounter;
										notesOn[i] = false;
										break;
									}
								}
								break;
							case 9:
								if (parameter2 > 0) {
									notes.tickOn.push(pulseCounter);
									notes.tickOff.push(pulseCounter);
									notes.channel.push(midiChannel);
									notes.pitch.push(parameter1);
									notes.velocity.push(parameter2);
									notesOn.push(true);
								} else {
									var i = notesOn.length;
									while (i--) {
										if (parameter1 == notes.pitch[i] && midiChannel == notes.channel[i] && notesOn[i] == true) {
											notes.tickOff[i] = pulseCounter;
											notesOn[i] = false;
											break;
										}
									}
								}
								break;
							case 10:
								keyPressure.tick.push(pulseCounter);
								keyPressure.channel.push(midiChannel);
								keyPressure.key.push(parameter1);
								break;
							case 11:
								controllers.tick.push(pulseCounter);
								controllers.channel.push(midiChannel);
								controllers.control.push(parameter1);
								controllers.value.push(parameter2);
								break;
							case 12:
								programs.tick.push(pulseCounter);
								programs.channel.push(midiChannel);
								programs.program.push(parameter1);
								break;
							case 13:
								channelPressure.tick.push(pulseCounter);
								channelPressure.channel.push(midiChannel);
								channelPressure.value.push(parameter1);
								break;
							case 14:
								pitchBends.tick.push(pulseCounter);
								pitchBends.channel.push(midiChannel);
								pitchBends.pitch.push(parameter2 * 128 + parameter1);
								break;
							default:
								throw new Error("Unknown event" + ((event > 127) ? "" : " (running)") + ":" + event);
						}
					}
				}
			}
			if (_this.index !== _this.dataLength) {
				throw new Error("Track number " + (trackID + 1) + " has overrun - invalid MIDI file");
			}
			tracks.push({
				notes,
				tempos,
				pitchBends,
				controllers,
				texts,
				keyPressure,
				channelPressure,
				programs,
				timeSignature,
				keySignature,
				systemExclusive,
				pulseCounterLength: pulseCounter
			});
			trackID++;
		}
		return {tracks, timeDivision, formatType};
	}
	MidiParser.prototype.readVariableLength = function() {
		var value = 0;
		while (this.index < this.dataLength) {
			var temp = this.data[this.index++];
			if (temp > 127) {
				value += (temp - 128);
				value <<= 7;
			} else {
				return value + temp;
			}
		}
		throw new Error("Unexpected end of input");
	}
	MidiParser.prototype.readUTFBytes = function(byteCount) {
		var value = "";
		var count = byteCount;
		while (count--) {
			value += String.fromCharCode(this.data[this.index++]);
		}
		return value;
	}
	MidiParser.prototype.readBytes = function(byteCount) {
		var value = 0;
		var count = byteCount;
		while (count--) {
			value *= 256;
			value += this.data[this.index++];
		}
		return value;
	}
	var Track = function(mse, trackID, data) {
		this.mse = mse;
		this.currentPulse = 0;
		this.trackNumber = trackID;
		this.noteQueue = data.notes || [];
		this.tempoQueue = data.tempos || [];
		this.textQueue = data.texts || [];
		this.keyPressureQueue = data.keyPressure || [];
		this.channelPressureQueue = data.channelPressure || [];
		this.controllerQueue = data.controllers || [];
		this.timeSignatureQueue = data.timeSignature || [];
		this.keySignatureQueue = data.keySignature || [];
		this.systemExclusiveQueue = data.systemExclusive || [];
		this.pulseCounterLength = data.pulseCounterLength;
		this.pitchBendQueue = data.pitchBends || [];
		this.programQueue = data.programs || [];
		if (!("last" in this.programQueue)) {
			var lasts = new Array(16);
			for (let index = 0; index < 16; index++) {
				lasts[index] = null;
			}
			this.programQueue.last = [];
			for (let index = 0; index < this.programQueue.tick.length; index++) {
				const _g = this.programQueue.channel[index];
				this.programQueue.last.push(lasts[_g]);
				lasts[_g] = index;
			}
		}
		if (!("last" in this.controllerQueue)) {
			var lasts = new Array(2048);
			for (let index = 0; index < 2048; index++) {
				lasts[index] = null;
			}
			this.controllerQueue.last = [];
			for (let index = 0; index < this.controllerQueue.tick.length; index++) {
				const _g = this.controllerQueue.control[index] + (128 * this.controllerQueue.channel[index]);
				this.controllerQueue.last.push(lasts[_g]);
				lasts[_g] = index;
			}
		}
		if (!("last" in this.pitchBendQueue)) {
			var lasts = new Array(16);
			for (let index = 0; index < 16; index++) {
				lasts[index] = null;
			}
			this.pitchBendQueue.last = [];
			for (let index = 0; index < this.pitchBendQueue.tick.length; index++) {
				const _g = this.pitchBendQueue.channel[index];
				this.pitchBendQueue.last.push(lasts[_g]);
				lasts[_g] = index;
			}
		}
		if (!("last" in this.keyPressureQueue)) {
			var lasts = new Array(16);
			for (let index = 0; index < 16; index++) {
				lasts[index] = null;
			}
			this.keyPressureQueue.last = [];
			for (let index = 0; index < this.keyPressureQueue.tick.length; index++) {
				const _g = this.keyPressureQueue.channel[index];
				this.keyPressureQueue.last.push(lasts[_g]);
				lasts[_g] = index;
			}
		}
		if (!("last" in this.channelPressureQueue)) {
			var lasts = new Array(16);
			for (let index = 0; index < 16; index++) {
				lasts[index] = null;
			}
			this.channelPressureQueue.last = [];
			for (let index = 0; index < this.channelPressureQueue.tick.length; index++) {
				const _g = this.channelPressureQueue.channel[index];
				this.channelPressureQueue.last.push(lasts[_g]);
				lasts[_g] = index;
			}
		}
	}
	Track.prototype.toJSON = function() {
		return {
			notes: this.noteQueue,
			tempos: this.tempoQueue,
			texts: this.textQueue,
			keyPressure: this.keyPressureQueue,
			channelPressure: this.channelPressureQueue,
			programs: this.programQueue,
			controllers: this.controllerQueue,
			pitchBends: this.pitchBendQueue,
			timeSignature: this.timeSignatureQueue,
			keySignature: this.keySignatureQueue,
			systemExclusive: this.systemExclusiveQueue,
			pulseCounterLength: this.pulseCounterLength
		}
	}
	Track.prototype.reset = function() {
		this.tempo = 500000 / this.mse.timeDivision;
		this.noteIndex = 0;
		this.controllerIndex = 0;
		this.pitchBendIndex = 0;
		this.tempoTick = 0;
		this.tempoTracker = 0;
		this.tempoTime = 0;
		this.programIndex = 0;
	}
	Track.prototype.update = function() {
		var _t = this.currentPulse;
		if (this.pitchBendQueue.tick.length > 0) {
			while (this.pitchBendIndex < this.pitchBendQueue.tick.length && _t >= this.pitchBendQueue.tick[this.pitchBendIndex]) {
				this.mse.pitchBendChannel[this.pitchBendQueue.channel[this.pitchBendIndex]] = this.pitchBendQueue.pitch[this.pitchBendIndex];
				this.pitchBendIndex++;
			}
			this.pitchBendIndex--;
			while (this.pitchBendIndex >= 0 && _t < this.pitchBendQueue.tick[this.pitchBendIndex]) {
				var last = this.pitchBendQueue.last[this.pitchBendIndex];
				if (last == null) {
					this.mse.pitchBendChannel[this.pitchBendQueue.channel[this.pitchBendIndex]] = 8192;
				} else {
					this.mse.pitchBendChannel[this.pitchBendQueue.channel[last]] = this.pitchBendQueue.pitch[last];
				}
				this.pitchBendIndex--;
			}
			this.pitchBendIndex++;
		}
		if (this.programQueue.tick.length > 0) {
			while (this.programIndex < this.programQueue.tick.length && _t >= this.programQueue.tick[this.programIndex]) {
				this.mse.programChannel[this.programQueue.channel[this.programIndex]] = this.programQueue.program[this.programIndex];
				this.programIndex++;
			}
			this.programIndex--;
			while (this.programIndex >= 0 && _t < this.programQueue.tick[this.programIndex]) {
				var last = this.programQueue.last[this.programIndex];
				if (last == null) {
					this.mse.programChannel[this.programQueue.channel[this.programIndex]] = 0;
				} else {
					this.mse.programChannel[this.programQueue.channel[last]] = this.programQueue.program[last];
				}
				this.programIndex--;
			}
			this.programIndex++;
		}
		if (this.controllerQueue.tick.length > 0) {
			while ((this.controllerIndex < this.controllerQueue.tick.length) && (_t >= this.controllerQueue.tick[this.controllerIndex])) {
				var channel = this.controllerQueue.channel[this.controllerIndex];
				var control = this.controllerQueue.control[this.controllerIndex];
				var value = this.controllerQueue.value[this.controllerIndex];
				this.setController(channel, control, value, false);
				this.controllerIndex++;
			}
			this.controllerIndex--;
			while ((this.controllerIndex >= 0) && (_t < this.controllerQueue.tick[this.controllerIndex])) {
				var last = this.controllerQueue.last[this.controllerIndex];
				if (last == null) {
					var channel = this.controllerQueue.channel[this.controllerIndex];
					var control = this.controllerQueue.control[this.controllerIndex];
					var value = this.controllerQueue.value[this.controllerIndex];
					this.setController(channel, control, value, true);
				} else {
					var channel = this.controllerQueue.channel[last];
					var control = this.controllerQueue.control[last];
					var value = this.controllerQueue.value[last];
					this.setController(channel, control, value, false);
				}
				this.controllerIndex--;
			}
			this.controllerIndex++;
		}
	}
	Track.prototype.setController = function(channel, control, value, isEnd) {
		switch (control) {
			case 6: // Data Entry (MSB)
				this.mse.controller.dataEntryMSB[channel] = value;
				break;
			case 7: // Channel Volume (formerly Main Volume)
				this.mse.controller.volumeChannel[channel] = value;
				if (isEnd) {
					this.mse.controller.volumeChannel[channel] = 100;
				}
				break;
			case 10: // Pan
				this.mse.controller.panChannel[channel] = value;
				if (isEnd) {
					this.mse.controller.panChannel[channel] = 63;
				}
				break;
			case 11: // Expression Controller
				this.mse.controller.expressionChannel[channel] = value;
				if (isEnd) {
					this.mse.controller.expressionChannel[channel] = 127;
				}
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
				break;
			case 38: // Data entry (LSB)
				this.mse.controller.dataEntryLSB[channel] = value;
				break;
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
				break;
			case 64:
				this.mse.controller.sustainPedalChannel[channel] = value;
				if (isEnd) {
					this.mse.controller.sustainPedalChannel[channel] = 0;
				}
				if (this.mse.isEffect) {
					for (let i = 0; i < this.mse.notesPlaying.length; i++) {
						const note = this.mse.notesPlaying[i];
						if (!note) {
							continue;
						}
						if (channel == note.channel) {
							if (this.mse.controller.sustainPedalChannel[channel] > 0) {
								note.setDurationInf = true;
							} else {
								note.setDurationInf = false;
								if (note.release && !note.release.ended && this.currentPulse >= note.nodeOff) {
									note.release.ended = true;
								}
							}
						}
					}
				}
				break;
			case 65: // Portamento on/off
			case 66: // Sustenuto on/off
			case 67: // Soft pedal on/off
			case 68: // Legato Footswitch
			case 69: // Hold 2
				break;
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
				break;
			case 96: // Data entry +1
			case 97: // Data entry -1
				break;
			case 100: // Registered Parameter Number LSB
				this.mse.controller.registeredParameterLSBchannel[channel] = value;
				break;
			case 101: // Registered Parameter Number MSB
				this.mse.controller.registeredParameterMSBchannel[channel] = value;
				break;
			case 98: // Non-Registered Parameter Number (LSB)
			case 99: // Non-Registered Parameter Number (MSB)
				break;
			case 120: // All Sound Off
			case 123: // All notes off
			case 126: // Poly mode on/off (+ all notes off)
			case 127: // Poly mode on (incl mono=off +all notes off)
				if (this.mse.isEffect) {
					for (let i = 0; i < this.mse.notesPlaying.length; i++) {
						const note = this.mse.notesPlaying[i];
						if (!note) {
							continue;
						}
						if (channel == note.channel) {
							note.ended = true;
						}
					}
				}
				break;
			case 121:
				//this.mse.resetController();
				break;
			case 122: // Local control on/off
			case 124: // Omni mode off (+ all notes off)
			case 125: // Omni mode on (+ all notes off)
				break;
		}
	}
	Track.prototype.getNote = function(mute) {
		const ids = [];
		const tickOn = this.noteQueue.tickOn;
		const len = tickOn.length;
		if (len > 0) {
			while (this.noteIndex < len && this.currentPulse > tickOn[this.noteIndex]) {
				if (!mute) {
					ids.push(this.noteIndex);
				}
				this.noteIndex++;
			}
			this.noteIndex--;
			while (this.noteIndex >= 0 && this.currentPulse < tickOn[this.noteIndex]) {
				this.noteIndex--;
			}
			this.noteIndex++;
		}
		return ids;
	}
	const notesPlayingIdEntry = new Array(262144);
	for (let i = 0; i < notesPlayingIdEntry.length; i++) {
		notesPlayingIdEntry[i] = null;
	}
	var Player = function() {
		this.audioContext = new AudioContext();
		this.node = this.audioContext.createGain();
		this.node.gain.value = 1;
		this.node.connect(this.audioContext.destination);
		this._startTime = 0;
		this.duration = 0;
		this.muteMusicr = false;
		this.DateTime = 0;
		this.onplaynote = null;
		this.onended = null;
		this.onprogress = null;
		this.oncleanup = null;
		this.speed = 1;
		this.isEffect = true;
		this.isPaused = true;
		this.currentTime = 0;
		this._currentTimeLast = 0;
		this.programChannel = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
		this.notesPlaying = new Array(150);
		for (var i = 0; i < this.notesPlaying.length; i++) {
			this.notesPlaying[i] = null;
		}
		this.notesPlayingIDs = notesPlayingIdEntry.slice(0);
		this.trackQueue = [];
		this.formatType = 0;
		this._tempo = 0;
		this._tempoTick = 0;
		this._tempoTime = 0;
		this._currentPulse = 0;
		this._soundbankLoaded = 0;
		this._soundbank = {};
		this._frameStart = Date.now();
		this._interval = setInterval(this._step.bind(this), 1000 / 60);
		this.resetEffect();
	}
	Player.prototype.resetEffect = function() {
		this.resetController();
		this.programChannel = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
		this.pitchBendChannel = [8192, 8192, 8192, 8192, 8192, 8192, 8192, 8192, 8192, 8192, 8192, 8192, 8192, 8192, 8192, 8192];
	}
	Player.prototype.resetController = function() {
		this.controller = {};
		this.controller.volumeChannel = [100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100];
		this.controller.expressionChannel = [127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127];
		this.controller.panChannel = [63, 63, 63, 63, 63, 63, 63, 63, 63, 63, 63, 63, 63, 63, 63, 63];
		this.controller.dataEntryMSB = [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2];
		this.controller.dataEntryLSB = [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2];
		this.controller.registeredParameterMSBchannel = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
		this.controller.registeredParameterLSBchannel = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
		this.controller.sustainPedalChannel = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
	}
	Player.prototype.cleanup = function() {
		this.stop();
		this.resetEffect();
		this.duration = 0;
		this.trackQueue = [];
		this._tempo = 0;
		this._tempoTick = 0;
		this._tempoTime = 0;
		this._currentPulse = 0;
		this.currentTime = 0;
		this._currentTimeLast = 0;
		if (this.oncleanup) {
			this.oncleanup();
		}
	}
	Player.prototype.resetTrack = function() {
		this._tempo = 500000 / this.timeDivision;
		this._tempoTick = 0;
		this._tempoTime = 0;
		this._currentPulse = 0;
		for (let i = 0; i < this.trackQueue.length; i++) {
			this.trackQueue[i].reset();
		}
	}
	Player.prototype.setCurrentTime = function(s) {
		this.muteMusicr = true;
		this.stopAllPlaying();
		if (this.currentTime == s) return;
		const h = Math.max(0, Math.min(this.duration, s));
		if (h <= 0) {
			this.currentTime = 0;
			this.resetTrack();
			this.setStartTime(0);
		} else {
			this.currentTime = Math.round(h * 1000) / 1000;
			this.setStartTime(this.currentTime);
		}
		this._stepUpdateTrack();
		for (let i = 0; i < this.trackQueue.length; i++) {
			const track = this.trackQueue[i];
			if (!track) continue;
			track.getNote(true);
		}
	}
	Player.prototype.setStartTime = function(s) {
		this._startTime = (Date.now() - ((s / this.speed) * 1000));
	}
	Player.prototype.setSpeed = function(s) {
		this.speed = s;
		this.setStartTime(this.currentTime);
	}
	Player.prototype._decodeAudio = function(k) {
		var _this = this;
		return new Promise(function(resolve, reject) {
			_this.audioContext.decodeAudioData(k, function(buffer) {
				resolve(buffer)
			}, function(err2) {
				reject("Could not decode audio: " + err2)
			})
		});
	}
	Player.prototype._loadSoundbankBuffer = function(s, f) {
		var _this = this;
		return fetch(f).then(function(r) {
			return r.arrayBuffer()
		}).then(function(buffer) {
			var d = new DataView(buffer);
			var k = [];
			for (var i5 = 0; i5 < buffer.byteLength; i5++) {
				k.push(d.getUint8(i5, true))
			}
			return _this._decodeAudio(buffer).then(function(o) {
				return new Promise(function(resolve, reject) {
					resolve({
						data: new Uint8Array(k),
						buffer: o
					})
				}
				)
			})
		}).then(function(sound) {
			_this._soundbank[s] = sound;
		})
	}
	Player.prototype.loadSoundbank = function() {
		var _this = this;
		const promises = [];
		this._soundbankLoaded = 0;
		for (const k in DRUM_INFO) {
			var filePath = DRUM_INFO[k][0];
			if (!this._soundbank[k]) {
				this._soundbankLoaded++;
				const l = this._loadSoundbankBuffer(k, SOUNDBANKS_INFO[filePath].file);
				promises.push(l.then(function() {
					if (_this.onprogress) {
						_this.onprogress("loaded instruments " + _this._soundbankLoaded);
					}
					_this._soundbankLoaded -= 1;
				}))
			}
		}
		for (const k in INSTRUMENT_INFO) {
			var filePath = INSTRUMENT_INFO[k][0];
			if (!this._soundbank[k]) {
				this._soundbankLoaded++;
				const l = this._loadSoundbankBuffer(k, SOUNDBANKS_INFO[filePath].file);
				promises.push(l.then(function() {
					if (_this.onprogress) {
						_this.onprogress("loaded instruments " + _this._soundbankLoaded);
					}
					_this._soundbankLoaded -= 1
				}));
			}
		}
		_this.onprogress && _this.onprogress("loaded instruments " + _this._soundbankLoaded);
		return Promise.all(promises).then(function() {
			if (_this.onprogress) {
				_this.onprogress("");
			}
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
			if (this.notesPlaying[i]) {
				this.notesPlaying[i].ended = true;
			}
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
		var t = 0;
		for (var i = 0; i < this.trackQueue.length; i++) {
			t += this.trackQueue[i].noteQueue.tickOn.length;
		}
		return t;
	}
	Player.prototype.getNoteTracker = function() {
		var t = 0;
		for (var i = 0; i < this.trackQueue.length; i++) {
			t += this.trackQueue[i].noteIndex;
		}
		return t;
	}
	Player.prototype.getTempoLength = function() {
		var t = 0;
		for (var i = 0; i < this.trackQueue.length; i++) {
			t += this.trackQueue[i].tempoQueue.tick.length;
		}
		return t;
	}
	Player.prototype.getTempoTracker = function() {
		var t = 0;
		for (var i = 0; i < this.trackQueue.length; i++) {
			t += this.trackQueue[i].tempoTracker;
		}
		return t;
	}
	Player.prototype.getSoundBankSize = function() {
		var t = 0;
		for (var name in this._soundbank) {
			t += this._soundbank[name].data.length;
		}
		return t;
	}
	Player.prototype._vidAudio = function(j, n) {
		if (Array.isArray(j)) {
			for (let i = j.length - 1; i >= 0; i--) {
				if (n >= j[i][0]) {
					return j[i][1];
				}
			}
			return j[0][1];
		}
		return j || 1;
	}
	Player.prototype.playNote = function(n) {
		if (n.type == 1) {
			var inst = MIDI_INSTRUMENT[n.instrument - 1];
			if (!inst) return;
			var span = INSTRUMENT_INFO[inst];
			if (!span) return;
			const buffer = this._soundbank[inst];
			if (!buffer) return;
			const source = this.audioContext.createBufferSource();
			const node = this.audioContext.createGain();
			source.buffer = buffer.buffer;
			if (source.loop = span.loop) {
				source.loopStart = 2.5;
				source.loopEnd = 5;
			}
			source.connect(node);
			var pitch = (span[4] ? (n.pitch + (span[4] - 60)) : n.pitch);
			source.playbackRate.value = Math.pow(2, ((pitch - 60) / 12));
			const gain = node.gain;
			var volume = n.volume * this._vidAudio(span[1], n.pitch);
			gain.value = volume;
			const releaseGain = this.audioContext.createGain();
			var releaseDuration = span[3];
			if (releaseDuration === null) {
				releaseDuration = 0.01;
			}
			const releaseStart = this.audioContext.currentTime + n.duration;
			const releaseEnd = releaseStart + releaseDuration;
			releaseGain.gain.setValueAtTime(1, releaseStart);
			releaseGain.gain.linearRampToValueAtTime(0.0001, releaseEnd);
			node.connect(releaseGain);
			releaseGain.connect(this.node);
			source.start();
			source.stop(releaseEnd);
			return {source, node};
		} else if (n.type == 0) {
			var drum = DRUMS_MIDI[n.drum - 27];
			if (!drum) return;
			var span = DRUM_INFO[drum];
			if (!span) return;
			const buffer = this._soundbank[drum];
			if (!buffer) return;
			const source = this.audioContext.createBufferSource();
			const node = this.audioContext.createGain();
			source.buffer = buffer.buffer;
			source.connect(node);
			node.connect(this.node);
			const gain = node.gain;
			var volume = n.volume * (span[1] || 1);
			gain.value = volume;
			source.start();
			return {source, node};
		}
	}
	Player.prototype._playNotes = function(n, i) {
		var a = i;
		if (a < 0) {
			a = this.notesPlaying.indexOf(null);
			if (a == -1) return;
		}
		const id = (n[1] + (n[0] * 128)) + (n[3] * 16384);
		if (n[3] == 9) {
			const drum = DRUMS_MIDI[n[1] - 27];
			if (!drum) return;
			const span = DRUM_INFO[drum];
			if (!span) return;
			const buffer = this._soundbank[drum];
			if (!buffer) return;
			const source = this.audioContext.createBufferSource();
			const node = this.audioContext.createGain();
			node.gain.value = 0;
			source.buffer = buffer.buffer;
			source.connect(node);
			node.connect(this.node);
			const isStart = (n[5] - n[6]) > 0;
			const volume = (n[2] / 99);
			var te = {
				_pitch: n[1],
				_volume: n[2],
				_program: n[0],
				id: id,
				ended: !isStart,
				start: isStart,
				note: node,
				nodeOn: n[6],
				nodeOff: n[5],
				volume: volume,
				releaseVolume: (span[1] || 1),
				pitch: 60,
				source: source,
				track: n[4],
				channel: n[3]
			};
			te.endedFunction = function() {
				te.ended = true;
			}
			source.addEventListener("ended", te.endedFunction);
			this._startNote(te);
			this._updateEffectNote(te);
			source.start();
			this.notesPlaying[a] = te;
			this.notesPlayingIDs[id] = a;
		} else {
			const inst = MIDI_INSTRUMENT[n[0]];
			if (!inst) return;
			const span = INSTRUMENT_INFO[inst];
			if (!span) return;
			const buffer = this._soundbank[inst];
			if (!buffer) return;
			const source = this.audioContext.createBufferSource();
			const node = this.audioContext.createGain();
			source.buffer = buffer.buffer;
			if (source.loop = span[2]) {
				source.loopStart = 2.5;
				source.loopEnd = 5;
			}
			source.connect(node);
			const pitch = (span[4] ? (n[1] + (span[4] - 60)) : n[1]);
			source.playbackRate.value = Math.pow(2, ((pitch - 60) / 12));
			const gain = node.gain;
			const volume = (n[2] / 99);
			const isStart = (n[5] - n[6]) > 0;
			gain.value = 0;
			const releaseGain = this.audioContext.createGain();
			releaseGain.gain.value = 1;
			node.connect(releaseGain);
			releaseGain.connect(this.node);
			var releaseDuration = span[3];
			if (releaseDuration === null || !isStart) {
				releaseDuration = 0;
			}
			var te = {
				_pitch: n[1],
				_volume: n[2],
				_program: n[0],
				id: id,
				ended: false,
				source: source,
				note: node,
				setDurationInf: false,
				start: isStart,
				release: {
					duration: releaseDuration * 1000,
					releaseGain: releaseGain,
					ended: false,
				},
				volume: volume,
				releaseVolume: this._vidAudio(span[1], n[1]),
				pitch: pitch,
				nodeOff: n[5],
				nodeOn: n[6],
				track: n[4],
				channel: n[3]
			}
			te.endedFunction = function() {
				te.ended = true;
			}
			source.addEventListener("ended", te.endedFunction);
			this._startNote(te);
			this._updateEffectNote(te);
			source.start();
			this.notesPlaying[a] = te;
			this.notesPlayingIDs[id] = a;
		}
	}
	Player.prototype._getSustainPedalChannel = function(channel) {
		return this.controller.sustainPedalChannel[channel];
	}
	Player.prototype._getPanChannel = function(channel) {
		return (this.controller.panChannel[channel] - 64) / 63 * 100;
	}
	Player.prototype._getVolumeChannel = function(channel) {
		return (this.controller.volumeChannel[channel] * (this.controller.expressionChannel[channel] / 127)) / 127;
	}
	Player.prototype._getPitchBend = function(channel) {
		if (channel == 9) {
			return 0;
		}
		return (((this.pitchBendChannel[channel] - 8192) / 8192) * this.controller.dataEntryMSB[channel]);
	}
	Player.prototype._startNote = function(n) {
		if (this.isEffect && n.track) {
			if (this._getSustainPedalChannel(n.channel) > 0) {
				n.setDurationInf = true;
			}
		}
	}
	Player.prototype._updateEffectNote = function(n) {
		if (n.start) {
			if (this.isEffect && n.track) {
				n.source.playbackRate.value = Math.pow(2, (((n.pitch + this._getPitchBend(n.channel)) - 60) / 12));
				const volumeEffect = (n.volume * this._getVolumeChannel(n.channel));
				n.note.gain.value = (((Math.pow(3, volumeEffect) - 1) / 2) * n.releaseVolume);
				if (n.pan) {
					const p = (this._getPanChannel(n.channel) + 100) / 200;
					const leftVal = Math.cos(p * Math.PI / 2);
					const rightVal = Math.sin(p * Math.PI / 2);
					n.pan.leftGain.gain.setValueAtTime(leftVal, this.audioContext.currentTime);
					n.pan.rightGain.gain.setValueAtTime(rightVal, this.audioContext.currentTime);
				}
			} else {
				n.source.playbackRate.value = Math.pow(2, ((n.pitch - 60) / 12));
				n.note.gain.value = (n.volume * n.releaseVolume);
				n.duration = n.dur;
			}
		}
	}
	Player.prototype._step = function() {
		this.DateTime = (Date.now() - this._frameStart) / 1000;
		if (this.currentTime > this.duration && !this.isPaused) {
			this.currentTime = this.duration;
			this.setStartTime(this.duration);
			for (var i = 0; i < this.notesPlaying.length; i++) {
				var dn = this.notesPlaying[i];
				if (dn) {
					dn.ended = true;
				}
			}
			if (this.onended) {
				this.onended();
			}
			this.isPaused = true;
		}
		this._currentTimeLast = this.currentTime;
		if (!this.isPaused && !this.muteMusicr) {
			this.currentTime = Math.round((Date.now() - this._startTime) * this.speed) / 1000;
		}
		this._stepUpdateTrack();
		this._stepNotesPlaying();
		this._stepPlayingNote();
		if (this.muteMusicr) {
			this.muteMusicr = false;
		}
		this._frameStart = Date.now();
	}
	Player.prototype._stepUpdateTrack = function() {
		if (this._currentTimeLast == this.currentTime) {
			return;
		}
		var _currentTimeLast = this._currentTimeLast * 1000000;
		var _currentTime = this.currentTime * 1000000;
		if (_currentTime > _currentTimeLast) {
			while (true) {
				if (_currentTime > _currentTimeLast) {
					this._stepUpdateTimeTrack(_currentTimeLast, 1);
				} else {
					_currentTimeLast = _currentTime;
					this._stepUpdateTimeTrack(_currentTimeLast, 1);
					break;
				}
				_currentTimeLast += 100000
			}
		} else {
			if (_currentTime < _currentTimeLast) {
				while (true) {
					if (_currentTime < _currentTimeLast) {
						this._stepUpdateTimeTrack(_currentTimeLast, -1);
					} else {
						_currentTimeLast = _currentTime;
						this._stepUpdateTimeTrack(_currentTimeLast, -1);
						break;
					}
					_currentTimeLast -= 100000;
				}
			}
		}
	}
	Player.prototype._stepUpdateTimeTrack = function(g, h) {
		if (h !== 0) {
			var _currentPulse = 0;
			for (var i = 0; i < this.trackQueue.length; i++) {
				var track = this.trackQueue[i];
				var _tempoQueue = track.tempoQueue;
				if (this.formatType == 2) {
					_currentPulse = (track.tempoTick + ((g - track.tempoTime) / track.tempo));
					if (h > 0) {
						while (track.tempoTracker < _tempoQueue.tick.length && _currentPulse >= _tempoQueue.tick[track.tempoTracker]) {
							track.tempoTime += (_tempoQueue.tick[track.tempoTracker] - track.tempoTick) * track.tempo;
							track.tempoTick = _tempoQueue.tick[track.tempoTracker];
							track.tempo = _tempoQueue.setting[track.tempoTracker] / this.timeDivision;
							_currentPulse = (track.tempoTick + ((g - track.tempoTime) / track.tempo));
							track.tempoTracker++;
						}
					} else {
						if (h < 0) {
							track.tempoTracker--;
							while (track.tempoTracker >= 0 && _currentPulse < _tempoQueue.tick[track.tempoTracker]) {
								track.tempoTracker--;
								if (track.tempoTracker >= 0) {
									track.tempo = _tempoQueue.setting[track.tempoTracker] / this.timeDivision;
									track.tempoTime += (_tempoQueue.tick[track.tempoTracker] - track.tempoTick) * track.tempo;
									track.tempoTick = _tempoQueue.tick[track.tempoTracker];
								} else {
									track.tempo = 500000 / this.timeDivision;
									track.tempoTime = 0;
									track.tempoTick = 0;
								}
								_currentPulse = (track.tempoTick + ((g - track.tempoTime) / track.tempo));
							}
							track.tempoTracker++;
						}
					}
					track.currentPulse = _currentPulse;
				} else {
					_currentPulse = (this._tempoTick + ((g - this._tempoTime) / this._tempo));
					if (h > 0) {
						while (track.tempoTracker < _tempoQueue.tick.length && _currentPulse >= _tempoQueue.tick[track.tempoTracker]) {
							this._tempoTime += (_tempoQueue.tick[track.tempoTracker] - this._tempoTick) * this._tempo;
							this._tempoTick = _tempoQueue.tick[track.tempoTracker];
							this._tempo = _tempoQueue.setting[track.tempoTracker] / this.timeDivision;
							_currentPulse = (this._tempoTick + ((g - this._tempoTime) / this._tempo));
							track.tempoTracker++;
						}
					} else {
						if (h < 0) {
							track.tempoTracker--;
							while (track.tempoTracker >= 0 && _currentPulse < _tempoQueue.tick[track.tempoTracker]) {
								track.tempoTracker--;
								if (track.tempoTracker >= 0) {
									this._tempo = _tempoQueue.setting[track.tempoTracker] / this.timeDivision;
									this._tempoTime += (_tempoQueue.tick[track.tempoTracker] - this._tempoTick) * this._tempo;
									this._tempoTick = _tempoQueue.tick[track.tempoTracker];
								} else {
									this._tempo = 500000 / this.timeDivision;
									this._tempoTime = 0;
									this._tempoTick = 0;
								}
								_currentPulse = (this._tempoTick + ((g - this._tempoTime) / this._tempo))
							}
							track.tempoTracker++;
						}
					}
				}
			}
			if (this.formatType !== 2) {
				this._currentPulse = (this._tempoTick + ((g - this._tempoTime) / this._tempo));
				for (var i = 0; i < this.trackQueue.length; i++) {
					this.trackQueue[i].currentPulse = this._currentPulse;
					this.trackQueue[i].tempoTick = this._tempoTick;
					this.trackQueue[i].tempoTime = this._tempoTime;
					this.trackQueue[i].tempo = this._tempo;
				}
			}
			for (var i = 0; i < this.trackQueue.length; i++) {
				this.trackQueue[i].update();
			}
		}
	}
	Player.prototype._noteStop = function(note) {
		note.source.removeEventListener("ended", note.endedFunction);
		note.source.disconnect();
		note.note.disconnect();
		note.ended = true;
	}
	Player.prototype._stepPlayingNote = function() {
		for (var i = 0; i < this.trackQueue.length; i++) {
			var track = this.trackQueue[i];
			var _noteQueue = track.noteQueue;
			var notes = track.getNote(this.muteMusicr);
			if (this.isPaused) continue;
			for (var i1 = 0; i1 < notes.length; i1++) {
				var n = notes[i1];
				var channel = _noteQueue.channel[n];
				var program = this.programChannel[channel];
				var tickOff = _noteQueue.tickOff[n];
				var tickOn = _noteQueue.tickOn[n];
				var pitch = _noteQueue.pitch[n];
				var volume = _noteQueue.velocity[n] - 1;
				if (!volume) continue;
				if (this.onplaynote) {
					if (channel == 9) {
						this.onplaynote({
							drum: pitch,
							volume: (volume / 126),
							channel: channel,
							type: 0
						});
					} else {
						this.onplaynote({
							pitch: pitch,
							dur: ((tickOff - tickOn) * track.tempo) / 1000000,
							instrument: program + 1,
							volume: (volume / 126),
							channel: channel,
							type: 1
						});
					}
				}
				if (!this.node.gain.value) continue;
				var g = [program, pitch, volume, channel, track.trackNumber, tickOff, tickOn];
				var f = -1;
				var _hid = ((g[1] + (g[0] * 128)) + (g[3] * 16384));
				var _hn = this.notesPlayingIDs[_hid];
				if (_hn != null) {
					var h = this.notesPlaying[_hn];
					if (h) {
						f = _hn;
						this._noteStop(h);
						var _release = h.release;
						if (!h.ended && _release && !_release.ended && !h.setDurationInf) {
							var j = Math.min(h.nodeOff, g[5]);
							if (h.nodeOff >= g.nodeOff && h.nodeOff <= g[6]) {
								g[5] = j;
							}
						}
						this.notesPlayingIDs[_hid] = null;
						this.notesPlaying[f] = null;
					}
				}
				this._playNotes(g, f);
			}
		}
	}
	Player.prototype._stepNotesPlaying = function() {
		for (let i = this.notesPlaying.length; i--; ) {
			var note = this.notesPlaying[i];
			if (!note) continue;
			if (!note.ended) {
				note.start = true;
				var _release = note.release;
				if (_release) {
					var h = this.trackQueue[note.track - 1];
					if (!note.setDurationInf && (h.currentPulse >= note.nodeOff)) {
						_release.ended = true;
					}
					if (_release.ended) {
						if (!("startTime" in _release)) {
							_release.startTime = Date.now();
						}
						if (_release.duration && _release.releaseGain) {
							_release.releaseGain.gain.value = Math.max(0, (1 - ((Date.now() - _release.startTime) / _release.duration)));
							if ((Date.now() - _release.startTime) >= _release.duration) {
								note.ended = true;
							}
						} else {
							note.ended = true;
						}
					}
				}
				this._updateEffectNote(note);
			}
			if (note.ended) {
				this._noteStop(note);
				this.notesPlayingIDs[note.id] = null;
				this.notesPlaying[i] = null;
			}
		}
	}
	Player.prototype.loadMid = function(data) {
		this.stop();
		this.cleanup();
		var midiparser = new MidiParser(data);
		var loadedTime = Date.now();
		var parser = midiparser.parse();
		this.loadedTime = Date.now() - loadedTime;
		this._init(parser);
		if (this.onload) {
			this.onload();
		}
	}
	Player.prototype.toJSON = function() {
		var tracks = [];
		for (var i = 0; i < this.trackQueue.length; i++) {
			tracks.push(this.trackQueue[i].toJSON());
		}
		return {
			tracks,
			timeDivision: this.timeDivision,
			formatType: this.formatType,
			duration: this.duration
		}
	}
	Player.prototype.getDuration = function() {
		var duration = 0;
		if (this.formatType == 2) {
			for (var i = 0; i < this.trackQueue.length; i++) {
				var _tempoQueue = this.trackQueue[i].tempoQueue;
				var tempoTick = 0;
				var tempo = 500000 / this.timeDivision;
				var time = 0;
				for (var _i = 0; _i < _tempoQueue.tick.length; _i++) {
					time += (_tempoQueue.tick[_i] - tempoTick) * tempo;
					tempoTick = _tempoQueue.tick[_i];
				}
				time += (this.trackQueue[i].pulseCounterLength - tempoTick) * tempo;
				if (time > duration) {
					duration = time;
				}
			}
		} else {
			var _pulseCounterLength = 0;
			var _tracks = [];
			for (var i = 0; i < this.trackQueue.length; i++) {
				var len = this.trackQueue[i].pulseCounterLength;
				if (len > _pulseCounterLength) {
					_pulseCounterLength = len;
				}
				_tracks.push({
					tempoIdx: 0
				})
			}
			var tempoTick = 0;
			var tempo = 500000 / this.timeDivision;
			var time = 0;
			var tempoLen = this.getTempoLength();
			var tempoIdx = 0;
			while (tempoIdx < tempoLen) {
				var _currentPulse = 0;
				for (var i = 0; i < _tracks.length; i++) {
					var _tempoQueue = this.trackQueue[i].tempoQueue;
					_currentPulse = (tempoTick + ((time - duration) / tempo));
					while (_tracks[i].tempoIdx < _tempoQueue.tick.length && _currentPulse >= _tempoQueue.tick[_tracks[i].tempoIdx]) {
						duration += (_tempoQueue.tick[_tracks[i].tempoIdx] - tempoTick) * tempo;
						tempoTick = _tempoQueue.tick[_tracks[i].tempoIdx];
						tempo = _tempoQueue.setting[_tracks[i].tempoIdx] / this.timeDivision;
						_currentPulse = (tempoTick + ((time - duration) / tempo));
						_tracks[i].tempoIdx++;
						tempoIdx++;
					}
				}
				time += 100000;
			}
			duration += (_pulseCounterLength - tempoTick) * tempo;
		}
		return Math.floor(duration / 1000) / 1000;
	}
	Player.prototype._init = function(data) {
		var tracks = data.tracks;
		this.trackQueue = [];
		this.timeDivision = data.timeDivision;
		this.formatType = data.formatType;
		for (var i = 0; i < tracks.length; i++) {
			this.trackQueue.push(new Track(this, i + 1, tracks[i]));
		}
		this._tempo = 500000 / data.timeDivision;
		this.duration = this.getDuration();
		this.resetTrack();
	}
	Player.prototype.loadMidiFromData = function(data) {
		this.stop();
		this.cleanup();
		this._init(data);
		if (this.onload) {
			this.onload();
		}
	}
	return {
		Player,
		MIDI_INSTRUMENT,
		DRUMS_MIDI,
		DRUM_INFO,
		INSTRUMENT_INFO,
		SOUNDBANKS_INFO,
		formats: ["mid", "rmi", "midi"],
		version: "5.1"
	}
}());
