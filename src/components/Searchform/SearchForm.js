import React, { Component } from 'react';
import './SearchForm.css';

export default class SearchForm extends Component {
  render() {
    return (
<div>

<div className='container landing-container'>
  <div className='columns is-mobile box search-box'>
    <div class='column is-4 is-paddingless'>
      <form class='search-block'>
        <label class='search-label label'>
          <span>Where</span>
        </label>
        <input class='search-input home-input' placeholder='Address, City, State' type='/search' value=''>
      </form>
    </div>
    <div class='column is-3 is-paddingless'>
      <form class='price-block'>
        <label class='price-label label'>
          <span>Rent Range</span>
        </label>
        <a class='button' href='#' title='Rent Range'>
          <span>Rent Range</span>
        </a>
        <div class='dropdown-container'>
          <div class='dropdown'>
            <div class='range-container'>
              <div class='left-input'>
                <input class='minRentInput active' maxlength='6' placeholder='Min Rent' type='tel'>
              </div>
              <div class='right-input'>
                <input class='maxRentInput' maxlength='6' placeholder='Max Rent' type='tel'>
              </div>
            </div>
            <ul class='min-options'>
              <li>No Min</li>
              <li>$500</li>
              <li>$700</li>
              <li>$900</li>
              <li>$1100</li>
              <li>$1300</li>
              <li>$1500</li>
            </ul>
            <ul class='max-options'>
              <li>$1100</li>
              <li>$1300</li>
              <li>$1500</li>
              <li>$1700</li>
              <li>$1900</li>
              <li>$2100</li>
              <li>No Max</li>
            </ul>
          </div>
        </div>
      </form>
    </div>
    <div class='column is-3 is-paddingless'>
      <div class='price-block'>
        <label class='price-label label'>
          <span>Extra's</span>
        </label>
        <a class='button' href='#' title="Extra's">
          <span>Beds x Baths</span>
        </a>
        <div class='dropdown-container'>
          <div class='dropdown'>
            <div class='options-container'>
              <p>Beds</p>
              <div class='checkbox'>
                <label for='allBed'>
                  <input id='allBeds' type='checkbox'>
                  <span class='checkbox-material'>
                    <span class='check'></span>
                  </span>
                </label>
                All Beds
              </div>
              <div class='checkbox'>
                <label for='studioBed'>
                  <input id='studioBed' type='checkbox'>
                  <span class='checkbox-material'>
                    <span class='check'></span>
                  </span>
                </label>
                Studio
              </div>
              <div class='checkbox'>
                <label for='oneBed'>
                  <input id='oneBed' type='checkbox'>
                  <span class='checkbox-material'>
                    <span class='check'></span>
                  </span>
                </label>
                1 Bed
              </div>
              <div class='checkbox'>
                <label for='twoBed'>
                  <input id='twoBed' type='checkbox'>
                  <span class='checkbox-material'>
                    <span class='check'></span>
                  </span>
                </label>
                2 Beds
              </div>
              <div class='checkbox'>
                <label for='threeBed'>
                  <input id='threeBed' type='checkbox'>
                  <span class='checkbox-material'>
                    <span class='check'></span>
                  </span>
                </label>
                3 Beds
              </div>
              <div class='checkbox'>
                <label for='maxBeds'>
                  <input id='maxBeds' type='checkbox'>
                  <span class='checkbox-material'>
                    <span class='check'></span>
                  </span>
                </label>
                4+ Beds
              </div>
            </div>
            <div class='options-container'>
              <p>Baths</p>
              <div class='checkbox'>
                <label for='allBath'>
                  <input id='allBath' type='checkbox'>
                  <span class='checkbox-material'>
                    <span class='check'></span>
                  </span>
                </label>
                All Baths
              </div>
              <div class='checkbox'>
                <label for='oneBath'>
                  <input id='oneBath' type='checkbox'>
                  <span class='checkbox-material'>
                    <span class='check'></span>
                  </span>
                </label>
                1+ Bath
              </div>
              <div class='checkbox'>
                <label for='twoBath'>
                  <input id='twoBath' type='checkbox'>
                  <span class='checkbox-material'>
                    <span class='check'></span>
                  </span>
                </label>
                2+ Bath
              </div>
              <div class='checkbox'>
                <label for='threeBath'>
                  <input id='threeBath' type='checkbox'>
                  <span class='checkbox-material'>
                    <span class='check'></span>
                  </span>
                </label>
                3+ Baths
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class='column is-2 is-paddingless'>
      <a class='button is-primary is-large search-button'>Search</a>
    </div>
  </div>
</div>
</div>


        {/* <form action="/results" method="POST">
          <div className="search-component">
            <label htmlFor="">Name</label>
            <input type="text" />
          </div>
          <div className="search-component">
            <label htmlFor="">City</label>
            <select name="city" id="city">
                <option value="Barcelona">Barcelona</option>
                <option value="Madrid">Madrid</option>
                <option value="Bilbao">Bilbao</option>
            </select>
          </div>
          <div className="search-component">
            <label htmlFor="">Capacity</label>
            <select name="capacity" id="capaity">
                <option value="0-150">0 - 150 pax</option>
                <option value="150-400">150 - 400 pax</option>
                <option value="400-800">400 - 800 pax</option>
                <option value="800-1200">800 - 1200 pax</option>
                <option value="1200-2000">1200 - 2000 pax</option>
                <option value="2000-5000">2000 - 5000 pax</option>
                <option value="5000-10000">5000 -  10000 pax</option>
            </select>
          </div>
          <div className="search-component">
            <label htmlFor="">Date</label>
            <input type="date" placeholder="Date" id="date" name="date" required />
          </div>
          <button className="search-button" type="submit">Search</button>
        </form> */}
    );
  }
}
