@extends('utilisateur.app')
@section('contenu')
    <div id="maincontent" class="qt-main">
        <!-- ======================= HEADER SECTION ======================= -->
        <!-- EVENT FEATURED ========================= -->
        <div class="qt-part-event-featured qt-card qt-negative qt-vertical-padding-l">
            <div class="qt-event-featured-content">
                <h5 class="qt-caption-med"><span>PROCHAIN ​​ÉVÉNEMENT</span></h5>
                <h1 class="qt-spacer-s">Architek Challenge 72H</h1>
                <h3></h3>
                <div class="qt-countdown-container">
                    <div id="countdown" class="ClassyCountdownDemo qt-countdown" data-end="2018-03-16"></div>
                </div>
                <p>
                    <a href="http://www.architek-challenge.com" target="_blank" class="qt-btn qt-btn-primary qt-btn-l">Voir Plus</a>
                </p>
            </div>
            <div class="qt-countdown-background">
                <div class="qt-header-bg" data-bgimage="{{asset('utilisateur/imagestemplate/474.jpg')}}">
                    <img src="{{asset('utilisateur/imagestemplate/474.jpg')}}" alt="Featured image" width="690" height="302">
                </div>
            </div>
        </div>
        <hr class="qt-spacer-m">

        <!-- ======================= CONTENT SECTION ======================= -->
        <div class="qt-container">
            <div class="row qt-vertical-padding-l ">
                <div class="col s12 m12 l1 qt-pushpin-container">
                    <div class="qt-pushpin">
                        <!-- SHARE FUNCTIONS ================================================== -->
                        <ul class="qt-sharepage qt-content-primary">
                            <li class="hide-on-med-and-down">
                                <i class="qticon-share qt-shareicon qt-content-primary-dark"></i>
                            </li>
                            <li>
                                <a class="qt-popupwindow qt-sharelink" data-sharetype="facebook" data-name="Share" data-width="600" data-height="500" target="_blank" href="#">
                                    <i class="qticon-facebook"></i>
                                </a>
                            </li>
                            <li>
                                <a class="qt-popupwindow qt-sharelink" data-sharetype="twitter" data-name="Share" data-width="600" data-height="500" target="_blank" href="#">
                                    <i class="qticon-twitter"></i>
                                </a>
                            </li>
                            <li>
                                <a class="qt-popupwindow qt-sharelink" data-sharetype="google" data-name="Share" data-width="600" data-height="500" target="_blank" href="#">
                                    <i class="qticon-googleplus"></i>
                                </a>
                            </li>
                            <li>
                                <a class="qt-popupwindow qt-sharelink" data-sharetype="pinterest" data-name="Share" data-width="600" data-height="500" target="_blank" href="#">
                                    <i class="qticon-pinterest"></i>
                                </a>
                            </li>
                            <li>
                                <a href="#" class="qt-btn-primary qt-sharelink"><i class="dripicons-heart"></i>
                                </a>
                            </li>
                        </ul>
                        <!-- SHARE FUNCTIONS ================================================== -->
                    </div>
                    <hr class="qt-spacer-m">
                </div>
                <div class="col s12 m12 l8">
                    <ul class="collapsible qt-chart-tracklist" data-collapsible="accordion">
                        <!-- CHART TRACK ========================= -->
                        <li class="qt-part-chart qt-chart-track qt-negative qt-card-s">
                            <div class="qt-chart-table collapsible-header qt-content-primary">
                                <div class="qt-position">
                                    <img src="{{asset('utilisateur/imagestemplate/event/Image1.jpg')}}" class="qt-chart-cover" alt="Chart track" width="170" height="170">
                                </div>
                                <div class="qt-titles">
                                    <h3 class="qt-ellipsis qt-t">	SITIC AFRICA 2018</h3>
                                    <p>10-12 Avril 2018</p>
                                </div>
                                <div class="qt-action">
                                    <h2>+</h2>
                                </div>
                            </div>
                            <div class="collapsible-body qt-paper">
                                <img src="{{asset('utilisateur/imagestemplate/event/1.png')}}" >
                            </div>
                        </li>
                        <!-- CHART TRACK END ========================= -->
                        <!-- CHART TRACK ========================= -->
                        <li class="qt-part-chart qt-chart-track qt-negative qt-card-s">
                            <div class="qt-chart-table collapsible-header qt-content-primary">
                                <div class="qt-position">
                                    <img src="{{asset('utilisateur/imagestemplate/event/Image2.png')}}" class="qt-chart-cover" alt="Chart track" width="170" height="170">
                                </div>
                                <div class="qt-titles">
                                    <h3 class="qt-ellipsis qt-t">Felicia Tunes</h3>
                                    <p>Octobre2018</p>
                                </div>
                                <div class="qt-action">
                                    <h2>+</h2>
                                </div>
                            </div>
                            <div class="collapsible-body qt-paper">
                                <img src="{{asset('utilisateur/imagestemplate/event/2.png')}}" >
                            </div>
                        </li>
                        <!-- CHART TRACK END ========================= -->
                        <!-- CHART TRACK ========================= -->
                        <li class="qt-part-chart qt-chart-track qt-negative qt-card-s">
                            <div class="qt-chart-table collapsible-header qt-content-primary">
                                <div class="qt-position">
                                    <img src="{{asset('utilisateur/imagestemplate/event/Image3.png')}}" class="qt-chart-cover" alt="Chart track" width="170" height="170">
                                </div>
                                <div class="qt-titles">
                                    <h3 class="qt-ellipsis qt-t">Mobile World Congress
                                        2018												</h3>
                                    <p>26 Février – 1 Mars 2018
                                    </p>
                                </div>
                                <div class="qt-action">
                                    <h2>+</h2>
                                </div>
                            </div>
                            <div class="collapsible-body qt-paper">
                                <img src="{{asset('utilisateur/imagestemplate/event/3.png')}}" >
                            </div>
                        </li>
                        <!-- CHART TRACK END ========================= -->
                        <!-- CHART TRACK ========================= -->
                        <li class="qt-part-chart qt-chart-track qt-negative qt-card-s">
                            <div class="qt-chart-table collapsible-header qt-content-primary">
                                <div class="qt-position">
                                    <img src="{{asset('utilisateur/imagestemplate/event/Image4.png')}}" class="qt-chart-cover" alt="Chart track" width="170" height="170">
                                </div>
                                <div class="qt-titles">
                                    <h3 class="qt-ellipsis qt-t">Hannover-Germany
                                    </h3>
                                    <p>11-15 Juin 2018
                                    </p>
                                </div>
                                <div class="qt-action">
                                    <h2>+</h2>
                                </div>
                            </div>
                            <div class="collapsible-body qt-paper">
                                <img src="{{asset('utilisateur/imagestemplate/event/4.png')}}" >
                            </div>
                        </li>
                        <!-- CHART TRACK END ========================= -->
                        <!-- CHART TRACK ========================= -->
                        <li class="qt-part-chart qt-chart-track qt-negative qt-card-s">
                            <div class="qt-chart-table collapsible-header qt-content-primary">
                                <div class="qt-position">
                                    <img src="{{asset('utilisateur/imagestemplate/event/Image6.png')}}" class="qt-chart-cover" alt="Chart track" width="170" height="170">
                                </div>
                                <div class="qt-titles">
                                    <h3 class="qt-ellipsis qt-t">Elgazala Speed</h3>
                                    <p>Décembre 2018
                                    </p>
                                </div>
                                <div class="qt-action">
                                    <h2>+</h2>
                                </div>
                            </div>
                            <div class="collapsible-body qt-paper">
                                <img src="{{asset('utilisateur/imagestemplate/event/9.png')}}" >
                            </div>
                        </li>
                        <!-- CHART TRACK END ========================= -->
                        <!-- CHART TRACK ========================= -->
                        <li class="qt-part-chart qt-chart-track qt-negative qt-card-s">
                            <div class="qt-chart-table collapsible-header qt-content-primary">
                                <div class="qt-position">
                                    <img src="{{asset('utilisateur/imagestemplate/event/Image5.png')}}" class="qt-chart-cover" alt="Chart track" width="170" height="170">
                                </div>
                                <div class="qt-titles">
                                    <h3 class="qt-ellipsis qt-t">salon de l'entrepreneuriat</h3>
                                    <p>21-22 Février 2018</p>
                                </div>
                                <div class="qt-action">
                                    <h2>+</h2>
                                </div>
                            </div>
                            <div class="collapsible-body qt-paper">

                            </div>
                        </li>
                        <!-- CHART TRACK END ========================= -->

                        <!-- CHART TRACK ========================= -->
                        <li class="qt-part-chart qt-chart-track qt-negative qt-card-s">
                            <div class="qt-chart-table collapsible-header qt-content-primary">
                                <div class="qt-position">
                                    <img src="{{asset('utilisateur/imagestemplate/event/Image7.png')}}" class="qt-chart-cover" alt="Chart track" width="170" height="170">
                                </div>
                                <div class="qt-titles">
                                    <h3 class="qt-ellipsis qt-t">Elgazala Demo Days </h3>
                                    <p>Novembre 2018
                                    </p>
                                </div>
                                <div class="qt-action">
                                    <h2>+</h2>

                                </div>
                            </div>
                            <div class="collapsible-body qt-paper">
                                <img src="{{asset('utilisateur/imagestemplate/event/Image8.png')}}" >
                            </div>
                        </li>
                        <!-- CHART TRACK END ========================= -->
                        <!-- CHART TRACK ========================= -->
                        <li class="qt-part-chart qt-chart-track qt-negative qt-card-s">
                            <div class="qt-chart-table collapsible-header qt-content-primary">
                                <div class="qt-position">
                                    <img src="{{asset('utilisateur/imagestemplate/event/Image9.png')}}" class="qt-chart-cover" alt="Chart track" width="170" height="170">
                                    <span>03</span>
                                </div>
                                <div class="qt-titles">
                                    <h3 class="qt-ellipsis qt-t">Midday in the cisy</h3>
                                    <p>Blueberries</p>
                                </div>
                                <div class="qt-action">
                                    <h2>+</h2>
                                </div>
                            </div>
                            <div class="collapsible-body qt-paper">
                                <img src="{{asset('utilisateur/imagestemplate/event/5.png')}}" >
                                <img src="{{asset('utilisateur/imagestemplate/event/6.png')}}" >


                            </div>
                        </li>

                    </ul>
                </div>
                <div class="qt-sidebar col s12 m12 l3">
                    <!-- SIDEBAR ================================================== -->
                    <div class="qt-widgets qt-sidebar-main qt-text-secondary row">
                        <div class="col s12 m3 l12">
                            <div class="qt-widget">
                                <h5 class="qt-caption-small"><span>Newsletter</span></h5>Abonnez-vous maintenant à la newsletter pour recevoir des mises à jour hebdomadaires.<hr class="qt-spacer-s">
                                <form method="post" action="#newsletter" class="qt-inline-form">
                                    <div class="row qt-nopadding">
                                        <div class="col s12 m8 l9">
                                            <input placeholder="Votre email" value="" type="text" class="validate qt-input-s">
                                        </div>
                                        <div class="col s12 m4 l3">
                                            <input type="button" value="Envoyer" class="qt-btn qt-btn-secondary qt-btn-s qt-fullwidth">
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                              <!-- POST SMALL TITLE ITEM END ========================= -->
                            </div>
                        </div>

                    <!-- SIDEBAR END ================================================== -->
                </div>
            </div>
        </div>
        <!-- ======================= RELATED SECTION ======================= -->
        <div class="qt-content-primary qt-negative qt-related-section qt-vertical-padding-l">
            <div class="qt-container">
                <h5 class="qt-caption-small"><span>Evennements</span></h5>
                <div class="qt-related-list row">
                    <div class="col s12 m4">
                        <div class="qt-part-archive-item qt-item-chart">
                            <div class="qt-item-header">
                                <div class="qt-header-top">
                                    <ul class="qt-tags">
                                        <li><a href="#">10-12 Avril 2018</a></li>
                                    </ul>
                                    <div class="qt-feedback">

                                    </div>
                                </div>
                                <div class="qt-header-mid qt-vc">
                                    <div class="qt-vi">
                                        <h3 class="qt-title qt-ellipsis qt-t">
                                            <a href="#" class="qt-text-shadow">
                                                SITIC AFRICA 2018
                                            </a>
                                        </h3>
                                    </div>
                                </div>
                                <div class="qt-header-bottom">
                                    <a href="#" class="qt-btn qt-btn-primary qt-readmore"><i class="dripicons-align-justify"></i></a>
                                </div>
                                <div class="qt-header-bg" data-bgimage="{{asset('utilisateur/imagestemplate/event/1.png')}}">
                                    <img src="{{asset('utilisateur/imagestemplate/squared-690-690/unsplash-02.jpg')}}" alt="Featured image" width="690" height="690">
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col s12 m4">
                        <div class="qt-part-archive-item qt-item-chart">
                            <div class="qt-item-header">
                                <div class="qt-header-top">
                                    <ul class="qt-tags">
                                        <li><a href="#">Octobre2018</a></li>
                                    </ul>
                                    <div class="qt-feedback">

                                    </div>
                                </div>
                                <div class="qt-header-mid qt-vc">
                                    <div class="qt-vi">
                                        <h3 class="qt-title qt-ellipsis qt-t">
                                            <a href="#" class="qt-text-shadow">
                                                Felicia Tunes
                                            </a>
                                        </h3>
                                    </div>
                                </div>
                                <div class="qt-header-bottom">
                                    <a href="#" class="qt-btn qt-btn-primary qt-readmore"><i class="dripicons-align-justify"></i></a>
                                </div>
                                <div class="qt-header-bg" data-bgimage="{{asset('utilisateur/imagestemplate/event/2.png')}}">
                                    <img src="{{asset('utilisateur/imagestemplate/squared-690-690/unsplash-11.jpg')}}" alt="Featured image" width="690" height="690">
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col s12 m4">
                        <div class="qt-part-archive-item qt-item-chart">
                            <div class="qt-item-header">
                                <div class="qt-header-top">
                                    <ul class="qt-tags">
                                        <li><a href="#">Décembre 2018</a></li>
                                    </ul>
                                    <div class="qt-feedback">

                                    </div>
                                </div>
                                <div class="qt-header-mid qt-vc">
                                    <div class="qt-vi">
                                        <h3 class="qt-title qt-ellipsis qt-t">
                                            <a href="#" class="qt-text-shadow">
                                                ELGAZALA SPEED
                                            </a>
                                        </h3>
                                    </div>
                                </div>
                                <div class="qt-header-bottom">
                                    <a href="#" class="qt-btn qt-btn-primary qt-readmore"><i class="dripicons-align-justify"></i></a>
                                </div>
                                <div class="qt-header-bg" data-bgimage="{{asset('utilisateur/imagestemplate/event/9.png')}}">
                                    <img src="{{asset('utilisateur/imagestemplate/squared-690-690/unsplash-12.jpg')}}" alt="Featured image" width="690" height="690">
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    </div>
    </div>
@endsection