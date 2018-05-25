function printEnvironment(logger, printEmpty) {
	if (typeof logger !== 'function') {
		throw new TypeError('Logger parameter must be a function');
	}

	const negList = [
		'_{1,2}.*',
		'ANT_.+',
		'COLOR.+',
		'CONFIG_PROTECT.*',
		'DBUS_.+',
		'DESKTOP_.+',
		'DISPLAY',
		'DISTCC_.+',
		'EDITOR',
		'EIX_.+',
		'ES_BASHCOMP_.+',
		'FLTK_.+',
		'GCC_.+',
		'GIT.+',
		'GSETTINGS_.+',
		'GS_LIB',
		'GTK[0-9]?_.+',
		'HIST(?:CONTROL|FILESIZE|SIZE)',
		'INFOPATH',
		'JAVA.+',
		'JDK_.+',
		'KDE_.+',
		'KWIN_.+',
		'KONSOLE_.+',
		'LADSPA_.+',
		'LC_.+',
		'LESS.*',
		'LS_COLORS',
		'MAN.+',
		'MULTIOSDIRS',
		'npm_.+',
		'OLDPWD',
		'OPEN[ACG]L_.+',
		'PAGER',
		'PAM_.+',
		'PAPERSIZE',
		'PROFILEHOME',
		'PROMPT_.+',
		'PS[0-9]',
		'QMLSCENE_.+',
		'QSG_.+',
		'QT_.+',
		'SESSION_.+',
		'SHELL.*',
		'SHLVL',
		'SSH_.+',
		'TERM',
		'VBOX_.+',
		'WINDOWID',
		'WINE.+',
		'XAUTHORITY',
		'XCURSOR_.+',
		'XDG_.+',
		'XSESSION',
	];

	const negMatch = new RegExp('^(?:' + negList.join('|') + ')$');

	Object.keys(process.env).sort().forEach(function (name) {
		if (negMatch.test(name)) return;
		if (process.env[name] === '' && printEmpty !== true) return;
		logger(name + ' = ' + process.env[name]);
	});
}

module.exports = printEnvironment;
module.exports.default = printEnvironment;

// vim: set ts=2 ft=javascript fenc=utf8:
