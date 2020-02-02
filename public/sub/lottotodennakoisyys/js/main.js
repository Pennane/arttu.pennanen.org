Array.prototype.clone = function () {
	return this.slice(0);
};

const groupInt = int => {
	if (int === Infinity || int == 0 || int < 999) return int;
	int = parseInt(int)
	let skip = ["+", "e", ".", ","]
	let strInt = int.toString();
	let groupIndex = 1;
	let toReturn = ""
	for (let i = strInt.length; i > 0; i--) {
		toReturn = strInt[i - 1] + toReturn + "";
		if (skip.indexOf(strInt[i - 1]) > -1) {
			groupIndex = 1;
			continue
		}
		if (groupIndex % 3 === 0) {
			toReturn = " " + toReturn;
		}
		groupIndex++;
	}
	return toReturn;
}

let s = {
	v0: {
		payout: 0,
		amount: 0,
		probability: 0
	},
	v1: {
		payout: 0,
		amount: 0,
		probability: 0
	},
	v2: {
		payout: 0,
		amount: 0,
		probability: 0
	},
	v3: {
		payout: 0,
		amount: 0,
		probability: 0
	},
	v3b: {
		payout: 2,
		amount: 0,
		probability: 0
	},
	v4: {
		payout: 10,
		amount: 0,
		probability: 0
	},
	v5: {
		payout: 50,
		amount: 0,
		probability: 0
	},
	v6: {
		payout: 2000,
		amount: 0,
		probability: 0
	},
	v6b: {
		payout: 100000,
		amount: 0,
		probability: 0
	},
	v7: {
		payout: 5000000,
		amount: 0,
		probability: 0
	},
	total: {
		bonus: 0,
		amount: 0,
		wins: 0,
		probability: 0
	}
}
let n = [];
let inf = false;
let lottery = {}
let comparenumbers;
let run = amount => {
	if (!amount) {
		amount = 1;
	}
	if (amount > 1) {
		for (let i = 0; i < amount; i++) {
			lottery.generate()
				.then(parsed => lottery.compare(parsed.numbers))
				.then(parsed => lottery.check(parsed))
				.then(parsed => {
					if (i === amount - 1) {
						lottery.update();
					}
				})
				.catch(err => console.log(err));
		}
	} else if (amount === "infinite") {
		if (inf === false) {
			document.getElementById("buyinfiniteticket").textContent = "Pysäytä rivien osto";
			document.getElementById("buyinfiniteticket").classList.toggle("active", true)
			inf = true;
			let w7n = s.v7.amount;
			window.lotteryloop = setInterval(function () {
				document.getElementById("buy1000ticket").click()
				if (w7n !== s.v7.amount) {
					clearInterval(lotteryloop);
				}
			}, 50);
		} else {
			inf = false;
			document.getElementById("buyinfiniteticket").textContent = "Osta loputtomasti rivejä";
			document.getElementById("buyinfiniteticket").classList.toggle("active", false)
			clearInterval(lotteryloop);
		}

	} else {
		lottery.generate()
			.then(parsed => lottery.compare(parsed.numbers))
			.then(parsed => lottery.check(parsed))
			.then(parsed => lottery.update())
			.catch(err => console.log(err));
	}
}

lottery.setbasenumbers = (numbers) => {
	return new Promise((resolve, reject) => {
		let bonus = numbers[7];
		let nums = numbers.clone();
		nums.pop();
		nums.sort((a, b) => a - b);
		console.log(`Lottonumerot: ${nums}`)
		console.log(`Lisänumero: ${bonus}`)
		resolve();
	});
}

let lotNumSpan = [
	document.getElementById("lspan1"),
	document.getElementById("lspan2"),
	document.getElementById("lspan3"),
	document.getElementById("lspan4"),
	document.getElementById("lspan5"),
	document.getElementById("lspan6"),
	document.getElementById("lspan7"),

]

