(window.webpackJsonp=window.webpackJsonp||[]).push([[42],{142:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return o})),n.d(t,"default",(function(){return l}));var r=n(2),a=(n(0),n(180));const i={id:"start03",title:"ESLint & Prettier",sidebar_label:"ESLint & Prettier"},c={id:"start03",title:"ESLint & Prettier",description:"\u041f\u043b\u0430\u0433\u0438\u043d ES Lint \u2014 https://eslint.org \u043f\u043e\u0437\u0432\u043e\u043b\u044f\u0435\u0442 \u043f\u0438\u0441\u0430\u0442\u044c \u0432\u0430\u0448 \u043a\u043e\u0434 \u0431\u043e\u043b\u0435\u0435 \u0447\u0438\u0441\u0442\u044b\u043c, \u043f\u043e\u0434\u0441\u043a\u0430\u0437\u044b\u0432\u0430\u0435\u0442, \u0433\u0434\u0435 \u0432\u044b \u0441\u043e\u0432\u0435\u0440\u0448\u0430\u0435\u0442\u0435 \u043e\u0448\u0438\u0431\u043a\u0438 \u0438 \u0432\u043e\u043e\u0431\u0449\u0435 \u044d\u0442\u043e \u0445\u043e\u0440\u043e\u0448\u0430\u044f \u043f\u0440\u0430\u043a\u0442\u0438\u043a\u0430 \u0434\u043b\u044f \u0440\u0430\u0431\u043e\u0442\u0435 \u0432 \u043a\u043e\u043c\u0430\u043d\u0434\u0435, \u0447\u0442\u043e\u0431\u044b \u0443 \u0432\u0441\u0435\u0445 \u0432\u0441\u0451 \u0431\u044b\u043b\u043e \u0432 \u043e\u0434\u043d\u043e\u043c \u0441\u0442\u0438\u043b\u0435 \u2014 ES Lint \u0431\u0443\u0434\u0435\u0442 \u043f\u043e\u0434\u0441\u043a\u0430\u0437\u044b\u0432\u0430\u0442\u044c \u043a\u0430\u043a\u0438\u0435 \u043f\u0435\u0440\u0435\u043c\u0435\u043d\u043d\u044b\u0435 \u0432\u044b \u043d\u0435 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0435\u0442\u0435, \u0433\u0434\u0435 \u0438 \u043a\u0430\u043a\u0438\u0435 \u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442\u044b \u043d\u0435 \u0437\u0430\u0434\u0435\u0439\u0441\u0442\u0432\u0443\u0439\u0442\u0435, \u043f\u043e\u043a\u0430\u0437\u044b\u0432\u0430\u0435\u0442 \u0441\u0438\u043d\u0442\u0430\u043a\u0441\u0438\u0447\u0435\u0441\u043a\u0438\u0435 \u043e\u0448\u0438\u0431\u043a\u0438 \u0438 \u0433\u0434\u0435 \u043d\u0435 \u043f\u0440\u0430\u0432\u0438\u043b\u044c\u043d\u043e \u0441\u0442\u0430\u0432\u0438\u0442\u0435 \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0433\u0434\u0435 \u0441\u0442\u0430\u0432\u0438\u0442\u0435 \u0442\u043e\u0447\u043a\u0438 \u0441 \u0437\u0430\u043f\u044f\u0442\u044b\u043c\u0438 \u0438 \u0442.\u0434. \u0422\u043e \u0435\u0441\u0442\u044c \u044d\u0442\u043e \u0443\u0436\u0435 \u0441\u0442\u0430\u043d\u0434\u0430\u0440\u0442 \u0434\u0435\u0444\u0430\u043a\u0442\u043e, \u043a\u043e\u0442\u043e\u0440\u044b\u0439 \u043d\u0443\u0436\u043d\u043e \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c \u0432 \u043d\u0430\u043f\u0438\u0441\u0430\u043d\u0438\u0438 \u0441\u0432\u043e\u0435\u0433\u043e \u043a\u043e\u0434\u0430 \u0438 \u044d\u0442\u043e\u0442 \u043f\u043b\u0430\u0433\u0438\u043d \u0432\u0430\u0441 \u0438\u0437\u0431\u0430\u0432\u0438\u0442 \u043e\u0442 \u043c\u043d\u043e\u0433\u0438\u0445 \u0433\u043b\u0443\u043f\u044b\u0445 \u043e\u0448\u0438\u0431\u043e\u043a, \u043a\u043e\u0442\u043e\u0440\u044b\u0435 \u0432\u044b \u0434\u043e\u043f\u0443\u0441\u043a\u0430\u0435\u0442\u0435 \u043f\u0440\u0438 \u0440\u0430\u0437\u0440\u0430\u0431\u043e\u0442\u043a\u0435 \u0441\u0432\u043e\u0435\u0433\u043e \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u044f.",source:"@site/docs/start03.md",permalink:"/docs/start03",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/start03.md",sidebar_label:"ESLint & Prettier",sidebar:"someSidebar",previous:{title:"\u0418\u043d\u0438\u0446\u0438\u0430\u043b\u0438\u0437\u0430\u0446\u0438\u044f",permalink:"/docs/start02"},next:{title:"Hello world",permalink:"/docs/start04"}},o=[{value:"\u0423\u0441\u0442\u0430\u043d\u0430\u0432\u043b\u0438\u0432\u0430\u0435\u043c \u0437\u0430\u0432\u0438\u0441\u0438\u043c\u043e\u0441\u0442\u0438",id:"\u0443\u0441\u0442\u0430\u043d\u0430\u0432\u043b\u0438\u0432\u0430\u0435\u043c-\u0437\u0430\u0432\u0438\u0441\u0438\u043c\u043e\u0441\u0442\u0438",children:[]},{value:"\u041f\u0440\u0430\u0432\u0438\u043b\u0430 Eslint",id:"\u043f\u0440\u0430\u0432\u0438\u043b\u0430-eslint",children:[]},{value:"\u041f\u0440\u0430\u0432\u0438\u043b\u0430 Prettier",id:"\u043f\u0440\u0430\u0432\u0438\u043b\u0430-prettier",children:[]},{value:"\u0420\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u0443\u0435\u043c package.json",id:"\u0440\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u0443\u0435\u043c-packagejson",children:[]},{value:"\u041f\u0435\u0440\u0435\u043d\u043e\u0441\u0438\u043c App.js",id:"\u043f\u0435\u0440\u0435\u043d\u043e\u0441\u0438\u043c-appjs",children:[]},{value:"\u0417\u0430\u043f\u0443\u0441\u043a\u0430\u0435\u043c \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u0435",id:"\u0437\u0430\u043f\u0443\u0441\u043a\u0430\u0435\u043c-\u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u0435",children:[]},{value:"Done \u2705",id:"done-",children:[]}],s={rightToc:o};function l({components:e,...t}){return Object(a.b)("wrapper",Object(r.a)({},s,t,{components:e,mdxType:"MDXLayout"}),Object(a.b)("p",null,"\u041f\u043b\u0430\u0433\u0438\u043d ES Lint \u2014 ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"https://eslint.org"}),"https://eslint.org")," \u043f\u043e\u0437\u0432\u043e\u043b\u044f\u0435\u0442 \u043f\u0438\u0441\u0430\u0442\u044c \u0432\u0430\u0448 \u043a\u043e\u0434 \u0431\u043e\u043b\u0435\u0435 \u0447\u0438\u0441\u0442\u044b\u043c, \u043f\u043e\u0434\u0441\u043a\u0430\u0437\u044b\u0432\u0430\u0435\u0442, \u0433\u0434\u0435 \u0432\u044b \u0441\u043e\u0432\u0435\u0440\u0448\u0430\u0435\u0442\u0435 \u043e\u0448\u0438\u0431\u043a\u0438 \u0438 \u0432\u043e\u043e\u0431\u0449\u0435 \u044d\u0442\u043e \u0445\u043e\u0440\u043e\u0448\u0430\u044f \u043f\u0440\u0430\u043a\u0442\u0438\u043a\u0430 \u0434\u043b\u044f \u0440\u0430\u0431\u043e\u0442\u0435 \u0432 \u043a\u043e\u043c\u0430\u043d\u0434\u0435, \u0447\u0442\u043e\u0431\u044b \u0443 \u0432\u0441\u0435\u0445 \u0432\u0441\u0451 \u0431\u044b\u043b\u043e \u0432 \u043e\u0434\u043d\u043e\u043c \u0441\u0442\u0438\u043b\u0435 \u2014 ES Lint \u0431\u0443\u0434\u0435\u0442 \u043f\u043e\u0434\u0441\u043a\u0430\u0437\u044b\u0432\u0430\u0442\u044c \u043a\u0430\u043a\u0438\u0435 \u043f\u0435\u0440\u0435\u043c\u0435\u043d\u043d\u044b\u0435 \u0432\u044b \u043d\u0435 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0435\u0442\u0435, \u0433\u0434\u0435 \u0438 \u043a\u0430\u043a\u0438\u0435 \u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442\u044b \u043d\u0435 \u0437\u0430\u0434\u0435\u0439\u0441\u0442\u0432\u0443\u0439\u0442\u0435, \u043f\u043e\u043a\u0430\u0437\u044b\u0432\u0430\u0435\u0442 \u0441\u0438\u043d\u0442\u0430\u043a\u0441\u0438\u0447\u0435\u0441\u043a\u0438\u0435 \u043e\u0448\u0438\u0431\u043a\u0438 \u0438 \u0433\u0434\u0435 \u043d\u0435 \u043f\u0440\u0430\u0432\u0438\u043b\u044c\u043d\u043e \u0441\u0442\u0430\u0432\u0438\u0442\u0435 \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0433\u0434\u0435 \u0441\u0442\u0430\u0432\u0438\u0442\u0435 \u0442\u043e\u0447\u043a\u0438 \u0441 \u0437\u0430\u043f\u044f\u0442\u044b\u043c\u0438 \u0438 \u0442.\u0434. \u0422\u043e \u0435\u0441\u0442\u044c \u044d\u0442\u043e \u0443\u0436\u0435 \u0441\u0442\u0430\u043d\u0434\u0430\u0440\u0442 \u0434\u0435\u0444\u0430\u043a\u0442\u043e, \u043a\u043e\u0442\u043e\u0440\u044b\u0439 \u043d\u0443\u0436\u043d\u043e \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c \u0432 \u043d\u0430\u043f\u0438\u0441\u0430\u043d\u0438\u0438 \u0441\u0432\u043e\u0435\u0433\u043e \u043a\u043e\u0434\u0430 \u0438 \u044d\u0442\u043e\u0442 \u043f\u043b\u0430\u0433\u0438\u043d \u0432\u0430\u0441 \u0438\u0437\u0431\u0430\u0432\u0438\u0442 \u043e\u0442 \u043c\u043d\u043e\u0433\u0438\u0445 \u0433\u043b\u0443\u043f\u044b\u0445 \u043e\u0448\u0438\u0431\u043e\u043a, \u043a\u043e\u0442\u043e\u0440\u044b\u0435 \u0432\u044b \u0434\u043e\u043f\u0443\u0441\u043a\u0430\u0435\u0442\u0435 \u043f\u0440\u0438 \u0440\u0430\u0437\u0440\u0430\u0431\u043e\u0442\u043a\u0435 \u0441\u0432\u043e\u0435\u0433\u043e \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u044f."),Object(a.b)("p",null,"Prettier - \u0418\u043d\u0441\u0442\u0440\u0443\u043c\u0435\u043d\u0442 \u0444\u043e\u0440\u043c\u0430\u0442\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u044f \u043a\u043e\u0434\u0430 c \u043f\u043e\u0434\u0434\u0435\u0440\u0436\u043a\u043e\u0439 \u043c\u043d\u043e\u0436\u0435\u0441\u0442\u0432\u0430 \u044f\u0437\u044b\u043a\u043e\u0432, \u043c\u0438\u043d\u0438\u043c\u0443\u043c\u043e\u043c \u043a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u0438 \u0438 \u043c\u0430\u043a\u0441\u0438\u043c\u0443\u043c\u043e\u043c \u043d\u0430\u0432\u044f\u0437\u0430\u043d\u043d\u044b\u0445 \u043f\u0440\u0430\u0432\u0438\u043b."),Object(a.b)("p",null,Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"https://youtu.be/noQ0JGVC6SA"}),Object(a.b)("img",Object(r.a)({parentName:"a"},{src:"/img/start/03.gif",alt:"Eslint"})))),Object(a.b)("p",null,Object(a.b)("img",Object(r.a)({parentName:"p"},{src:"/img/steps/01.png",alt:"Step01"}))),Object(a.b)("h2",{id:"\u0443\u0441\u0442\u0430\u043d\u0430\u0432\u043b\u0438\u0432\u0430\u0435\u043c-\u0437\u0430\u0432\u0438\u0441\u0438\u043c\u043e\u0441\u0442\u0438"},"\u0423\u0441\u0442\u0430\u043d\u0430\u0432\u043b\u0438\u0432\u0430\u0435\u043c \u0437\u0430\u0432\u0438\u0441\u0438\u043c\u043e\u0441\u0442\u0438"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{})," yarn add eslint eslint-config-airbnb babel-preset-airbnb eslint-plugin-import eslint-plugin-jsx-a11y eslint-plugin-react eslint-watch babel-core babel-eslint babel-preset-react-native pre-commit prettier prettier-eslint eslint-plugin-prettier eslint-config-prettier eslint-plugin-react eslint-plugin-react-native eslint-plugin-flowtype eslint-plugin-react-hooks --dev\n")),Object(a.b)("p",null,Object(a.b)("img",Object(r.a)({parentName:"p"},{src:"/img/steps/02.png",alt:"Step02"}))),Object(a.b)("h2",{id:"\u043f\u0440\u0430\u0432\u0438\u043b\u0430-eslint"},"\u041f\u0440\u0430\u0432\u0438\u043b\u0430 Eslint"),Object(a.b)("p",null,"\u0414\u043e\u0431\u0430\u0432\u043b\u044f\u0435\u043c \u043f\u0440\u0430\u0432\u0438\u043b\u0430 \u0432 .eslintrc.js"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-jsx"}),"module.exports = {\n  root: true,\n  parser: 'babel-eslint',\n  extends: ['airbnb', 'prettier', 'plugin:flowtype/recommended'],\n  plugins: ['react', 'react-native', 'jsx-a11y', 'import', 'react-hooks'],\n  parserOptions: {\n    ecmaFeatures: {\n      jsx: true,\n    },\n  },\n  env: {\n    'react-native/react-native': true,\n  },\n  rules: {\n    'no-param-reassign': 0,\n    'react-hooks/rules-of-hooks': 'error',\n    'react-hooks/exhaustive-deps': 'warn',\n    'react/jsx-filename-extension': ['off'],\n    'react/jsx-one-expression-per-line': 0,\n    'linebreak-style': ['off'],\n    'implicit-arrow-linebreak': 0,\n    'no-undef': ['error'],\n    'react/sort-comp': ['off'],\n    'react/prefer-stateless-function': ['off'],\n    'react/destructuring-assignment': 1,\n    'function-paren-newline': 0,\n    semi: ['error', 'never'],\n    'spaced-comment': 0,\n    'comma-dangle': ['error', 'never'],\n    'react/prop-types': 0,\n    'no-extra-boolean-cast': 0,\n    'quote-props': 0,\n    'object-curly-spacing': ['error', 'always'],\n    camelcase: 0,\n    'no-nested-ternary': 0,\n    'react/jsx-wrap-multilines': 0,\n    'object-curly-newline': 0,\n    'operator-linebreak': 0,\n    'no-unused-expressions': 0,\n    'global-require': 0,\n    'max-len': 0,\n    'import/no-cycle': 0,\n    'no-underscore-dangle': 0,\n    'no-return-assign': 0,\n    'import/prefer-default-export': 0,\n    'jsx-quotes': ['error', 'prefer-double'],\n    'no-console': 'error',\n    'arrow-parens': 0,\n    'eol-last': 0,\n    'react/destructuring-assignment': 0,\n    'react-native/no-unused-styles': 0,\n    'react-native/split-platform-components': 0,\n    'react-native/no-inline-styles': 0,\n    'react-native/no-color-literals': 0,\n    'react-native/no-raw-text': 0,\n    'consistent-return': 0,\n  },\n  settings: {\n    'import/resolver': {\n      node: {\n        extensions: ['.js', '.ios.js', '.android.js'],\n      },\n    },\n  },\n};\n")),Object(a.b)("p",null,Object(a.b)("img",Object(r.a)({parentName:"p"},{src:"/img/steps/03.png",alt:"Step03"}))),Object(a.b)("h2",{id:"\u043f\u0440\u0430\u0432\u0438\u043b\u0430-prettier"},"\u041f\u0440\u0430\u0432\u0438\u043b\u0430 Prettier"),Object(a.b)("p",null,"\u0414\u043e\u0431\u0430\u0432\u043b\u044f\u0435\u043c \u043f\u0440\u0430\u0432\u0438\u043b\u0430 \u0432 .prettierrc.js"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-jsx"}),"module.exports = {\n  singleQuote: true,\n  printWidth: 120,\n  tabWidth: 2,\n  trailingComma: 'none',\n  bracketSpacing: true,\n  semi: false,\n  useTabs: false,\n  jsxBracketSameLine: false,\n};\n")),Object(a.b)("p",null,Object(a.b)("img",Object(r.a)({parentName:"p"},{src:"/img/steps/04.png",alt:"Step04"}))),Object(a.b)("h2",{id:"\u0440\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u0443\u0435\u043c-packagejson"},"\u0420\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u0443\u0435\u043c package.json"),Object(a.b)("p",null,"\u041a\u0443\u0434\u0430 \u0434\u043e\u0431\u0430\u0432\u043b\u044f\u0435\u043c \u0441\u043a\u0440\u0438\u043f\u0442\u044b:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"\u0421\u0438\u043c\u0443\u043b\u044f\u0442\u043e\u0440. \u0414\u043b\u044f \u043c\u0435\u043d\u044f \u044d\u0442\u043e iPhone SE \u0442\u0430\u043a \u043a\u0430\u043a \u0435\u0433\u043e \u0440\u0430\u0437\u043c\u0435\u0440 \u044d\u043a\u0440\u0430\u043d\u0430 \u043c\u0438\u043d\u0438\u043c\u0430\u043b\u044c\u043d\u043e\u0435 \u0442\u0440\u0435\u0431\u043e\u0432\u0430\u043d\u0438\u0435 \u043f\u043e \u0432\u0435\u0440\u0441\u0442\u043a\u0435(iPhone 3,4 \u0443\u0436\u0435 \u0432\u0441\u0435)"),Object(a.b)("li",{parentName:"ul"},"\u041b\u0438\u043d\u0442\u0435\u0440, \u043a\u043e\u0442\u043e\u0440\u044b\u0439 \u0431\u0443\u0434\u0435\u0442 \u0437\u0430\u043f\u0440\u0435\u0449\u0430\u0442\u044c \u0432\u0430\u043c \u043f\u0443\u0448\u0438\u0442\u044c \u0434\u043e \u0438\u0441\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u0438\u044f \u0432\u0441\u0435\u0445 \u043e\u0448\u0438\u0431\u043e\u043a \u0432 \u043a\u043e\u0434\u0435"),Object(a.b)("li",{parentName:"ul"},"\u0423\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0430 Pods")),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-jsx"}),'"scripts": {\n   "ios": "react-native run-ios --simulator=\'iPhone SE\'",\n   "android": "react-native run-android",\n   "lint": "esw src/**",\n   "lint-watch": "esw -w --changed src/**",\n    "postinstall":"cd ./ios && pod install && cd .."\n },\n"precommit": "lint",\n')),Object(a.b)("p",null,Object(a.b)("img",Object(r.a)({parentName:"p"},{src:"/img/steps/05.png",alt:"Step05"}))),Object(a.b)("h2",{id:"\u043f\u0435\u0440\u0435\u043d\u043e\u0441\u0438\u043c-appjs"},"\u041f\u0435\u0440\u0435\u043d\u043e\u0441\u0438\u043c App.js"),Object(a.b)("p",null,"\u0421\u043e\u0437\u0434\u0430\u0435\u043c \u043f\u0430\u043f\u043a\u0443 ",Object(a.b)("inlineCode",{parentName:"p"},"src")," \u0438 \u043f\u0435\u0440\u0435\u043d\u043e\u0441\u0438\u043c \u0442\u0443\u0434\u0430 \u0444\u0430\u0439\u043b App.js, \u043f\u0435\u0440\u0435\u0438\u043c\u0435\u043d\u043e\u0432\u044b\u0432\u0430\u044f \u0435\u0433\u043e ",Object(a.b)("inlineCode",{parentName:"p"},"src/index.js")),Object(a.b)("p",null,Object(a.b)("img",Object(r.a)({parentName:"p"},{src:"/img/steps/06.png",alt:"Step06"}))),Object(a.b)("h2",{id:"\u0437\u0430\u043f\u0443\u0441\u043a\u0430\u0435\u043c-\u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u0435"},"\u0417\u0430\u043f\u0443\u0441\u043a\u0430\u0435\u043c \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u0435"),Object(a.b)("p",null,Object(a.b)("inlineCode",{parentName:"p"},"yarn start-ios")," or ",Object(a.b)("inlineCode",{parentName:"p"},"yarn start-android")),Object(a.b)("h2",{id:"done-"},"Done \u2705"),Object(a.b)("p",null,Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"https://www.patreon.com/bePatron?u=31769291"}),Object(a.b)("img",Object(r.a)({parentName:"a"},{src:"/img/logo/patreon.png",alt:"Become a Patron!"})))))}l.isMDXComponent=!0},180:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return d}));var r=n(0),a=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=a.a.createContext({}),p=function(e){var t=a.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},b=function(e){var t=p(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),b=p(n),m=r,d=b["".concat(c,".").concat(m)]||b[m]||u[m]||i;return n?a.a.createElement(d,o(o({ref:t},l),{},{components:n})):a.a.createElement(d,o({ref:t},l))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,c=new Array(i);c[0]=m;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:r,c[1]=o;for(var l=2;l<i;l++)c[l]=n[l];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);