const template = document.createElement('template');

template.innerHTML = `
<style>
        .iti__flag-container {
            color: #000;
        }

        body, #formwork {
            color: #fff;
            font: 16px "Open Sans", Helvetica, Arial, sans-serif;
            line-height: 1;
            position: relative;
        }

        .form-group {
            position: relative;
            margin-bottom: 15px;
        }

        label.control-label {
            display: none;
        }

        .form-control::-webkit-input-placeholder {
            color: rgba(0, 0, 0, 0.54);
            opacity: 1;
        }

        .form-control::-moz-placeholder {
            color: rgba(0, 0, 0, 0.54);
            opacity: 1;
        }

        .form-control:-moz-placeholder {
            color: rgba(0, 0, 0, 0.54);
            opacity: 1;
        }

        .form-control:-ms-input-placeholder {
            color: rgba(0, 0, 0, 0.54);
            opacity: 1;
        }

        .form-control:input-placeholder {
            color: rgba(0, 0, 0, 0.54);
            opacity: 1;
        }

        .form-control:focus::-webkit-input-placeholder {
            color: transparent;
        }

        .form-control:focus::-moz-placeholder {
            color: transparent;
        }

        .form-control:focus:-moz-placeholder {
            color: transparent;
        }

        .form-control:focus:-ms-input-placeholder {
            color: transparent;
        }

        input.form-control,
        select.form-control {
            box-sizing: border-box;
            display: block;
            width: 100%;
            height: 45px;
            padding: 6px 12px;
            font-size: 14px;
            line-height: 1.42857;
            color: #555;
            vertical-align: middle;
            background-color: #fff;
            background-image: none;
            border: 1px solid #ccc;
            border-radius: 4px;
            -webkit-box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075);
            box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075);
            -webkit-transition: border-color ease-in-out 0.15s,
                box-shadow ease-in-out 0.15s;
            transition: border-color ease-in-out 0.15s, box-shadow ease-in-out 0.15s;
        }

        input.form-control[type="text"] {
            text-transform: capitalize;
        }

        #country {
            display: none;
        }

        .intl-tel-input input,
        .intl-tel-input input[type="text"],
        .intl-tel-input input[type="tel"] {
            position: relative;
            z-index: 0;
            margin-top: 0 !important;
            margin-bottom: 15px !important;
            padding-right: 0;
            margin-right: 0;
        }

        .checkbox {
            display: none;
        }

        #formwork .btn {
            font-family: Montserrat, sans-serif;
            display: block;
            line-height: 1.2;
            height: auto;
            text-align: center;
            white-space: nowrap;
            vertical-align: middle;
            -ms-touch-action: manipulation;
            touch-action: manipulation;
            cursor: pointer;
            -webkit-user-select: none;
            -moz-user-select: none;
            -ms-user-select: none;
            user-select: none;
            background-image: none;
            border: 1px solid transparent;
            border-radius: 28px;
            color: #fff;
            min-height: 50px;
            width: 100%;
            background: #00b61f;
            font-weight: 500;
            font-size: 1.5em;
            border-color: #00b61f;
            box-shadow: none;
            margin-top: 20px;
        }

        #formwork .btn:hover {
            background-color: #00b61f;
            border-color: #00b61f;
        }

        #formwork .btn:active:hover {
            background-color: #00b61f;
            border-color: #00b61f;
            outline: 0;
        }

        .btn:after {
            content: "Get Started Now";
        }

        .btn span {
            display: none;
        }

        .agree-checkbox a {
            color: #fff;
        }

        #formwork>div:nth-child(1) {
            display: flex;
        }

        #formwork>div:nth-child(1)>div:nth-child(2) {
            width: 100%;
        }

        #formwork>div:nth-child(1)>div:nth-child(1) {
            width: 100%;
            margin-right: 7px;
        }

        .iti.iti--allow-dropdown {
            width: 100%;
        }
    </style>        
    <div id="formwork" style="width: 50%;background: #081047">
            <form style="padding: 1rem 2rem 2rem 2rem" action="#" method="post" class="register-form">
                <div class="row">
                    <div class="col-md-6 form-group">
                        <label class="control-label">First Name</label>
                        <input type="text" class="form-control form-input" id="fname" name="firstname" value=""
                            placeholder="First Name" required="" />
                    </div>
                    <div class="col-md-6 form-group">
                        <label class="control-label">Last Name</label>
                        <input type="text" class="form-control form-input" id="lname" name="lastname" value=""
                            placeholder="Last Name" required="" />
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-12 form-group">
                        <label class="control-label">Email</label>
                        <input type="email" class="form-control" id="email" title="mail@domain.ext" placeholder="Email"
                            required="" name="email" />
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-12 form-group">
                        <label class="control-label">Phone</label>
                        <input type="text" class="form-control" id="email" name="phone" required="" />
                    </div>
                </div>
                <div id="privacy-container" class="checkbox-wrap valid">
                    <input type="checkbox" name="politics" id="politics" checked />
                    <label for="politics">I аgree to
                        <a target="_blank" href="/policy.html" class="alterlink">Privacy Policy</a>
                    </label>
                </div>
                <div class="checkbox-wrap valid">
                    <input type="checkbox" name="over" id="over-77444" checked />
                    <label for="over-77444">I am over 18 years</label>
                </div>
                <button type="submit" name="submitBtn"
                    class="btn_send buttonSbmt btn btn-danger btn-lg tradeBtn btn-submit">
                    <span class="b_icon"></span>
                    <span>Get Started</span>
                </button>
            </form>
        </div>

    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.8/css/intlTelInput.css" />
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/toastr.js/latest/toastr.css" />
`;

