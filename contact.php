<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0" />
    <title>Praktijk Cisca Trapman - Contact</title>
    <link rel="stylesheet" href="./css/tailwindcss.css" media="all" />
</head>

<body>
    <?php include_once("./inc/header.html") ?>
    <?php include_once("./inc/slider.html") ?>
    <section class="px-4 py-6 space-y-10 container mx-auto max-w-screen-lg">
        <h1 class="text-3xl font-semibold">Neem contact op!</h1>
        <iframe class="w-full h-64 overflow-hidden"
            src="https://www.openstreetmap.org/export/embed.html?bbox=4.683673381805421%2C51.82886072567653%2C4.686996638774873%2C51.83037578188974&layer=mapnik&marker=51.829618260153644%2C4.685336351394653"
            frameborder="0"></iframe>
        <div class="pb-10 grid md:grid-cols-2">
            <div class="space-y-2 text-lg">
                <p>Praktijk Cisca Trapman</p>
                <p>Constantijn Huygenslaan 43</p>
                <p>3351 XA Papendrecht</p>
                <p>Telefoon: <a href="0643206221">06 - 43 20 62 21</a></p>
            </div>
            <div class="mt-6 md:mt-0">
                <form class="space-y-4" action="">
                    <label for="Dhr">
                        Dhr.
                    </label>
                    <input class="mr-2" type="radio" id="Dhr" name="aanhef" value="Dhr.">
                    <label for="Mevr">
                        Mevr.
                    </label>
                    <input type="radio" name="aanhef" value="Mevr.">
                    <div class="space-y-4 flex flex-col">
                        <input class="px-4 py-2 rounded border appearance-none" name="voornaam"
                            placeholder="Voornaam" />
                        <input class="px-4 py-2 rounded border appearance-none" name="tussenvoegsel"
                            placeholder="Tussenvoegsel" />
                        <input class="px-4 py-2 rounded border appearance-none" name="achternaam"
                            placeholder="Achternaam" />
                        <input class="px-4 py-2 rounded border appearance-none" name="telefoonnummer"
                            placeholder="Telefoonnummer" />
                        <input class="px-4 py-2 rounded border appearance-none" name="email" placeholder="Emailadres" />
                        <textarea class="px-4 py-2 rounded border appearance-none" name="opmerking" rows="5"
                            placeholder="Opmerking"></textarea>
                        <button class="px-4 py-2 rounded border font-semibold" type="submit">Verzend</button>
                    </div>
                </form>
            </div>
        </div>
    </section>
    <?php include_once("./inc/footer.html") ?>
    <script src="https://code.jquery.com/jquery-3.5.1.min.js"
        integrity="sha256-9/aliU8dGd2tb6OSsuzixeV4y/faTqgFtohetphbbj0=" crossorigin="anonymous"></script>
    <script src="./js/app.js"></script>
</body>

</html>