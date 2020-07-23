(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{250:function(t,s,e){"use strict";e.r(s);var a=e(16),n=Object(a.a)({},(function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"ios-sdk"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#ios-sdk"}},[t._v("#")]),t._v(" iOS SDK")]),t._v(" "),e("h2",{attrs:{id:"demo-project"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#demo-project"}},[t._v("#")]),t._v(" Demo Project")]),t._v(" "),e("p",[t._v("Demo project and its source code can be found "),e("a",{attrs:{href:"https://github.com/SumSubstance/KYC-iOS-Demo",target:"_blank",rel:"noopener noreferrer"}},[t._v("here"),e("OutboundLink")],1),t._v(".")]),t._v(" "),e("h2",{attrs:{id:"latest-release"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#latest-release"}},[t._v("#")]),t._v(" Latest release")]),t._v(" "),e("p",[e("strong",[t._v("Version 2.12")])]),t._v(" "),e("div",{staticClass:"warning custom-block"},[e("p",[t._v("In order to ensure that our SDK works smoothly on iOS 13 you have to update to version "),e("code",[t._v("2.10")]),t._v(" at least.")])]),t._v(" "),e("h2",{attrs:{id:"prerequisites"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#prerequisites"}},[t._v("#")]),t._v(" Prerequisites")]),t._v(" "),e("ul",[e("li",[t._v("iOS 9.3 or later")])]),t._v(" "),e("h3",{attrs:{id:"changelog"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#changelog"}},[t._v("#")]),t._v(" Changelog")]),t._v(" "),e("br"),t._v(" "),e("details",[e("summary",[t._v("2.x")]),t._v(" "),e("p",[e("ul",[e("li",[e("details",[e("summary",[t._v("2.12")]),t._v(" "),e("p",[e("ul",[e("li",[t._v("Liveness3D module could be used in FaceLiveness or FaceAuth mode")]),t._v(" "),e("li",[t._v("Fix for time displaying under iOS 11- when 12-hour format is selected")]),t._v(" "),e("li",[t._v("ColorConfig: fixed 'uploadProgressBarBackground' and introduced 'outgoingMessageStatusSending', 'outgoingMessageStatusRead'")]),t._v(" "),e("li",[t._v("ZoomCustomization: added 'zoomReadyScreenOvalFillColor' and 'zoomCustomization' options")])])])])]),t._v(" "),e("li",[e("details",[e("summary",[t._v("2.11.1")]),t._v(" "),e("p",[e("ul",[e("li",[t._v("Improvements of Liveness module's fallback-to-video policy")])])])])]),t._v(" "),e("li",[e("details",[e("summary",[t._v("2.11")]),t._v(" "),e("p",[e("ul",[e("li",[t._v("Stability improvements")]),t._v(" "),e("li",[t._v("Liveness3D module fix to make it perform correctly being opened from a non-fullscreen presenter")]),t._v(" "),e("li",[t._v("Optional ability to show Close button in Chat when all required documents are uploaded and when verification is finished")]),t._v(" "),e("li",[e("code",[t._v("engine.onActionEvent")]),t._v(" callback added")])])])])]),t._v(" "),e("li",[e("details",[e("summary",[t._v("2.10")]),t._v(" "),e("p",[e("ul",[e("li",[t._v("iOS 13 Dark Mode support (please revise your color scheme if you use the custom one)")]),t._v(" "),e("li",[t._v("Liveness3D module updated to be compatible with iOS 13 on some devices (the localization strings table has been changed, please revise)")])])])])]),t._v(" "),e("li",[e("details",[e("summary",[t._v("2.9.3")]),t._v(" "),e("p",[e("ul",[e("li",[t._v("Liveness3D module in Face Match mode")])])])])]),t._v(" "),e("li",[e("details",[e("summary",[t._v("2.9.2")]),t._v(" "),e("p",[e("ul",[e("li",[t._v("Ability to customize color theme of Liveness3D module")])])])])]),t._v(" "),e("li",[e("details",[e("summary",[t._v("2.9.1")]),t._v(" "),e("p",[e("ul",[e("li",[t._v("Localization support for Liveness3D module")])])])])]),t._v(" "),e("li",[e("details",[e("summary",[t._v("2.9")]),t._v(" "),e("p",[e("ul",[e("li",[t._v("Liveness3D API")]),t._v(" "),e("li",[t._v("Ability to customize preferredStatusBarStyle, Navigation Title color and Back Button indicator")]),t._v(" "),e("li",[t._v("Bugfixes")])])])])]),t._v(" "),e("li",[e("details",[e("summary",[t._v("2.8")]),t._v(" "),e("p",[e("ul",[e("li",[t._v("Brand new face liveness check")]),t._v(" "),e("li",[t._v("Deprecated UIWebView replaced with WKWebView")])])])])]),t._v(" "),e("li",[e("details",[e("summary",[t._v("2.7")]),t._v(" "),e("p",[e("ul",[e("li",[t._v('Report "Connecting" and "Wait for network" states')]),t._v(" "),e("li",[t._v("Bugfixes")])])])])])])])]),t._v(" "),e("h2",{attrs:{id:"sdk"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#sdk"}},[t._v("#")]),t._v(" SDK")]),t._v(" "),e("h3",{attrs:{id:"installation"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#installation"}},[t._v("#")]),t._v(" Installation")]),t._v(" "),e("p",[t._v("This framework ment to be installed via "),e("a",{attrs:{href:"https://cocoapods.org/",target:"_blank",rel:"noopener noreferrer"}},[t._v("cocoapods"),e("OutboundLink")],1),t._v(".")]),t._v(" "),e("ul",[e("li",[t._v("Add to your "),e("code",[t._v("Podfile")]),t._v(" specs repositories: "),e("code",[t._v("SumSubstance/Specs")]),t._v(", and public one - "),e("code",[t._v("CocoaPods/Specs")])]),t._v(" "),e("li",[t._v("Specify "),e("code",[t._v("use_frameworks!")]),t._v(" option")]),t._v(" "),e("li",[t._v("Add dependency "),e("code",[t._v("SumSubstanceKYC")]),t._v(" to your target")])]),t._v(" "),e("p",[t._v("Resulting "),e("code",[t._v("Podfile")]),t._v(" could look as follows:")]),t._v(" "),e("div",{staticClass:"language-ruby extra-class"},[e("pre",{pre:!0,attrs:{class:"language-ruby"}},[e("code",[t._v("platform "),e("span",{pre:!0,attrs:{class:"token symbol"}},[t._v(":ios")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'9.3'")]),t._v("\n\nsource "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'https://github.com/CocoaPods/Specs.git'")]),t._v("\nsource "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'https://github.com/SumSubstance/Specs.git'")]),t._v("\n\nuse_frameworks"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),t._v("\n\ntarget "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'MyAwesomeApp'")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("do")]),t._v("\n\n  pod "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'SumSubstanceKYC'")]),t._v("\n\n  "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# any other dependencies")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("end")]),t._v("\n")])])]),e("ul",[e("li",[t._v("Run "),e("code",[t._v("pod install --repo-update")])])]),t._v(" "),e("div",{staticClass:"warning custom-block"},[e("p",[t._v("If for some reasons it's impossible for your project to apply "),e("code",[t._v("use_frameworks!")]),t._v(" option, then there is an alternative way that would install all the required dependencies as precompiled dynamic libraries - just put "),e("code",[t._v("pod 'SumSubstanceKYC.Frameworks'")]),t._v(" instead of "),e("code",[t._v("pod 'SumSubstanceKYC'")]),t._v(" into the "),e("code",[t._v("Podfile")]),t._v(".")])]),t._v(" "),e("h3",{attrs:{id:"permissions"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#permissions"}},[t._v("#")]),t._v(" Permissions")]),t._v(" "),e("p",[t._v("The framework will ask to have access to the camera and microphone, so it's required to have the corresponding usage descriptions in the application's "),e("code",[t._v("Info.plist")]),t._v(" file. Something like this:")]),t._v(" "),e("div",{staticClass:"language-xml extra-class"},[e("pre",{pre:!0,attrs:{class:"language-xml"}},[e("code",[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("key")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("NSCameraUsageDescription"),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("key")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("string")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("Let us make a photo"),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("string")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("key")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("NSMicrophoneUsageDescription"),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("key")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("string")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("Time to record video"),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("string")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),e("h3",{attrs:{id:"usage"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#usage"}},[t._v("#")]),t._v(" Usage")]),t._v(" "),e("p",[t._v("Before you initialize our SDK you need to do two things:")]),t._v(" "),e("ul",[e("li",[t._v("Create an applicant on your backend and note its "),e("code",[t._v("applicantId")])]),t._v(" "),e("li",[t._v("A method for generating a "),e("em",[t._v("mobile SDK token")]),t._v(" on your backend")])]),t._v(" "),e("div",{staticClass:"danger custom-block"},[e("p",[t._v("Don't store your API credentials or auth token in your app code.")])]),t._v(" "),e("p",[t._v("Getting this data is described "),e("router-link",{attrs:{to:"/msdk/#backend-routines"}},[t._v("here")]),t._v(".")],1),t._v(" "),e("p",[t._v("To instantiate the framework call:")]),t._v(" "),e("div",{staticClass:"language-objectivec extra-class"},[e("pre",{pre:!0,attrs:{class:"language-objectivec"}},[e("code",[t._v("SSEngine "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("engine "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("SSFacade setupForApplicant"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("applicantID\n                                     withToken"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("authToken\n                                        locale"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("locale\n                                  supportEmail"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("supportEmail\n                                       baseUrl"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("baseUrl\n                                   colorConfig"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("colorConfigOrNil\n                                   imageConfig"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("imageConfigOrNil"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),e("p",[t._v("where")]),t._v(" "),e("ul",[e("li",[e("code",[t._v("applicantID")]),t._v(" - your applicant identifier")]),t._v(" "),e("li",[e("code",[t._v("authToken")]),t._v(" - your Sum&Sub auth token")]),t._v(" "),e("li",[e("code",[t._v("locale")]),t._v(" - user locale (preferably "),e("code",[t._v("NSLocale.currentLocale.localeIdentifier")]),t._v(", but you can use any)")]),t._v(" "),e("li",[e("code",[t._v("baseUrl")]),t._v(" - "),e("code",[t._v("test-msdk.sumsub.com")]),t._v(" for test environment or "),e("code",[t._v("msdk.sumsub.com")]),t._v(" for production one")]),t._v(" "),e("li",[e("code",[t._v("colorConfigOrNil")]),t._v(" - nil or subclass of "),e("code",[t._v("KYCColorConfig")]),t._v(" (for color pallet customization)")]),t._v(" "),e("li",[e("code",[t._v("imageConfigOrNil")]),t._v(" - nil or subclass of "),e("code",[t._v("KYCImageConfig")]),t._v(" (for icons customization)")])]),t._v(" "),e("p",[t._v("Then you should:")]),t._v(" "),e("ul",[e("li",[t._v("Connect to remote - "),e("code",[t._v("[engine connectWithExpirationHandler:verificationResultHandler:]")])]),t._v(" "),e("li",[t._v("Create KYC UI - "),e("code",[t._v("[SSFacade getChatControllerWithAttributedTitle:titleOrNil]")])]),t._v(" "),e("li",[t._v("Refresh auth token (when needed) - "),e("code",[t._v("engine.refreshToken = newToken")])])]),t._v(" "),e("h2",{attrs:{id:"liveness3d-module"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#liveness3d-module"}},[t._v("#")]),t._v(" Liveness3D module")]),t._v(" "),e("h3",{attrs:{id:"installation-2"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#installation-2"}},[t._v("#")]),t._v(" Installation")]),t._v(" "),e("p",[t._v("This framework is meant to be installed via "),e("a",{attrs:{href:"https://cocoapods.org/",target:"_blank",rel:"noopener noreferrer"}},[t._v("cocoapods"),e("OutboundLink")],1),t._v(".")]),t._v(" "),e("ul",[e("li",[t._v("Add to your "),e("code",[t._v("Podfile")]),t._v(" specs repositories: "),e("code",[t._v("SumSubstance/Specs")]),t._v(", and public one - "),e("code",[t._v("CocoaPods/Specs")])]),t._v(" "),e("li",[t._v("Specify "),e("code",[t._v("use_frameworks!")]),t._v(" option")]),t._v(" "),e("li",[t._v("Add dependency "),e("code",[t._v("SumSubstanceKYC/Liveness3D")]),t._v(" to your target")])]),t._v(" "),e("p",[t._v("Resulting "),e("code",[t._v("Podfile")]),t._v(" could look as follows:")]),t._v(" "),e("div",{staticClass:"language-ruby extra-class"},[e("pre",{pre:!0,attrs:{class:"language-ruby"}},[e("code",[t._v("platform "),e("span",{pre:!0,attrs:{class:"token symbol"}},[t._v(":ios")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'9.3'")]),t._v("\n\nsource "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'https://github.com/CocoaPods/Specs.git'")]),t._v("\nsource "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'https://github.com/SumSubstance/Specs.git'")]),t._v("\n\nuse_frameworks"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),t._v("\n\ntarget "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'MyAwesomeApp'")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("do")]),t._v("\n\n  pod "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'SumSubstanceKYC/Liveness3D'")]),t._v("\n\n  "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# any other dependencies")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("end")]),t._v("\n")])])]),e("ul",[e("li",[t._v("Run "),e("code",[t._v("pod install --repo-update")])])]),t._v(" "),e("h3",{attrs:{id:"usage-2"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#usage-2"}},[t._v("#")]),t._v(" Usage")]),t._v(" "),e("p",[t._v("Instantiate the module and pass handlers")]),t._v(" "),e("div",{staticClass:"language-objectivec extra-class"},[e("pre",{pre:!0,attrs:{class:"language-objectivec"}},[e("code",[t._v("SSLiveness3D "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("liveness3D "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("SSLiveness3D"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("alloc initWithMode"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("mode\n                         baseUrl"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("baseUrl\n                     applicantId"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("applicantId\n                           token"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("token\n                          locale"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("locale\n          tokenExpirationHandler"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("^")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("^")]),t._v(" _Nonnull completionHandler"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("NSString "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" _Nullable"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n     "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// get new token then call completionHandler")]),t._v("\n     "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("getNewToken")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("^")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("NSString "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("token"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("completionHandler")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("token"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n     "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n     \n "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" completionHandler"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("^")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("UIViewController "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" _Nonnull controller"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" SSLiveness3DStatus status"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" SSLiveness3DResult "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" _Nullable result"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n     \n     "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// process status then update UI accordingly")]),t._v("\n\n     "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// possible statuses are:")]),t._v("\n     "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// SSLiveness3DStatus_Cancelled,")]),t._v("\n     "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// SSLiveness3DStatus_InitializationFailed,")]),t._v("\n     "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// SSLiveness3DStatus_CameraPermissionDenied,")]),t._v("\n     "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// SSLiveness3DStatus_TokenIsInvalid,")]),t._v("\n     "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// SSLiveness3DStatus_FaceMismatched,")]),t._v("\n     "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// SSLiveness3DStatus_VerificationPassedSuccessfully,")]),t._v("\n\n     "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("controller dismissViewControllerAnimated"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("YES completion"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("nil"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),e("p",[t._v("Where")]),t._v(" "),e("ul",[e("li",[e("code",[t._v("mode")]),t._v(" - "),e("code",[t._v("SSLiveness3DMode_FaceAuth")]),t._v(" or "),e("code",[t._v("SSLiveness3DMode_FaceLiveness")]),t._v(" depend on the aims of the module usage")]),t._v(" "),e("li",[e("code",[t._v("baseUrl")]),t._v(" - "),e("code",[t._v("test-msdk.sumsub.com")]),t._v(" for test environment or "),e("code",[t._v("msdk.sumsub.com")]),t._v(" for production one")]),t._v(" "),e("li",[e("code",[t._v("applicantId")]),t._v(" - identifier of the applicant to check against")]),t._v(" "),e("li",[e("code",[t._v("token")]),t._v(" - your Sum&Sub auth token")]),t._v(" "),e("li",[e("code",[t._v("locale")]),t._v(" - user locale (preferably "),e("code",[t._v("NSLocale.currentLocale.localeIdentifier")]),t._v(", but you can use any)")]),t._v(" "),e("li",[t._v("optionally one can use "),e("code",[t._v("liveness3D.theme")]),t._v(" property to assign a customized set of colors")])]),t._v(" "),e("p",[t._v("In FaceAuth mode, upon success use "),e("code",[t._v("result.applicantActionId")]),t._v(" as "),e("code",[t._v("#{actionId}")]),t._v(" to check the results against the server with the "),e("a",{attrs:{href:"https://developers.sumsub.com/applicant-actions/#result",target:"_blank",rel:"noopener noreferrer"}},[t._v("corresponding api call"),e("OutboundLink")],1),t._v(".")]),t._v(" "),e("p",[t._v("Note please that being initialized once the overall process is looped until cancelled or completes successfully. So normally you never got "),e("code",[t._v("SSLiveness3DStatus_FaceMismatched")]),t._v(" completion status. Use the following to change this behaviour.")]),t._v(" "),e("div",{staticClass:"language-objc extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("liveness3D.shouldCompleteOnFaceMismatch = YES;\n")])])]),e("p",[t._v("Also there is an optional way to get the server response right after it arrives from the server. That allows you to process the result asynchronously and possibly cancel the further processing.")]),t._v(" "),e("div",{staticClass:"language-objectivec extra-class"},[e("pre",{pre:!0,attrs:{class:"language-objectivec"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// The block must call `completionHandler` provided with a boolean parameter. Passing `YES` stops the further processing.")]),t._v("\n\nliveness3D"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("resultHandler "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("^")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("SSLiveness3DResult "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" _Nonnull result"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("^")]),t._v(" _Nonnull completionHandler"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("BOOL"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  \n    "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("NSLog")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('@"Coordinator: Liveness3D got result from server: %@"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" result"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    \n    "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("completionHandler")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("NO"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n")])])]),e("p",[t._v("Then create and display UI")]),t._v(" "),e("div",{staticClass:"language-objectivec extra-class"},[e("pre",{pre:!0,attrs:{class:"language-objectivec"}},[e("code",[t._v("UIViewController "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("vc "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("liveness3D getController"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\nvc"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("modalTransitionStyle "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" UIModalTransitionStyleCrossDissolve"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("self")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("navigationController presentViewController"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("vc animated"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("YES completion"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("nil"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),e("h3",{attrs:{id:"customization"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#customization"}},[t._v("#")]),t._v(" Customization")]),t._v(" "),e("p",[t._v("Texts within the Liveness3D module can be customized and/or localized with "),e("a",{attrs:{href:"https://github.com/SumSubstance/KYC-iOS-Release/blob/master/2.11.1/Zoom.strings",target:"_blank",rel:"noopener noreferrer"}},[t._v("Zoom.strings"),e("OutboundLink")],1),t._v(" file. Add it to your project, then modify/localize as required.")]),t._v(" "),e("p",[t._v("Colors could be adjusted by assigning "),e("code",[t._v("liveness3D.theme")]),t._v(" an object that conforms to "),e("code",[t._v("SSLiveness3DThemeProtocol")])])])}),[],!1,null,null,null);s.default=n.exports}}]);