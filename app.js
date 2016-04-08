var mainApp = angular.module("MainApp", []);
mainApp.controller("menuController", function($scope) {
    $scope.menu = {
        nav_items: [
            {
                "name": "Dashboard",
                "submenu": [
                    { "name": "Home", file: "index1.html" },
                ]
            }, {
                "name": "UI Elements",
                "submenu": [
                    { "name": "General", file: "general.html" },
                    { "name": "Buttons", file: "buttons.html" },
                    { "name": "Panels", file: "panels.html" }
                ]
            }, {
                "name": "Components",
                "submenu": [
                    { "name": "Calendar", file: "calendar.html" },
                    { "name": "Gallery", file: "gallery.html" },
                    { "name": "Todo List", file: "todo_list.html" }
                ]
            }, {
                "name": "Extra Pages",
                "submenu": [
                    { "name": "Blank Page", file: "blank.html" },
                    { "name": "Login", file: "login.html" },
                    { "name": "Lock Screen", file: "lock_screen.html" }
                ]
            }, {
                "name": "Forms",
                "submenu": [
                    { "name": "Form Components", file: "form_component.html" }
                ]
            }, {
                "name": "Data Tables",
                "submenu": [
                    { "name": "Basic Table", file: "basic_table.html" },
                    { "name": "Responsive Table", file: "responsive_table.html" }
                ]
            }, {
                "name": "Charts",
                "submenu": [
                    { "name": "Morris", file: "morris.html" },
                    { "name": "Chartjs", file: "chartjs.html" }
                ]
            },
        ],
        
        getMenu : function(){
            var menuObject = $scope.menu;
            return menuObject.nav_items;
        }
    };
});