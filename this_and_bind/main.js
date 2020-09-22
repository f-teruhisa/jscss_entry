const obj = {
    first_name: 'Mafia',
    last_name: 'Code',
    printFullName: function () {
        console.log(this);
        // 変数に格納しておけば、違うタイミングで呼び出すことができる
        const _that = this;

        window.setTimeout(function () {
            console.log(this);
        // bindの引数に渡したオブジェクトが、レシーバとなる関数内でthisとして参照される
        }.bind({first_name: 'Taro'}));
    }
}

obj.printFullName();