import 'https://code.jquery.com/jquery-3.6.0.js';
import 'https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.8/js/intlTelInput.min.js';
import 'https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.8/js/utils.min.js';
import 'https://cdnjs.cloudflare.com/ajax/libs/toastr.js/latest/toastr.min.js';

class RegisterForm extends HTMLElement {
    constructor() {
        super();
        // this._shadowRoot = this.attachShadow({ mode: 'open' });
        // this._shadowRoot.appendChild(template.content.cloneNode(true));
        this.appendChild(template.content.cloneNode(true));
    }

    connectedCallback() {
        console.log('[CONNECTED]');

        console.log('[SOURCE]', this.source);

        console.log('[apiurl]', this.apiurl);

        this.initiateIntlTelInput();
        this.handleForm();

        console.log(this.privacyHref);

        if (this.privacyHref !== null) {
            this.querySelector('#formwork #privacy-container .alterlink').setAttribute('href', this.privacyHref);
        } else {
            this.querySelector('#formwork #privacy-container').remove();
        }
    }

    get source() {
        return this.getAttribute('source');
    }

    get apiurl() {
        return this.getAttribute('apiurl');
    }

    get privacyHref() {
        return this.getAttribute('privacy-href');
    }

    get redirectHref() {
        return this.getAttribute('redirect-href');
    }

    get submitButtonTitle() {
        let title = this.getAttribute('submit-button-title');

        if (title === null) {
            title = 'Get Started Now';
        }

        return title;
    }

    initiateIntlTelInput() {
        window.addEventListener("load", function () {
            window.intlTelInputGlobals.windowLoaded = true;
        });

        function runIntlTelInputAndGeoIp(element) {
            return intlTelInput(element, {
                customPlaceholder: function (
                    selectedCountryPlaceholder,
                    selectedCountryData
                ) {
                    return selectedCountryPlaceholder
                        .replace(/ /g, "")
                        .replace(/-/g, "")
                        .replace(/\(/g, "")
                        .replace(/\)/g, "");
                },
                autoHideDialCode: false,
                nationalMode: false,
                separateDialCode: true,
                autoPlaceholder: "aggressive",
                placeholderNumberType: "MOBILE",
                initialCountry: "auto",
                utilsScript:
                    "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.8/js/utils.min.js",
                geoIpLookup: function (success, failure) {
                    $.get("https://ipapi.co/json").always(function (resp) {
                        var countryCode = resp && resp.country ? resp.country : "us";
                        success(countryCode);
                    });
                },
            });
        }
    }

