'use-strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var RankTables = function (_React$Component) {
    _inherits(RankTables, _React$Component);

    function RankTables() {
        _classCallCheck(this, RankTables);

        return _possibleConstructorReturn(this, (RankTables.__proto__ || Object.getPrototypeOf(RankTables)).apply(this, arguments));
    }

    _createClass(RankTables, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                'div',
                null,
                React.createElement(ElotonRaihnas, null),
                React.createElement(SisukasParantuva, null),
                React.createElement(ImmuuniParantaja, null),
                React.createElement(NekroKuolematon, null)
            );
        }
    }]);

    return RankTables;
}(React.Component);

var Structure = function (_React$Component2) {
    _inherits(Structure, _React$Component2);

    function Structure(props) {
        _classCallCheck(this, Structure);

        var _this2 = _possibleConstructorReturn(this, (Structure.__proto__ || Object.getPrototypeOf(Structure)).call(this, props));

        _this2.state = {
            name: _this2.props.name,
            time: _this2.props.time,
            color: _this2.props.color /* c-rankinnimi */
        };
        return _this2;
    }

    _createClass(Structure, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                'div',
                { className: 'col-sm mb-4' },
                React.createElement(
                    'div',
                    { className: 'rank card' },
                    React.createElement(
                        'div',
                        { className: 'card-body' },
                        React.createElement(
                            'h5',
                            { className: this.state.color + 'card-title' },
                            this.props.name,
                            ' ',
                            React.createElement(
                                'span',
                                { className: 'time' },
                                '(',
                                this.props.time,
                                ')'
                            )
                        ),
                        this.props.children
                    )
                )
            );
        }
    }]);

    return Structure;
}(React.Component);

var Body = function (_React$Component3) {
    _inherits(Body, _React$Component3);

    function Body() {
        _classCallCheck(this, Body);

        return _possibleConstructorReturn(this, (Body.__proto__ || Object.getPrototypeOf(Body)).apply(this, arguments));
    }

    _createClass(Body, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                'table',
                { className: 'table table-striped table-dark' },
                React.createElement(
                    'tbody',
                    null,
                    this.props.children
                )
            );
        }
    }]);

    return Body;
}(React.Component);

var CommandRow = function (_React$Component4) {
    _inherits(CommandRow, _React$Component4);

    function CommandRow() {
        _classCallCheck(this, CommandRow);

        return _possibleConstructorReturn(this, (CommandRow.__proto__ || Object.getPrototypeOf(CommandRow)).apply(this, arguments));
    }

    _createClass(CommandRow, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                'tr',
                null,
                this.props.children
            );
        }
    }]);

    return CommandRow;
}(React.Component);

var Command = function (_React$Component5) {
    _inherits(Command, _React$Component5);

    function Command(props) {
        _classCallCheck(this, Command);

        var _this5 = _possibleConstructorReturn(this, (Command.__proto__ || Object.getPrototypeOf(Command)).call(this, props));

        _this5.state = {
            title: _this5.props.title,
            command: _this5.props.command
        };
        return _this5;
    }

    _createClass(Command, [{
        key: 'render',
        value: function render() {
            var info = this.props.info;
            if (info) {
                return React.createElement(
                    'td',
                    null,
                    this.props.command,
                    ' ',
                    React.createElement(
                        'span',
                        { 'data-toggle': 'tooltip', 'data-placement': 'right', title: this.props.title },
                        React.createElement('i', { className: 'fas fa-info-circle' })
                    )
                );
            }
            return React.createElement(
                'td',
                null,
                this.props.command
            );
        }
    }]);

    return Command;
}(React.Component);

var SetHome = function (_React$Component6) {
    _inherits(SetHome, _React$Component6);

    function SetHome(props) {
        _classCallCheck(this, SetHome);

        var _this6 = _possibleConstructorReturn(this, (SetHome.__proto__ || Object.getPrototypeOf(SetHome)).call(this, props));

        _this6.state = {
            count: _this6.props.count
        };
        return _this6;
    }

    _createClass(SetHome, [{
        key: 'render',
        value: function render() {
            return React.createElement(Command, { info: true, title: this.props.count + ' kpl', command: '/sethome' });
        }
    }]);

    return SetHome;
}(React.Component);

