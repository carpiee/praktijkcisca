<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0" />
    <title>Praktijkcisca</title>
    <link rel="stylesheet" href="./css/tailwindcss.css" media="all" />
</head>

<body>
    <?php include_once("./inc/header.html") ?>

    <?php include_once("./inc/slider.html") ?>

    <section id="Over-Cisca-Trapman" class="py-10 bg_brand_blue">
        <div class="px-4 md:space-x-20 md:flex container mx-auto max-w-screen-lg">
            <img class="md:-mb-10 mb-0 sm:mx-0 mx-auto h-48 mt-auto flex-shrink-0" src="./img/cisca.png"
                alt="praktijk foto" />
            <div class="max-w-lg text-white">
                <h1 class="text-3xl font-semibold">Over Cisca Trapman</h1>
                <p class="pt-2">
                    Ik ben Cisca Trapman, getrouwd en moeder van drie kinderen.
                </p>
                <p class="pt-6">
                    Tot 2016 ben ik met veel plezier werkzaam geweest als leerkracht in
                    het basisonderwijs. Vanuit mijn wens om kinderen met leer- en/of
                    gedragsproblemen extra ondersteuning te kunnen bieden, ben ik in
                    2012 ook mijn eigen praktijk begonnen.
                </p>

                <a class="block mt-4 font-semibold" href="wie-ben-ik">Lees meer...</a>
            </div>
        </div>
    </section>
    <footer class="bg-white">
        <div class="px-4 py-2 text-center text-sm">
            © Praktijk Cisca Trapman - Alle Rechten Voorbehouden. Privacyverklaring
        </div>
        <div class="flex w-full">
            <div class="flex-grow w-20 h-5 bg_brand_purple"></div>
            <div class="flex-grow w-20 h-5 bg_brand_orange"></div>
            <div class="flex-grow w-20 h-5 bg_brand_green"></div>
            <div class="flex-grow w-20 h-5 bg_brand_blue"></div>
        </div>
    </footer>
    <script defer src="./js/app.js"></script>
</body>

</html>