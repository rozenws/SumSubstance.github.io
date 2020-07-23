(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{257:function(t,s,a){"use strict";a.r(s);var e=a(16),n=Object(e.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"telegram-passport"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#telegram-passport"}},[t._v("#")]),t._v(" Telegram Passport")]),t._v(" "),a("p",[t._v("This integration option is very easy. Just put a Telegram button on your page and that's it. Of course, a user will be asked to install Telegram if they haven't done so yet.")]),t._v(" "),a("div",{staticClass:"tip custom-block"},[a("p",[t._v("We recommend using this option in combination with "),a("router-link",{attrs:{to:"/web-sdk/"}},[t._v("WebSDK")]),t._v(", as users may not use the Telegram.")],1)]),t._v(" "),a("h2",{attrs:{id:"preparations"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#preparations"}},[t._v("#")]),t._v(" Preparations")]),t._v(" "),a("p",[t._v("To initialize a Telegram Passport you should "),a("router-link",{attrs:{to:"/api-reference/#access-tokens-for-sdks"}},[t._v("generate")]),t._v("\na temporary "),a("strong",[t._v("access token")]),t._v(" that is also passed to the Telegram Passport initialization.\n"),a("strong",[t._v("This action must be performed on a server side")]),t._v(".\nPlease also pass a "),a("code",[t._v("userId")]),t._v(" parameter that is "),a("strong",[t._v("unique")]),t._v(" and meaningful.\nIt can be an external user ID in your system, or an email address.\nAlthough they may be used for testing, please do not randomly generate these IDs.")],1),t._v(" "),a("div",{staticClass:"warning custom-block"},[a("p",[a("b",[t._v("Do not reuse")]),t._v(" tokens. Create a new token every time you show a Telegram Passport. Each token has a lifespan, which you provide upon its creation. To avoid its expiration, just create a new one each time.")])]),t._v(" "),a("h2",{attrs:{id:"getting-started"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#getting-started"}},[t._v("#")]),t._v(" Getting started")]),t._v(" "),a("p",[t._v("Example of the JS button code:")]),t._v(" "),a("CodeBlock",[a("div",{staticClass:"language-html extra-class"},[a("pre",{pre:!0,attrs:{class:"language-html"}},[a("code",[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("script")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("src")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("telegram-passport.js"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),a("span",{pre:!0,attrs:{class:"token script"}}),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("script")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("div")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("id")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("telegram_passport_auth"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("div")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("script")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),a("span",{pre:!0,attrs:{class:"token script"}},[a("span",{pre:!0,attrs:{class:"token language-javascript"}},[t._v("\n  Telegram"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Passport"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("createAuthButton")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'telegram_passport_auth'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      bot_id"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("669660896")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// or 691314081 for production")]),t._v("\n      scope"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        data"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" type"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'id_document'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" selfie"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'address_document'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'phone_number'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'email'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        v"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      public_key"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'-----BEGIN PUBLIC KEY-----\\n'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAz4BVYGm1jd+ow5NWkIJM\\n'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'3C1kvob5KBFHgqL+PQvATSrUkCDsod9cuL7gWOUez5l6yld7xkspXPcv5SwdJJ8v\\n'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'1vPbdDazrEb+pMExbE1d1AFyEDLxOgeJ4O2FM2RsxEoVhaV9UnNKFMugru54EKmI\\n'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'IUREG67UL+2dvk4HPWIh/tkjz++pQVO0fM/bw0Cx2qBIpofZiP/dvYADDG4UDIvu\\n'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'OxWkwp5+2rzB4kkV1BaDANVu0A8N3dE4Mdu5NvFKlyz0Vp0BRgH9Gc8FphjAZHNV\\n'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'wmJodKL+R9xAjmE/nTaTCxoan15Q2j4IZvGdBPhCq9eK+BNxhuJK0mgO+KCQvCJp\\n'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'lwIDAQAB\\n'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'-----END PUBLIC KEY-----'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      nonce"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("ACCESS_TOKEN")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// <-- put here the token generated on your backend")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// callback_url: 'https://example.com/callback/' // after authorization a user will be redirected here")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      text"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'KYC Check via Telegram Passport'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// custom text")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])]),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("script")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])])]),t._v(" "),a("p",[t._v("If it is necessary for users to pass verification through "),a("code",[t._v("Telegram Passport")]),t._v(", there are some steps to follow:")]),t._v(" "),a("ul",[a("li",[t._v("Create "),a("code",[t._v("ACCESS_TOKEN")]),t._v(" by "),a("a",{attrs:{href:"#preparations"}},[t._v("request from your backend")])]),t._v(" "),a("li",[t._v("Initialize the button as in this example:")])]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("Name")]),t._v(" "),a("th",[t._v("Description")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("bot_id")]),t._v(" "),a("td",[t._v("ID of the bot.")])]),t._v(" "),a("tr",[a("td",[t._v("scope")]),t._v(" "),a("td",[t._v("List of documents to be requested from the user.")])]),t._v(" "),a("tr",[a("td",[t._v("public_key")]),t._v(" "),a("td",[t._v("The public key to encrypt the data. Is a constant.")])]),t._v(" "),a("tr",[a("td",[t._v("payload")]),t._v(" "),a("td",[t._v("After sending the data, the user will be redirected to this page.")])])])]),t._v(" "),a("p",[a("code",[t._v("669660896")]),t._v(" — the "),a("code",[t._v("bot_id")]),t._v(" for the test environment")]),t._v(" "),a("p",[a("code",[t._v("691314081")]),t._v(" — the "),a("code",[t._v("bot_id")]),t._v(" for the product environment")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("Or you can add a button on your page as described "),a("a",{attrs:{href:"https://core.telegram.org/passport/sdk-javascript",target:"_blank",rel:"noopener noreferrer"}},[t._v("here"),a("OutboundLink")],1),t._v(".\nYou can also use Telegram Passport mobile SDKs to do the same.\nThe "),a("strong",[t._v("important thing")]),t._v(" is to provide a generated token as "),a("code",[t._v("payload")]),t._v("\n(see the "),a("a",{attrs:{href:"#preparations"}},[t._v("Preparations")]),t._v(" section).")])]),t._v(" "),a("li",[a("p",[t._v("After verification is finished, we will send the callback to your endpoint.\n("),a("router-link",{attrs:{to:"/api-reference/#getting-verification-results"}},[t._v("Getting verification results")]),t._v(")")],1)])]),t._v(" "),a("h2",{attrs:{id:"important-notes"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#important-notes"}},[t._v("#")]),t._v(" Important notes")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("When switching to production make sure to change the bot ID. The public key stays the same. "),a("code",[t._v("ACCESS_TOKEN")]),t._v(" should be\ngenerated according to the environment.")])]),t._v(" "),a("li",[a("p",[t._v("When you generate a token you use the "),a("code",[t._v("userId")]),t._v(". Using these values, you can get the "),a("code",[t._v("applicantId")]),t._v(":")])])]),t._v(" "),a("p",[a("strong",[t._v("GET")]),t._v(" "),a("code",[t._v("/resources/applicants/-;externalUserId=${userId}")])])],1)}),[],!1,null,null,null);s.default=n.exports}}]);