import React, { Component } from 'react';
import '../../../node_modules/jquery/dist/jquery';
import '../../../node_modules/materialize-css/dist/js/materialize';

import jquery  from '../../../node_modules/jquery/dist/jquery';
import '../../js/default-assets/active';

export default class Footer extends Component {
    render() {
        return (
            <div>
                    <footer class="page-footer black">
          <div class="container">
            <div class="row">
              <div class="col l6 s12">
                <h5 class="white-text">Gerson Rodriguez</h5>
                <p class="grey-text text-lighten-4">Full-Stack / Wordpress Developer</p>
              </div>
              <div class="col l4 offset-l2 s12">
                <h5 class="white-text">Contact</h5>
                <ul>
                  <li><a class="grey-text text-lighten-3" href="#!">Link 1</a></li>
                  <li><a class="grey-text text-lighten-3" href="#!">Link 2</a></li>
                  <li><a class="grey-text text-lighten-3" href="#!">Link 3</a></li>
                  <li><a class="grey-text text-lighten-3" href="#!">Link 4</a></li>
                </ul>
              </div>
            </div>
          </div>
          <div class="footer-copyright">
            <div class="container">
            © 2014 Gerson Rodriguez
            <a class="grey-text text-lighten-4 right" href="#!">More Links</a>
            </div>
          </div>
        </footer>
            

            </div>
        )
    }
}
