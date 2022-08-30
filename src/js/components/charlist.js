document.addEventListener("DOMContentLoaded", () => {
    var options = {
        width: 860,
        height: 270,
    };
    // Инициализируем линейный график через контейнер с ID chart1
    new Chartist.Line(
        "#chart1",
        {
            labels: [
                2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021,
            ],
            series: [
                {
                    name: "series-1",
                    data: [110, 192, 105, 212, 161, 140, 200, 160, 15, 181],
                },
                {
                    name: "series-2",
                    data: [21, 112, 139, 212, 52, 168, 128, 21, 19, 150],
                },
            ],
        },
        // Устанавливаем несколько опцией, меняя настройки по умолчанию
        (options = {
            // не отрисовывать точки линейного графика
            showPoint: true,
            // Отключение сглаживания линий
            lineSmooth: false,
            showArea: true,
            // Настройки X-оси
            axisX: {
                // Отключаем сетку для этой оси
                //showGrid: false,
                // и не показываем метки
                showLabel: true,
            },
            // настройки Y-оси
            axisY: {
                // Смещение от меток
                // offset: 60,
                // Функция интерполяции метки позволяет менять значение метки,
                // в текущем примере появляются миллионы "m".
                labelInterpolationFnc: function (value) {
                    return value;
                },
            },
        })
    );
});
