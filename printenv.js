function printEnvironment(logger) {
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
		'EDITOR',
		'GCC_.+',
		'GIT.+',
		'GSETTINGS_.+',
		'GS_LIB',
		'INFOPATH',
		'JAVA.+',
		'JDK_.+',
		'KDE_.+',
		'KWIN_.+',
		'KONSOLE_.+',
		'LADSPA_.+',
		'LC_.+',
		'LESS.*',
		'MAN.+',
		'MULTIOSDIRS',
		'OLDPWD',
		'OPENGL_.+',
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
		'WINDOWID',
		'XAUTHORITY',
		'XCURSOR_.+',
		'XDG_.+',
	];

	const negMatch = new RegExp('^(?:' + negList.join('|') + ')$');

	Object.keys(process.env).sort().forEach(function (name) {
		if (negMatch.test(name)) return;
		logger(name + ' = ' + process.env[name]);
	});
}

exports.default = printEnvironment;
