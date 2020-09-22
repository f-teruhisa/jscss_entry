const obj = {
    first_name: 'Mafia',
    last_name: 'Code',
    printFullName: function() {
      // thisはオブジェクト自体を参照するキーワード
        console.log(this.first_name);

        const fn = function() {
          // thisは参照するタイミングで違う値を取る
          // ここではwindowオブジェクトが参照される
          // thisはひとつ海藻が上のクラスのオブジェクトが返される
            console.log(this);
        };
        window.setTimeout(fn);
    }
}

class MyObj {
    constructor() {
        this.first_name = 'Mafia';
        this.last_name = 'Code';
    }

    printFullName() {
        console.log(this.first_name);
        const fn = function() {
            console.log(this);
        };
        window.setTimeout(fn)
    }
}

const obj2 = new MyObj();


obj.printFullName();
obj2.printFullName();
