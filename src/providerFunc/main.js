// Provider functions that will be exposed to allow overriding of default $logProvider functionality

var enableLogging = function (flag) {
    enableGlobally = isBoolean(flag) ? flag : false;
};

var restrictLogMethods = function (arrMethods) {
    if (angular.isArray(arrMethods)) {
        // TODO: should do validation on this to ensure valid properties are passed in
        allowedMethods = arrMethods;
    }
};

var overrideLogPrefix = function (logPrefix) {
    if (angular.isFunction(logPrefix)) {
        // TODO : Validation of the function to ensure it's of the correct format etc
        // TODO : Might want to allow memoization of the default functionality and allow easy toggling of custom vs default
        getLogPrefix = logPrefix;
    }
};

var disableDefaultColors = function (flag) {
    useDefaultColors = (isBoolean(flag) && flag) ? false : true;
};

var setLogMethodColor = function(methodName, colorCss){
    if(itypeof(methodName) === 'string' && 
       defaultLogMethodColors.hasOwnProperty(methodName) && 
       validateColorCssString(colorCss)){
        
        defaultLogMethodColors[methodName] = colorCss;
    }
};