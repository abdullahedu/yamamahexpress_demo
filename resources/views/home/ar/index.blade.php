<!doctype html>
<html class="no-js" lang="ar">
  <head>
    <meta charset="utf-8">
    <title>اليمامة إكسبريس</title>
    <meta name="description" content="">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta property="og:title" content="">
    <meta property="og:type" content="">
    <meta property="og:url" content="">
    <meta property="og:image" content="">
    <link rel="manifest" href="site.webmanifest">
    <link rel="apple-touch-icon" href="{{asset('home/theme/img/fav-icon/icon.png')}}">
    <link rel="stylesheet" href="{{asset('home/theme/template/css/bootstrap/bootstrap-rtl.min.css')}}">
    <link rel="stylesheet" href="{{asset('home/theme/template/css/app/app.css')}}">     
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Almarai:wght@300;400;700;800&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"/>
    <script src="https://use.fontawesome.com/45bb800a9e.js"></script>
  </head>
  <body>

    <div class="wrapper" style="max-width: 100%; overflow-x: hidden;">

      <!-- Navbar -->
      <div class="nav-bar-full">
        <div class="container">
          <div class="row">

            <div class="col-md-12">
              <nav class="navbar navbar-expand-md navbar-dark">
                <a class="navbar-brand" href="/">
                  <img src="{{asset('home/theme/img/template/logos/ye-dark-logo.png')}}" width="100">
                </a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbar6">
                  <span class="navbar-toggler-icon"></span>
                </button>

                <div class="navbar-collapse collapse justify-content-stretch" id="navbar6">
                  <ul class="navbar-nav mr-auto">
                    <li class="nav-item">
                      <a class="nav-link" href="#">الرئيسية</a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link" href="{{asset('home/theme/files/CITC.pdf')}}">قواعد حماية المستفيد</a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link" href="tel:8004320000">للمساعدة 0000 432 800</a>
                    </li>
                    <li class="nav-item">
                      <a href="/en">
                        <img src="{{asset('home/theme/img/template/flags/uk.gif')}}" class="hvr-float" style="border-radius: 50%; height: 34px; width: 34px;">
                      </a>
                    </li>
                  </ul>
                </div>

              </nav>
            </div>

          </div><!-- row -->
        </div><!-- container -->
      </div><!-- Navbar -->

      <!-- Big image -->
      <div class="main-slider d-none d-lg-block d-md-block">
        <div class="centered-container">
          <img src="{{asset('home/theme/img/template/main/01.png')}}" alt="" style="width:100%;">
          <div class="centered">
            <div class="row">
              <div class="track-no">
                <input type="text" class="form-control" placeholder="أدخل رقم التتبع">
              </div>
              <div class="track-btn">
                <button class="btn btn-primary">تتبع شحنتك</button>
              </div>
            </div>
          </div>
        </div>
      </div><!-- Big image -->

      <!-- Big mobile image -->
      <div class="main-slider d-block d-lg-none d-md-none d-sm-block d-xs-block">
        <div class="centered-container">
          <img src="{{asset('home/theme/img/template/main/01m.png')}}" alt="" style="width:100%;">
          <div class="centered">
            <div class="row">
              <div class="m-track-no">
                <input type="text" class="form-control" placeholder="أدخل رقم التتبع">
              </div>
              <div class="m-track-btn">
                <button class="btn btn-primary">تتبع شحنتك</button>
              </div>
            </div>
          </div>
        </div>
      </div><!-- Big mobile image -->

      <!-- Footer -->
      <div class="home-page-footer">
        <div class="container">
          <div class="row">
            <div class="col-lg-6">
              <div class="copyright">
                <h6>جميع الحقوق محفوظة © اليمامة أكسبرس  2022</h6>
              </div>
            </div>
            <div class="col-lg-6">
              <div class="footer-social-icons">
                <ul>
                  <li>
                    <a href="https://twitter.com/YamamahExpress" target="_blank"><i class="fa fa-twitter-square fa-2x"></i></a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div><!-- Footer -->


</div><!-- Wrapper -->

    <!-- Bootstrap core JavaScript ================================================== -->
    <!-- Placed at the end of the document so the pages load faster -->
    <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossorigin="anonymous"></script>
    <script src="{{asset('home/theme/template/js/bootstrap/bootstrap.min.js')}}"></script>
    <script src="{{asset('home/theme/template/js/app/app.js')}}"></script>

    <script>
      window.intercomSettings = {
        api_base: "https://api-iam.intercom.io",
        app_id: "wiasab13"
      };
    </script>

    <script>
    // We pre-filled your app ID in the widget URL: 'https://widget.intercom.io/widget/wiasab13'
    (function(){var w=window;var ic=w.Intercom;if(typeof ic==="function"){ic('reattach_activator');ic('update',w.intercomSettings);}else{var d=document;var i=function(){i.c(arguments);};i.q=[];i.c=function(args){i.q.push(args);};w.Intercom=i;var l=function(){var s=d.createElement('script');s.type='text/javascript';s.async=true;s.src='https://widget.intercom.io/widget/wiasab13';var x=d.getElementsByTagName('script')[0];x.parentNode.insertBefore(s,x);};if(document.readyState==='complete'){l();}else if(w.attachEvent){w.attachEvent('onload',l);}else{w.addEventListener('load',l,false);}}})();
    </script>
  </body>
</html>