let statEl = {
	"3+1": {
		"amount": document.getElementById("v3ba"),
		"probability": document.getElementById("v3bp"),
		"winnings": document.getElementById("v3bw")
	},
	"4": {
		"amount": document.getElementById("v4a"),
		"probability": document.getElementById("v4p"),
		"winnings": document.getElementById("v4w")
	},
	"5": {
		"amount": document.getElementById("v5a"),
		"probability": document.getElementById("v5p"),
		"winnings": document.getElementById("v5w")
	},
	"6": {
		"amount": document.getElementById("v6a"),
		"probability": document.getElementById("v6p"),
		"winnings": document.getElementById("v6w")
	},
	"6+1": {
		"amount": document.getElementById("v6ba"),
		"probability": document.getElementById("v6bp"),
		"winnings": document.getElementById("v6bw")
	},
	"7": {
		"amount": document.getElementById("v7a"),
		"probability": document.getElementById("v7p"),
		"winnings": document.getElementById("v7w")
	},
	"total": {
		"rows": document.getElementById("yhta"),
		"wins": document.getElementById("voita"),
		"probability": document.getElementById("mahdp"),
		"used": document.getElementById("used"),
		"gained": document.getElementById("gained")
	}
}

lottery.update = () => {
	return new Promise((resolve, reject) => {
		lotNumSpan[0].textContent = n[0]
		lotNumSpan[1].textContent = n[1]
		lotNumSpan[2].textContent = n[2]
		lotNumSpan[3].textContent = n[3]
		lotNumSpan[4].textContent = n[4]
		lotNumSpan[5].textContent = n[5]
		lotNumSpan[6].textContent = n[6]

		statEl["3+1"].amount.textContent = groupInt(s.v3b.amount);
		statEl["3+1"].probability.textContent = s.v3b.probability;
		statEl["3+1"].winnings.textContent = groupInt(s.v3b.amount * s.v3b.payout);

		statEl["4"].amount.textContent = groupInt(s.v4.amount);
		statEl["4"].probability.textContent =s.v4.probability;
		statEl["4"].winnings.textContent = groupInt(s.v4.amount * s.v4.payout);

		statEl["5"].amount.textContent = groupInt(s.v5.amount);
		statEl["5"].probability.textContent = groupInt(s.v5.probability);
		statEl["5"].winnings.textContent = groupInt(s.v5.amount * s.v5.payout);

		statEl["6"].amount.textContent = groupInt(s.v6.amount);
		statEl["6"].probability.textContent = groupInt(s.v6.probability);
		statEl["6"].winnings.textContent = groupInt(s.v6.amount * s.v6.payout);

		statEl["6+1"].amount.textContent = groupInt(s.v6b.amount);
		statEl["6+1"].probability.textContent = groupInt(s.v6b.probability);
		statEl["6+1"].winnings.textContent = groupInt(s.v6b.amount * s.v6b.payout);

		statEl["7"].amount.textContent = groupInt(s.v7.amount);
		statEl["7"].probability.textContent = groupInt(s.v7.probability);
		statEl["7"].winnings.textContent = groupInt(s.v7.amount * s.v7.payout);

		statEl["total"].rows.textContent = groupInt(s.total.amount)
		statEl["total"].wins.textContent = groupInt(s.total.wins)
		statEl["total"].probability.textContent = s.total.probability
		statEl["total"].used.textContent = groupInt(s.total.amount)
		statEl["total"].gained.textContent = groupInt(((s.v7.amount * s.v7.payout) + (s.v6b.amount * s.v6b.payout) + (s.v6.amount * s.v6.payout) +
			(s.v5.amount * s.v5.payout) + (s.v4.amount * s.v4.payout) + (s.v3b.amount * s.v3b.payout)))
		resolve();
	});
}
lottery.generate = (amount = 7, highest = 40, lowest = 1) => {
	return new Promise((resolve, reject) => {
		let numbers = [];
		for (let i = 0; numbers.length < amount; i++) {
			let num = Math.floor(Math.random() * highest) + lowest;
			if (!numbers.includes(num)) {
				numbers.push(num);
			}
		}
		resolve({
			numbers: numbers
		});
	});
};
lottery.compare = numbers => {
	return new Promise((resolve, reject) => {
		let correct = 0;
		let bonus = {};
		bonus.number = comparenumbers[7];
		bonus.state = false;
		let comto = comparenumbers.clone();
		comto.splice(-1, 1);
		numbers.sorted = numbers.sort((a, b) => a - b);
		comto.sorted = comto.sort((a, b) => a - b);
		for (let i = 0; i < comto.length; i++) {
			if (comto.includes(numbers[i])) {
				correct++;
			}
		}
		for (let i = 0; i < numbers.length; i++) {
			if (numbers.includes(bonus.number)) {
				bonus.state = true;
			}
		}
		n = numbers.sorted;
		resolve({
			correct: correct,
			bonus: bonus.state
		});
	});
}
lottery.check = nums => {
	return new Promise((resolve, reject) => {
		let correct = nums.correct;
		let bonus = nums.bonus;
		let win
		s.total.amount++;
		if (bonus === true) {
			s.total.bonus++;
		}
		if (correct === 0) {
			s.v0.amount++;
		} else if (correct === 1) {
			s.v1.amount++;
		} else if (correct === 2) {
			s.v2.amount++;
		} else if (correct === 3 && bonus !== true) {
			s.v3.amount++;
		} else if (correct === 3 && bonus === true) {
			s.v3b.amount++;
			s.total.wins++;
		} else if (correct === 4) {
			s.v4.amount++;
			s.total.wins++;
		} else if (correct === 5) {
			s.v5.amount++;
			s.total.wins++;
		} else if (correct === 6 && bonus !== true) {
			s.v6.amount++;
			s.total.wins++;
		} else if (correct === 6 && bonus === true) {
			s.v6b.amount++;
			s.total.wins++;
		} else if (correct === 7) {
			s.v7.amount++;
			s.total.wins++;
		}
		s.total.probability = Number((1 / (s.total.wins / s.total.amount)).toPrecision(3));
		s.v3b.probability = Number((1 / (s.v3b.amount / s.total.amount)).toPrecision(4));
		s.v4.probability = Number((1 / (s.v4.amount / s.total.amount)).toPrecision(4));
		s.v5.probability = Number((1 / (s.v5.amount / s.total.amount)).toPrecision(4));
		s.v6.probability = Number((1 / (s.v6.amount / s.total.amount)).toPrecision(6));
		s.v6b.probability = Number((1 / (s.v6b.amount / s.total.amount)).toPrecision(9));
		s.v7.probability = Number((1 / (s.v7.amount / s.total.amount)).toPrecision(10));
		resolve();
	});
}
document.addEventListener("DOMContentLoaded", () => {
	
	document.querySelectorAll(".fraction").forEach(el => {
		let split = el.innerHTML.split("/")
		if (split.length === 2) {
			el.innerHTML = '<span class="top">' + split[0] + '</span><span class="bottom">' + split[1] + '</span>'
		}
	})
	
	lottery.generate(8)
		.then(parsed => {
			comparenumbers = parsed.numbers;
			lottery.setbasenumbers(parsed.numbers);
		});
	document.getElementById("buy1ticket").addEventListener('click', () => {
		run(1);
	})
	document.getElementById("buy10ticket").addEventListener('click', () => {
		run(10);
	})
	document.getElementById("buy100ticket").addEventListener('click', () => {
		run(100);
	})
	document.getElementById("buy1000ticket").addEventListener('click', () => {
		run(1000);
	})
	document.getElementById("buyinfiniteticket").addEventListener('click', () => {
		run("infinite");
	})

});