var Others = function (_React$Component7) {
    _inherits(Others, _React$Component7);

    function Others(props) {
        _classCallCheck(this, Others);

        var _this7 = _possibleConstructorReturn(this, (Others.__proto__ || Object.getPrototypeOf(Others)).call(this, props));

        _this7.state = {
            text: _this7.props.text,
            tip: _this7.props.mcolors
        };
        return _this7;
    }

    _createClass(Others, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                'p',
                { className: 'card-text' },
                this.props.text,
                ' ',
                React.createElement(
                    'span',
                    { 'data-toggle': 'tooltip', 'data-placement': 'right', title: this.props.tip },
                    React.createElement('i', { className: 'fas fa-info-circle' })
                )
            );
        }
    }]);

    return Others;
}(React.Component);

var ElotonRaihnas = function (_React$Component8) {
    _inherits(ElotonRaihnas, _React$Component8);

    function ElotonRaihnas() {
        _classCallCheck(this, ElotonRaihnas);

        return _possibleConstructorReturn(this, (ElotonRaihnas.__proto__ || Object.getPrototypeOf(ElotonRaihnas)).apply(this, arguments));
    }

    _createClass(ElotonRaihnas, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                'div',
                { className: 'row' },
                React.createElement(
                    Structure,
                    { name: 'Eloton', time: '0h', color: 'c-eloton ' },
                    React.createElement(
                        Body,
                        null,
                        React.createElement(
                            CommandRow,
                            null,
                            React.createElement(SetHome, { count: '1' }),
                            React.createElement(Command, { info: false, command: '/kit aloitus' })
                        )
                    )
                ),
                React.createElement(
                    Structure,
                    { name: 'Raihnas', time: '5h', color: 'c-raihnas ' },
                    React.createElement(
                        Body,
                        null,
                        React.createElement(
                            CommandRow,
                            null,
                            React.createElement(SetHome, { count: '2' }),
                            React.createElement(Command, { info: false, command: '/kit raihnas' })
                        ),
                        React.createElement(
                            CommandRow,
                            null,
                            React.createElement(Command, { info: false, command: '/hat' }),
                            React.createElement(Command, { info: false, command: '/workbench' })
                        )
                    )
                )
            );
        }
    }]);

    return ElotonRaihnas;
}(React.Component);

