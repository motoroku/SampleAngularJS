(function (global) {
    var colorList = [

        {
            "id": "sakurairo",
            "name": "桜色",
            "kana": "さくらいろ",
            "color": "#fef4f4",
            "number": 0
        },
        {
            "id": "sakurairo",
            "name": "黄金",
            "kana": "こがね",
            "color": "e6b422",
            "number": 1
        },
        {
            "id": "sakurairo",
            "name": "櫨染",
            "kana": "はじぞめ",
            "color": "#d9a62e",
            "number": 2
        },
        {
            "id": "akairo",
            "name": "赤色",
            "kana": "あかいろ",
            "color": "#ff0000",
            "number": 3
        }
    ];
    global.colorList = colorList;

    var item = [
        {
            "id": "akairo",
            "name": "赤色",
            "kana": "あかいろ",
            "color": "#ff0000",
            "number": 3
        }
    ]
    global.item = item;

    var department = [
        {
            "id": 1,
            "level": 1,
            "name": "top1",
            "upperId": null
        },
        {
            "id": 2,
            "level": 1,
            "name": "top2",
            "upperId": null
        },
        {
            "id": 3,
            "level": 1,
            "name": "top3",
            "upperId": null
        },
        {
            "id": 4,
            "level": 2,
            "name": "middle1",
            "upperId": 1
        },
        {
            "id": 5,
            "level": 2,
            "name": "middle2",
            "upperId": 2
        },
        {
            "id": 6,
            "level": 3,
            "name": "bottom1",
            "upperId": 4
        },
        {
            "id": 7,
            "level": 3,
            "name": "bottom2",
            "upperId": 3
        },
        {
            "id": 8,
            "level": 3,
            "name": "bottom3",
            "upperId": null
        }
    ]
    global.department = department;

})(window);