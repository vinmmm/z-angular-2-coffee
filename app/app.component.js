System.register(['angular2/core'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent() {
                }
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'my-app',
                        template: '<img src="img3/1-home.png"><img src="img3/2-Onboarding.png" alt="iphone coffee"><img src="img3/scroll-down.png" alt="scroll icon"><li class="phone"><img src="img3/3-Sign-In.png" alt="iphone coffee"></li><li class="phone"><img src="img3/4-Sign-Up.png" alt="iphone coffee"></li><li class="phone"><img src="img3/5-Vanilla-Latte.png" alt="iphone coffee"></li><li class="phone"><img src="img3/6-Choose-Items.png" alt="iphone coffee"></li><li class="phone"><img src="img3/7-Confirm-Order.png" alt="iphone coffee"></li><li class="phone"><img src="img3/8-Placing-Order.png" alt="iphone coffee"></li><li class="phone"><img src="img3/9-My-Orders.png" alt="iphone coffee"></li>'
                    }), 
                    __metadata('design:paramtypes', [])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
        }
    }
});
//# sourceMappingURL=app.component.js.map