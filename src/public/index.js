
        const tryRequire = (path) => {
        	try {
        	const image = require(`${path}`);
        	return image
        	} catch (err) {
        	return false
        	}
        };

        export default {
        
	questionMark: require('./questionMark.png'),
	Header_Vector: tryRequire('./Header_Vector.png') || require('./questionMark.png'),
	Home_fourth: tryRequire('./Home_fourth.png') || require('./questionMark.png'),
	Header_Vector_1: tryRequire('./Header_Vector_1.png') || require('./questionMark.png'),
	Header_MeubelHouse_Logos05: tryRequire('./Header_MeubelHouse_Logos05.png') || require('./questionMark.png'),
	Home_third: tryRequire('./Home_third.png') || require('./questionMark.png'),
	Home_second: tryRequire('./Home_second.png') || require('./questionMark.png'),
	Home_first: tryRequire('./Home_first.png') || require('./questionMark.png'),
	Home_Vector: tryRequire('./Home_Vector.png') || require('./questionMark.png'),
	Home_Vector_1: tryRequire('./Home_Vector_1.png') || require('./questionMark.png'),
	Home_MeubelHouse_Logos05: tryRequire('./Home_MeubelHouse_Logos05.png') || require('./questionMark.png'),
}