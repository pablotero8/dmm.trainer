<!DOCTYPE HTML>
<html lang="en">
    <head>
        <link href="https://fonts.googleapis.com/css2?family=Josefin+Slab:wght@400;700&display=swap" rel="stylesheet">
        <title>DMM TRAINER</title>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no" />
        
        <style>
            /* --- SISTEMA VISUAL DMM TRAINER: WHITE EDITION V2 --- */
            :root {
                --bg-bone: #f9f7f2; /* Blanco hueso elegante */
                --text-dark: #1a1a1a;
                --accent-dark: #000000;
                --transition: all 0.5s cubic-bezier(0.16, 1, 0.3, 1);
            }

            body {
                background-color: var(--bg-bone);
                color: var(--text-dark);
                font-family: 'Josefin Slab', serif;
                margin: 0;
                overflow-x: hidden;
            }

            /* Header Superior */
            #custom-header {
                background: rgba(249, 247, 242, 0.9);
                backdrop-filter: blur(10px);
                padding: 15px 5%;
                display: flex;
                justify-content: space-between;
                align-items: center;
                position: fixed;
                top: 0; width: 100%; z-index: 1000;
                box-sizing: border-box;
                border-bottom: 1px solid #e0ddd5;
            }

            .logo-img { height: 40px; filter: invert(1); }
            .header-text { font-weight: 700; letter-spacing: 2px; color: var(--text-dark); }

            /* Intro Section */
            #intro {
                height: 100vh;
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                text-align: center;
                position: relative;
                color: white;
                /* Asegúrate de que la ruta de la imagen de fondo sea correcta */
                background-image: url('images/bg-intro.jpg'); 
                background-size: cover;
                background-position: center;
                background-attachment: fixed;
            }

            /* Overlay oscuro para legibilidad en el intro */
            #intro::before {
                content: '';
                position: absolute;
                top: 0; left: 0; width: 100%; height: 100%;
                background: rgba(0, 0, 0, 0.5); /* Un poco más oscuro para contraste */
                z-index: 1;
            }

            #intro * { z-index: 2; position: relative; }

            .intro-logo { width: 150px; margin-bottom: 20px; filter: drop-shadow(0 0 15px rgba(0,0,0,0.5)); }
            .intro-line.line-1 { font-size: clamp(3rem, 10vw, 6rem); font-weight: 700; line-height: 0.9; text-transform: uppercase; }
            .intro-flag { width: 45px; margin: 20px 0; }
            .intro-line.line-3 { letter-spacing: 5px; font-weight: 700; text-shadow: 2px 2px 4px rgba(0,0,0,0.5); }

            /* Secciones de Contenido */
            #wrapper { background-color: var(--bg-bone); }

            .plans-intro-container {
                display: flex; align-items: center; justify-content: center;
                gap: 60px; /* Más espacio entre foto y texto */
                padding: 100px 10%; flex-wrap: wrap;
            }

            /* CORRECCIÓN IMAGEN DIEGO */
            .plans-intro-container img { 
                width: 350px; /* Un poco más grande */
                /* Eliminamos box-shadow para que el PNG transparente se integre */
                filter: drop-shadow(10px 10px 20px rgba(0,0,0,0.15)); /* Sombra suave a la silueta */
                transition: var(--transition);
            }
            .plans-intro-container img:hover { transform: scale(1.02) translateY(-5px); }

            /* CORRECCIÓN TEXTOS LATERALES */
            .plans-intro-text-wrapper {
                flex: 1;
                min-width: 300px;
            }

            .plans-intro {
                border-left: 4px solid var(--text-dark); /* Borde más grueso */
                padding-left: 25px;
                margin-bottom: 25px; /* Más separación entre líneas */
                font-weight: 700; /* Letra en negrita */
                font-size: 1.5rem; /* TAMAÑO MUCHO MÁS GRANDE */
                letter-spacing: 1px;
                line-height: 1.3;
            }

            /* Carrusel de Testimonios */
            .testimonials-section { padding: 100px 0; background: #fdfcfb; }
            .testimonials-title { text-align: center; letter-spacing: 5px; color: var(--text-dark); font-size: 2rem; margin-bottom: 60px; }
            
            .testimonials-track {
                display: flex;
                width: max-content;
                animation: scroll 40s linear infinite;
            }

            .testimonial-card {
                background: white; padding: 40px; margin: 0 20px;
                width: 380px; border-radius: 5px;
                display: flex; flex-direction: column; justify-content: space-between;
                border: 1px solid #efeee9;
                box-shadow: 5px 5px 20px rgba(0,0,0,0.03);
            }

            .testimonial-photo { width: 70px; height: 70px; border-radius: 50%; object-fit: cover; margin-top: 20px; }

            @keyframes scroll {
                0% { transform: translateX(0); }
                100% { transform: translateX(-50%); }
            }

            /* Galería */
            .gallery {
                display: grid; grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
                gap: 15px; padding: 40px;
            }
            .gallery figure { margin: 0; overflow: hidden; position: relative; height: 400px; border-radius: 4px; }
            .gallery img { width: 100%; height: 100%; object-fit: cover; transition: var(--transition); filter: grayscale(0.2); }
            .gallery figure:hover img { transform: scale(1.05); filter: grayscale(0); }
            
            .gallery figcaption {
                position: absolute; bottom: 0; background: rgba(255,255,255,0.9);
                width: 100%; padding: 20px; transform: translateY(100%); transition: var(--transition);
                color: var(--text-dark); font-weight: bold;
            }
            .gallery figure:hover figcaption { transform: translateY(0); }

            /* Botones */
            .my-plans-button-container { text-align: center; margin: 70px 0; }
            .button {
                background: var(--accent-dark); color: white;
                padding: 20px 50px; display: inline-block;
                cursor: pointer; text-transform: uppercase; letter-spacing: 4px;
                border: none; transition: var(--transition);
                font-weight: 700; font-size: 1rem;
            }
            .button:hover { background: #333; transform: translateY(-3px); }

            /* Footer */
            #footer { 
                padding: 80px 10%; display: grid; grid-template-columns: 1fr 1fr; gap: 80px; 
                background: #f4f2ed; border-top: 1px solid #e0ddd5; 
            }
            input, textarea { 
                width: 100%; background: white; border: 2px solid #e0ddd5; 
                color: var(--text-dark); padding: 15px; margin-bottom: 20px; font-family: inherit; font-weight: 700;
                transition: border-color 0.3s;
            }
            input:focus, textarea:focus { border-color: #000; outline: none; }

            .hamburger-menu span { background: var(--text-dark) !important; }

            @media (max-width: 768px) {
                #footer { grid-template-columns: 1fr; }
                .plans-intro-container { flex-direction: column; text-align: center; }
                .plans-intro { border-left: none; border-bottom: 3px solid var(--text-dark); padding-left: 0; padding-bottom: 15px; }
            }
        </style>
    </head>
    <body>

        <header id="custom-header">
            <div class="header-left">
                <img src="images/dmm.logo.white.png" alt="DMM TRAINER" class="logo-img" style="filter: invert(1);">
                <span class="header-text">DMM TRAINER USA</span>
            </div>
            <button class="hamburger-menu" id="hamburger-btn" style="background:none; border:none; cursor:pointer;">
                <span style="display:block; width:30px; height:3px; background:black; margin:6px;"></span>
                <span style="display:block; width:30px; height:3px; background:black; margin:6px;"></span>
                <span style="display:block; width:30px; height:3px; background:black; margin:6px;"></span>
            </button>
        </header>

        <div id="intro">
            <img src="images/dmm.logo.white.png" alt="DMM Logo" class="intro-logo">
            <h1><span class="intro-line line-1">DMM <br>TRAINER</span></h1>
            <img src="images/us-flag.svg" alt="USA flag" class="intro-flag" />
            <p><span class="intro-line line-3">STRONGER + FASTER = WINNER</span></p>
        </div>

        <div id="wrapper">

            <div class="plans-intro-container">
                <img src="images/DMM.DIEGO.png" alt="Diego Martin Mendez">
                <div class="plans-intro-text-wrapper">
                    <p class="plans-intro">Welcome to DMM trainer by Diego Martin Mendez</p>
                    <p class="plans-intro">Online Personal Training</p>
                    <p class="plans-intro">Licensed in Sport and Physical Activity Sciences</p>
                    <p class="plans-intro">Specialized in Racket Sports</p>
                </div>
            </div>

            <div class="my-plans-button-container">
                <div class="button" onclick="window.location.href='services.html'"><p style="margin:0">my plans</p></div>
            </div>

            <section class="testimonials-section">
                <h2 class="testimonials-title">WHAT MY CLIENTS SAY</h2>
                <div class="testimonials-track">
                    <div class="testimonial-card">
                        <p>"Since I started with Diego, my transformation has been incredible. His dedication and professionalism are unmatched."</p>
                        <div>
                            <h4 style="margin-bottom:0; font-weight:700;">Miguel Briega</h4>
                            <img src="images/BRIEGA.JPG" alt="" class="testimonial-photo">
                        </div>
                    </div>
                    <div class="testimonial-card">
                        <p>"Diego's hybrid program adapts perfectly to my lifestyle. In just a few months, I've seen remarkable changes."</p>
                        <div>
                            <h4 style="margin-bottom:0; font-weight:700;">Guillermo Cagigas</h4>
                            <img src="images/CAGIGAS.JPG" alt="" class="testimonial-photo">
                        </div>
                    </div>
                    <div class="testimonial-card">
                        <p>"Diego is an exceptional trainer. The best investment in my well-being and health."</p>
                        <div>
                            <h4 style="margin-bottom:0; font-weight:700;">Marta Morga</h4>
                            <img src="images/MARTA.JPG" alt="" class="testimonial-photo">
                        </div>
                    </div>
                    <div class="testimonial-card">
                        <p>"Since I started with Diego, my transformation has been incredible. His dedication is unmatched."</p>
                        <div>
                            <h4 style="margin-bottom:0; font-weight:700;">Miguel Briega</h4>
                            <img src="images/BRIEGA.JPG" alt="" class="testimonial-photo">
                        </div>
                    </div>
                </div>
            </section>

            <section class="gallery-section">
                <h2 class="testimonials-title" style="margin-top:50px;">GALLERY</h2>
                <div class="gallery">
                    <figure><img src="images/02d11b6e-21bd-4b5d-95ce-9a7b72f33ee5.JPG" alt=""><figcaption><h3>Training</h3></figcaption></figure>
                    <figure><img src="images/17777005-edbc-4a42-a785-619b506795bc.JPG" alt=""><figcaption><h3>Results</h3></figcaption></figure>
                    <figure><img src="images/1bbe77f4-dd1e-4185-bd14-d7415034269d.JPG" alt=""><figcaption><h3>Gym</h3></figcaption></figure>
                    <figure><img src="images/2637bb60-cb23-4ec7-ad64-1f761e0d978d.JPG" alt=""><figcaption><h3>Dedication</h3></figcaption></figure>
                </div>
            </section>

            <footer id="footer">
                <section>
                    <h2 style="letter-spacing:3px; font-size:2rem;">GET IN TOUCH</h2>
                    <form method="post" action="https://formsubmit.co/dmmpersonaltrainer@gmail.com">
                        <input type="text" name="name" placeholder="Name" required/>
                        <input type="email" name="email" placeholder="Email" required/>
                        <textarea name="message" placeholder="Message" rows="4" required></textarea>
                        <input type="submit" value="Send Message" class="button" style="width:auto;"/>
                    </form>
                </section>
                <section class="split contact" style="font-size: 1.2rem;">
                    <div style="margin-top: 30px;">
                        <h3>Email</h3>
                        <p>dmmpersonaltrainer@gmail.com</p>
                        <h3>Phone</h3>
                        <p>+34 628 801 736</p>
                        <p style="margin-top: 60px; opacity:0.6; font-size: 0.9rem;">© DMM TRAINER 2026</p>
                    </div>
                </section>
            </footer>
        </div>

        <script>
            const btn = document.getElementById('hamburger-btn');
            btn.addEventListener('click', () => {
                alert('Lógica del menú móvil aquí');
            });
        </script>
    </body>
</html>