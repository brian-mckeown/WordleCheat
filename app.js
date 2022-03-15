var app = angular.module("wordleBotApp", []);
app.controller("mainController", function($scope, $http) {
    $scope.grayString = '';
    $scope.greenYellowString = '';
    $scope.greenOne = '';
    $scope.greenTwo = '';
    $scope.greenThree = '';
    $scope.greenFour = '';
    $scope.greenFive = '';
    $scope.yellowOne = '';
    $scope.yellowTwo = '';
    $scope.yellowThree = '';
    $scope.yellowFour = '';
    $scope.yellowFive = '';
    //begin comparisons
    $scope.getSuggestedWords = function() {
        //remove duplicates from masterlist - convert to set
        let masterSet = [...new Set(masterList)];
        //create array of 5 letter words
        var newArray = [];
        for (var i = 0; i < masterSet.length; i++) {
            if (masterSet[i].length === 5) {
                newArray.push(masterSet[i]);
            }
        }
        //clear large set for garbage collection
        masterSet = null;

        var grayArray = [...$scope.grayString.toLowerCase()];
        var greenYellowArray = [...$scope.greenYellowString.toLowerCase()];
        //compare gray/incorrect letters loop
        for (var i = 0; i < newArray.length; i++) {
            var charArray = [...newArray[i]];
            var readyToBreak = false;
            for (var x = 0; x < grayArray.length; x++) {
                for (var y = 0; y < charArray.length; y++) {
                    if (grayArray[x] === charArray[y]) {
                        newArray.splice(i, 1);
                        i--;
                        readyToBreak = true;
                        break;
                    }
                    if (readyToBreak) {
                        break;
                    }
                }
                if (readyToBreak) {
                    break;
                }
            }
        }
        //compare correct letters loop
        for (var i = 0; i < newArray.length; i++) {
            var charArray = [...newArray[i]];
            var readyToBreak = false;
            var score = 0;
            for (var x = 0; x < greenYellowArray.length; x++) {
                readyToBreak = false;
                for (var y = 0; y < charArray.length; y++) {
                    if (greenYellowArray[x] === charArray[y]) {
                        readyToBreak = true;
                        score++;
                        break;
                    }
                    if (readyToBreak) {
                        break;
                    }
                }
            }
            if (score !== greenYellowArray.length) {
                newArray.splice(i, 1);
                i--;
            }
        }
        // align green slot 1
        if ($scope.greenOne.toLowerCase() !== '') {
            for (var i = 0; i < newArray.length; i++) {
                if ($scope.greenOne.toLowerCase() !== newArray[i].charAt(0)) {
                    newArray.splice(i, 1);
                    i--;
                }
            }
        }
        // align green slot 2
        if ($scope.greenTwo.toLowerCase() !== '') {
            for (var i = 0; i < newArray.length; i++) {
                if ($scope.greenTwo.toLowerCase() !== newArray[i].charAt(1)) {
                    newArray.splice(i, 1);
                    i--;
                }
            }
        }
        // align green slot 3
        if ($scope.greenThree.toLowerCase() !== '') {
            for (var i = 0; i < newArray.length; i++) {
                if ($scope.greenThree.toLowerCase() !== newArray[i].charAt(2)) {
                    newArray.splice(i, 1);
                    i--;
                }
            }
        }
        // align green slot 4
        if ($scope.greenFour.toLowerCase() !== '') {
            for (var i = 0; i < newArray.length; i++) {
                if ($scope.greenFour.toLowerCase() !== newArray[i].charAt(3)) {
                    newArray.splice(i, 1);
                    i--;
                }
            }
        }
        // align green slot 5
        if ($scope.greenFive.toLowerCase() !== '') {
            for (var i = 0; i < newArray.length; i++) {
                if ($scope.greenFive.toLowerCase() !== newArray[i].charAt(4)) {
                    newArray.splice(i, 1);
                    i--;
                }
            }
        }
        // align yellow slot 1
        if ($scope.yellowOne.toLowerCase() !== '') {
            var letterArray = [...$scope.yellowOne.toLowerCase()];
            for (var i = 0; i < newArray.length; i++) {
                for (var x = 0; x < letterArray.length; x++) {
                    if (letterArray[x] === newArray[i].charAt(0)) {
                        newArray.splice(i, 1);
                        i--;
                        break;
                    }
                }
            }
        }
        // align yellow slot 2
        if ($scope.yellowTwo.toLowerCase() !== '') {
            var letterArray = [...$scope.yellowTwo.toLowerCase()];
            for (var i = 0; i < newArray.length; i++) {
                for (var x = 0; x < letterArray.length; x++) {
                    if (letterArray[x] === newArray[i].charAt(1)) {
                        newArray.splice(i, 1);
                        i--;
                        break;
                    }
                }
            }
        }
        // align yellow slot 3
        if ($scope.yellowThree.toLowerCase() !== '') {
            var letterArray = [...$scope.yellowThree.toLowerCase()];
            for (var i = 0; i < newArray.length; i++) {
                for (var x = 0; x < letterArray.length; x++) {
                    if (letterArray[x] === newArray[i].charAt(2)) {
                        newArray.splice(i, 1);
                        i--;
                        break;
                    }
                }
            }
        }
        // align yellow slot 4
        if ($scope.yellowFour.toLowerCase() !== '') {
            var letterArray = [...$scope.yellowFour.toLowerCase()];
            for (var i = 0; i < newArray.length; i++) {
                for (var x = 0; x < letterArray.length; x++) {
                    if (letterArray[x] === newArray[i].charAt(3)) {
                        newArray.splice(i, 1);
                        i--;
                        break;
                    }
                }
            }
        }
        // align yellow slot 5
        if ($scope.yellowFive.toLowerCase() !== '') {
            var letterArray = [...$scope.yellowFive.toLowerCase()];
            for (var i = 0; i < newArray.length; i++) {
                for (var x = 0; x < letterArray.length; x++) {
                    if (letterArray[x] === newArray[i].charAt(4)) {
                        newArray.splice(i, 1);
                        i--;
                        break;
                    }
                }
            }
        }
        //sort alphabetically then convert to string
        newArray.sort();
        $scope.finalArray = newArray.toString()
            .toUpperCase();
        $scope.buttonClicked = true;
    }
});