import React from "react";
import "./nav.css";
import logo from "../assets/logo_bbva_blanco.svg";
import logo_cliente from "../assets/newclient.svg";
import { RiSearchFill } from 'react-icons/ri';
import { BiMenuAltLeft } from 'react-icons/bi'

export const Nav = () => {
  return (
    <div className="nav">
      <div className="container">
        <div className="wraper">
          <div className="bbva">
            <img src={logo} alt="bbva" />
          </div>
          <div className="navigation-list">
            <div className="navigation-personas">
              <div className="personas">PERSONAS </div> 
              <hr />              
            </div>
            <div className="navigation-empresas">
              <div className="empresas">EMPRESAS Y GOBIERNO</div>
            </div>
          </div>
          <div className="hazte-cliente">
            <div className="content-hazte-cliente">
              <img src={logo_cliente} alt="cliente" />
              <span>Hazte cliente</span>
            </div>
          </div>
          <div className="contain-acceso">
            <div className="acceso">Acceso</div>
          </div>
          <div className="content-search">
            <div className="search">
              <div className="logo_search">
            <RiSearchFill style={{fontSize:'21px'}}/>
            </div>
            </div>
          </div>
          <div className="content_menu">
            Menú
          </div>
          <div className="menu_logo">
          <BiMenuAltLeft style={{fontSize:'35px'}}/>
          </div>
        </div>
      </div>
    </div>
  );
};