var SisukasParantuva = function (_React$Component9) {
    _inherits(SisukasParantuva, _React$Component9);

    function SisukasParantuva() {
        _classCallCheck(this, SisukasParantuva);

        return _possibleConstructorReturn(this, (SisukasParantuva.__proto__ || Object.getPrototypeOf(SisukasParantuva)).apply(this, arguments));
    }

    _createClass(SisukasParantuva, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                'div',
                { className: 'row' },
                React.createElement(
                    Structure,
                    { name: 'Sisukas', time: '1d', color: 'c-sisukas ' },
                    React.createElement(
                        Body,
                        null,
                        React.createElement(
                            CommandRow,
                            null,
                            React.createElement(SetHome, { count: '6' }),
                            React.createElement(Command, { info: false, command: '/kit sisukas' })
                        ),
                        React.createElement(
                            CommandRow,
                            null,
                            React.createElement(Command, { info: true, title: 'Taikamatto, 5x5 kokoinen lasimatto allasi, jolla voit leijua ilmassa, sek\xE4 lent\xE4\xE4.', command: '/mc' }),
                            React.createElement(Command, { info: false, command: '/mc light' })
                        ),
                        React.createElement(
                            CommandRow,
                            null,
                            React.createElement(Command, { info: false, command: '/enderchest' }),
                            React.createElement(Command, { info: false, command: '/near' })
                        ),
                        React.createElement(
                            CommandRow,
                            null,
                            React.createElement(Command, { info: true, title: '\xC4\xE4nestys + / - rankaisuista', command: '/+ & /-' }),
                            React.createElement(Command, { info: false })
                        )
                    ),
                    React.createElement(
                        'h4',
                        null,
                        'Muuta:'
                    ),
                    React.createElement(Others, { text: 'Kaksi uutta v\xE4ri\xE4 taikamattoon (mc)', tip: 'Vaalean harmaa (oletus) ja l\xE4pin\xE4kyv\xE4' })
                ),
                React.createElement(
                    Structure,
                    { name: 'Parantuva', time: '5d', color: 'c-parantuva ' },
                    React.createElement(
                        Body,
                        null,
                        React.createElement(
                            CommandRow,
                            null,
                            React.createElement(SetHome, { count: '8' }),
                            React.createElement(Command, { info: false, command: '/kit parantuva' })
                        ),
                        React.createElement(
                            CommandRow,
                            null,
                            React.createElement(Command, { info: false, command: '/jump' }),
                            React.createElement(Command, { info: false, command: '/mc tools' })
                        ),
                        React.createElement(
                            CommandRow,
                            null,
                            React.createElement(Command, { info: true, title: 'Nimen t\xE4ytyy olla samankaltainen Minecraft nimesi kanssa tunnistautumisen vuoksi.', command: '/nick' }),
                            React.createElement(Command, { info: true, title: 'Voit aloittaa \xE4\xE4nestyksen pelaajan hiljent\xE4mist\xE4 (20min) tai pelaajan potkimista varten.', command: '/rankaise votemute & votekick' })
                        ),
                        React.createElement(
                            CommandRow,
                            null,
                            React.createElement(Command, { info: true, title: 'Tarvitset pelaajan p\xE4\xE4n, jonka voit mm. craftata (kts. Custom Reseptit). Voit muuttaa p\xE4\xE4n kenen tahansa p\xE4\xE4ksi.', command: '/skull' })
                        )
                    ),
                    React.createElement(
                        'h4',
                        null,
                        'Muuta:'
                    ),
                    React.createElement(Others, { text: 'Kolme uutta v\xE4ri\xE4 taikamattoon (mc)', tip: 'Valkoinen, harmaa ja sininen' }),
                    React.createElement(Others, { text: 'Kyky hakata spawnereita ilman Silk Touchia', tip: 'Tarvitset silti hakun ker\xE4t\xE4ksesi sen!' })
                )
            );
        }
    }]);

    return SisukasParantuva;
}(React.Component);

