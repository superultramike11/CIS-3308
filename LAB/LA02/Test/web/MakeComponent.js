function MakeComponent(iStockId, iQty) {
    var comp = document.createElement("div");
    comp.stockId = iStockId;
    var qty = iQty;
    comp.sStockId = function (newId) {
        comp.stockId = newId;
        show();
    };
    comp.aQty = function (newQty) {
        qty = qty + newQty;
        show();
    };
    function show() {
        comp.innerHTML = label();
    }
    var label = function () {
        return "id:" + comp.stockId + " qty:" + qty;
    };
    comp.print = function () {
        console.log(label());
    };
    show();
    return comp;
}