    handleForm() {
        let component = this;
        window.addEventListener("load", function () {
            window.intlTelInputGlobals.windowLoaded = true;
        });

        function runIntlTelInputAndGeoIp(element) {
            return intlTelInput(element, {
                customPlaceholder: function (
                    selectedCountryPlaceholder,
                    selectedCountryData
                ) {
                    return selectedCountryPlaceholder
                        .replace(/ /g, "")
                        .replace(/-/g, "")
                        .replace(/\(/g, "")
                        .replace(/\)/g, "");
                },
                autoHideDialCode: false,
                nationalMode: false,
                separateDialCode: true,
                autoPlaceholder: "aggressive",
                placeholderNumberType: "MOBILE",
                initialCountry: "auto",
                utilsScript:
                    "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.8/js/utils.min.js",
                geoIpLookup: function (success, failure) {
                    $.get("https://ipapi.co/json").always(function (resp) {
                        var countryCode = resp && resp.country ? resp.country : "us";
                        console.log(countryCode);
                        success(countryCode);
                    });
                },
            });
        }

        var getFbpUrl = function getFbpUrl(name) {
            var urlParams = new URLSearchParams(window.location.search);
            var param = urlParams.get(name);
            return param;
        };
        var getCookie = function getCookie(name) {
            var matches = document.cookie.match(
                new RegExp(
                    "(?:^|; )" +
                    name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, "\\$1") +
                    "=([^;]*)"
                )
            );
            return matches ? decodeURIComponent(matches[1]) : undefined;
        };
        var fbpParam = getFbpUrl("fbp");
        document.cookie = "fbp=" + fbpParam + ";path= /";
        var validateEmail = function validateEmail(email) {
            var re = /\S+@\S+\.\S+/;
            return re.test(email);
        };
        var isName = function isName(name) {
            var re = /^[A-Za-zа-яёА-ЯЁЩЬЮЯҐЄІЇа-щьюяґєі \s]+$/;
            return re.test(name);
        };

        $("form").each(function () {
            let phoneInt = runIntlTelInputAndGeoIp(
                $(this).find("input[name='phone']")[0]
            );
            $(this).submit(function (e) {
                e.preventDefault();
                $(this).find("div.error").removeClass("error");
                let OK = true;
                $(this)
                    .find("input")
                    .each(function () {
                        let input = $(this);
                        let val = input.val();
                        let el = input.parent()[0];
                        if (!val) {
                            $(el).addClass("error");
                            OK = false;
                        }
                    });
                let emailVal = $(this).find("input[name=email]").val();
                if (emailVal) {
                    if (!validateEmail(emailVal)) {
                        let el = $(this).find("input[name=email]").parent()[0];
                        $(el).addClass("error");
                        OK = false;
                    }
                }
                let firstnameVal = $(this).find("input[name=firstname]").val();
                let lastnameVal = $(this).find("input[name=lastname]").val();
                if (firstnameVal) {
                    if (!isName(firstnameVal)) {
                        let el = $(this).find("input[name=firstname]").parent()[0];
                        $(el).addClass("error");
                        OK = false;
                    }
                }
                if (lastnameVal) {
                    if (!isName(lastnameVal)) {
                        let el = $(this).find("input[name=lastname]").parent()[0];
                        $(el).addClass("error");
                        OK = false;
                    }
                }
                var errorMap = [
                    "Invalid number",
                    "Invalid country code",
                    "Too short phone number",
                    "Too long phone number",
                    "Invalid phone number",
                ];
                let phoneVal = phoneInt.getNumber(
                    intlTelInputUtils.numberFormat.E164
                );
                if (!phoneInt.isValidNumber()) {
                    toastr.error(errorMap[phoneInt.getValidationError()]);
                    OK = false;
                }
                if (OK) {
                    let url = "https://primeapi.telexsale.com/v1/webhooks/trackbox/lead";
                    if (component.apiurl) {
                        url = component.apiurl;
                    }

                    let source = window.location.host;

                    if (component.source) {
                        source = component.source;
                    }

                    $.ajax({
                        url: url,
                        type: "POST",
                        data: {
                            firstName: firstnameVal,
                            lastName: lastnameVal,
                            email: emailVal,
                            phone: phoneVal,
                            source: source,
                        },
                        dataType: "json",
                        success: function (data) {
                            if (data.success) {
                                let redirectHref = "registered.html";
                                if (component.redirectHref) {
                                    redirectHref = component.redirectHref;
                                }
                                window.location = redirectHref;
                            } else {
                                if (data.success == false) {
                                    toastr.error(data.message, "Error!");
                                } else {
                                    toastr.error("", "Error!");
                                }
                            }
                        },
                        error: function (data) {
                            let message = data.responseJSON.message;
                            toastr.error(`${message ? message : ""}`, "Error!");
                        },
                    });
                }
            });
        });
    }


}

window.customElements.define('register-form', RegisterForm);