var ImmuuniParantaja = function (_React$Component10) {
    _inherits(ImmuuniParantaja, _React$Component10);

    function ImmuuniParantaja() {
        _classCallCheck(this, ImmuuniParantaja);

        return _possibleConstructorReturn(this, (ImmuuniParantaja.__proto__ || Object.getPrototypeOf(ImmuuniParantaja)).apply(this, arguments));
    }

    _createClass(ImmuuniParantaja, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                'div',
                { 'class': 'row' },
                React.createElement(
                    Structure,
                    { name: 'Immuuni', time: '10d', color: 'c-immuuni ' },
                    React.createElement(
                        Body,
                        null,
                        React.createElement(
                            CommandRow,
                            null,
                            React.createElement(SetHome, { count: '12' }),
                            React.createElement(Command, { info: false, command: '/kit immuuni' })
                        ),
                        React.createElement(
                            CommandRow,
                            null,
                            React.createElement(Command, { info: false, command: '/fly' }),
                            React.createElement(Command, { info: true, title: 'Nime\xE4\xE4 k\xE4dess\xE4si olevan esineen!', command: '/nime\xE4' })
                        ),
                        React.createElement(
                            CommandRow,
                            null,
                            React.createElement(Command, { info: true, title: 'Aseta spawner maahan kun suoritat komentoa.', command: '/spawner' }),
                            React.createElement(Command, { info: false, command: '/tp' })
                        ),
                        React.createElement(
                            CommandRow,
                            null,
                            React.createElement(Command, { info: false, command: '/tptoggle' }),
                            React.createElement(Command, { info: false })
                        )
                    ),
                    React.createElement(
                        'h4',
                        null,
                        'Muuta:'
                    ),
                    React.createElement(Others, { text: 'Kaksi uutta v\xE4ri\xE4 taikamattoon (mc)', tip: 'Keltainen ja ruskea' })
                ),
                React.createElement(
                    Structure,
                    { name: 'Parantaja', time: '30d', color: 'c-parantaja ' },
                    React.createElement(
                        Body,
                        null,
                        React.createElement(
                            CommandRow,
                            null,
                            React.createElement(SetHome, { count: '16' }),
                            React.createElement(Command, { info: false, command: '/kit parantaja' })
                        ),
                        React.createElement(
                            CommandRow,
                            null,
                            React.createElement(Command, { info: false, command: '/jail' }),
                            React.createElement(Command, { info: false, command: '/kick' })
                        ),
                        React.createElement(
                            CommandRow,
                            null,
                            React.createElement(Command, { info: false, command: '/mute' }),
                            React.createElement(Command, { info: false })
                        )
                    ),
                    React.createElement(
                        'h4',
                        null,
                        'Muuta:'
                    ),
                    React.createElement(Others, { text: 'Kaksi uutta v\xE4ri\xE4 taikamattoon (mc)', tip: 'Lime ja musta' }),
                    React.createElement(Others, { text: 'P\xE4\xE4sy salaiseen arkistoon', tip: '*SALAISTA TIETOA*' })
                )
            );
        }
    }]);

    return ImmuuniParantaja;
}(React.Component);

var NekroKuolematon = function (_React$Component11) {
    _inherits(NekroKuolematon, _React$Component11);

    function NekroKuolematon() {
        _classCallCheck(this, NekroKuolematon);

        return _possibleConstructorReturn(this, (NekroKuolematon.__proto__ || Object.getPrototypeOf(NekroKuolematon)).apply(this, arguments));
    }

    _createClass(NekroKuolematon, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                'div',
                { 'class': 'row' },
                React.createElement(
                    Structure,
                    { name: 'Nekromantikko', time: '60d', color: 'c-nekromantikko ' },
                    React.createElement(
                        Body,
                        null,
                        React.createElement(
                            CommandRow,
                            null,
                            React.createElement(SetHome, { count: '18' }),
                            React.createElement(Command, { info: false, command: '/kit nekromantikko' })
                        ),
                        React.createElement(
                            CommandRow,
                            null,
                            React.createElement(Command, { info: true, title: 'Kyky tarkastella blockeja', command: '/co i' }),
                            React.createElement(Command, { info: false })
                        )
                    ),
                    React.createElement(
                        'h4',
                        null,
                        'Muuta:'
                    ),
                    React.createElement(Others, { text: 'Kaksi uutta v\xE4ri\xE4 taikamattoon (mc)', tip: 'Magenta ja punainen' })
                ),
                React.createElement(
                    Structure,
                    { name: 'Kuolematon', time: '100d', color: 'c-kuolematon ' },
                    React.createElement(
                        Body,
                        null,
                        React.createElement(
                            CommandRow,
                            null,
                            React.createElement(SetHome, { count: '18' }),
                            React.createElement(Command, { info: false, command: '/kit kuolematon' })
                        )
                    ),
                    React.createElement(
                        'h4',
                        null,
                        'Muuta:'
                    ),
                    React.createElement(Others, { text: 'Kuusi uutta v\xE4ri\xE4 taikamattoon (mc)', tip: 'Pinkki, syaani, purppura, oranssi, vihre\xE4 ja vaalean sininen' })
                )
            );
        }
    }]);

    return NekroKuolematon;
}(React.Component);

ReactDOM.render(React.createElement(RankTables, null), document.getElementById('rankit'));