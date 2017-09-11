/**
 * Created by penug on 4/25/2017.
 */
import {Injectable} from '@angular/core'
import {perils} from './perils'
import {Bonds} from './bonds'
import {Portfoliocodes} from './portfoliocode'
import {portfolios} from "app/classes/portfolios";
import {states} from "./states";
import {mlsedetail} from "./mlsedetail"
import {portfoliodate} from "./portfoliodate";
import {peril} from "./peril";
import {region} from "./region";
import {lob} from "./lob";
import {rms} from "./rms";
import {ege} from "./ege";
import {aggocc} from "./aggocc";
import {epp} from "./epp";
import {lpp} from "./lpp";
import {segment} from "./segment";
import {lossthreshold} from "./lossthreshold";
@Injectable()
export class DataService {

/* Bond peril component Values*/
  getPerils() {
    return [
      new perils('CAQ', 'CAQ'),
      new perils('CBW', 'CBW'),
      new perils('CWQ', 'CWQ'),
      new perils('FLW', 'FLW'),
      new perils('NAW', 'NAW'),
      new perils('NEQ', 'NEQ')
    ];
  }

  getBonds() {
    return [
      new Bonds('BCAQ', 'CAQ', 'BCAQ'),
      new Bonds('BCAQ', 'CAQ', 'BCAQ'),
      new Bonds('BFLW', 'FLW', 'BFLW'),
      new Bonds('BNAW', 'NAW', 'BNAW')
    ];
  }

  /* CELP Component Values*/


  getPortfoliocodes() {
    return [
      new Portfoliocodes('A', 'A'),
      new Portfoliocodes('AY', 'AY'),
      new Portfoliocodes('G', 'G'),
      new Portfoliocodes('GS', 'GS'),
      new Portfoliocodes('MKT', 'MKT'),
      new Portfoliocodes('P', 'P'),
      new Portfoliocodes('SRBB', 'SRBB'),
      new Portfoliocodes('SRGL', 'SRGL'),
    ];
  }

  getPortfolioDates(){
    //0-11 are the twelve months in year, if it is 8 then it is september month which is ninth. FYI!
    return [
      new portfoliodate('A',new Date(2017,3,31)),
      new portfoliodate('A',new Date(2017,4,30)),
      new portfoliodate('A',new Date(2017,5,1)),
      new portfoliodate('AY',new Date(2016,8,16)),
      new portfoliodate('AY',new Date(2016,4,16)),
    ]

  }

  /*ILW values*/

  getPeril(){
    return[
      new peril('HU','hu'),
      new peril('EQ','eq'),
      new peril('WS','ws')
    ]
  }

  getRegions(){
    return [
      new region('AL', 'Alabama'),
      new region('AK', 'Alaska'),
      new region('AS', 'American Samoa'),
      new region('AZ', 'Arizona'),
      new region('AR', 'Arkansas'),
      new region('CA', 'California'),
      new region( 'CO', 'Colorado'),
      new region( 'CT', 'Connecticut'),
      new region( 'DE', 'Delaware'),
      new region( 'DC', 'District Of Columbia'),
      new region( 'FM', 'Federated States Of Micronesia'),
      new region( 'FL', 'Florida'),
      new region( 'GA', 'Georgia'),
      new region('GU', 'Guam'),
      new region( 'HI', 'Hawaii'),
      new region( 'ID', 'Idaho'),
      new region( 'IL', 'Illinois'),
      new region( 'IN', 'Indiana'),
      new region( 'IA', 'Iowa'),
      new region( 'KS', 'Kansas'),
      new region( 'KY', 'Kentucky'),
      new region('LA', 'Louisiana'),
      new region( 'ME', 'Maine'),
      new region( 'MH', 'Marshall Islands'),
      new region( 'MD', 'Maryland'),
      new region( 'MA', 'Massachusetts'),
      new region( 'MI', 'Michigan'),
      new region( 'MN', 'Minnesota'),
      new region('MS', 'Mississippi'),
      new region( 'MO', 'Missouri'),
      new region(  'MT', 'Montana'),
      new region( 'NE', 'Nebraska'),
      new region( 'NV', 'Nevada'),
      new region('NH', 'New Hampshire'),
      new region( 'NJ', 'New Jersey'),
      new region('NM', 'New Mexico'),
      new region('NY', 'New York'),
      new region('NC', 'North Carolina'),
      new region( 'ND', 'North Dakota'),
      new region( 'MP', 'Northern Mariana Islands'),
      new region( 'OH', 'Ohio'),
      new region( 'OK', 'Oklahoma'),
      new region( 'OR', 'Oregon'),
      new region( 'PW', 'Palau'),
      new region('PA', 'Pennsylvania'),
      new region( 'PR', 'Puerto Rico'),
      new region('RI', 'Rhode Island'),
      new region('SC', 'South Carolina'),
      new region( 'SD', 'South Dakota'),
      new region('TN', 'Tennessee'),
      new region('TX', 'Texas'),
      new region('UT', 'Utah'),
      new region('VT', 'Vermont'),
      new region('VI', 'Virgin Islands'),
      new region('VA', 'Virginia'),
      new region('WA', 'Washington'),
      new region('WV', 'West Virginia'),
      new region( 'WI', 'Wisconsin'),
      new region( 'WY', 'Wyoming'),
    ]

  }


  getLob(){
    return [
      new lob('ALL','all'),
      new lob('AGR','agr'),
      new lob('COMM','comm'),
      new lob('IND','ind'),
      new lob('PERS','pers')
    ]

  }

  getRms(){
    return [
      new rms('13','13'),
      new rms('12','12'),
      new rms('11','11'),
      new rms('10','10')
    ]
  }

  getEge(){

    return[
      new ege('14','14'),
      new ege('12','11'),
      new ege('12','11'),
    ]
  }

  getAggocc(){
    return[
      new aggocc('OCC','occ'),
      new aggocc('AGG','agg')
    ]
  }

  getEpp(){
    return[
      new epp( '0.1','0.1'),
      new epp( '0.5','0.5'),
      new epp(  '1','1'),
      new epp( '2','2'),
      new epp( '5','5'),
      new epp( '10','10'),
      new epp('15','15')
    ]
  }

  getLpp(){
    return[
      new lpp( '0.1','0.1'),
      new lpp( '0.5','0.5'),
      new lpp(  '1','1'),
      new lpp( '2','2'),
      new lpp( '5','5'),
      new lpp( '10','10'),
      new lpp('15','15'),
      new lpp('20','20'),
    ]
  }

  getSegments(){
    return[
      new segment('1','1'),
      new segment('2','2'),
      new segment('3','3'),
      new segment('4','4'),
      new segment('5','5'),
      new segment('6','6'),
      new segment('7','7'),
      new segment('8','8'),
      new segment('9','9'),
      new segment('10','10'),
      new segment('11','11'),
      new segment('12','12'),
      new segment('13','13'),
      new segment('14','14'),
      new segment('15','15'),
      new segment('16','16'),
      new segment('17','17'),
      new segment('18','18'),
      new segment('19','19'),
      new segment('20','20'),
      new segment('21','21'),
      new segment('22','22'),
      new segment('23','23'),
      new segment('24','24'),
      new segment('25','25'),
      new segment('26','26'),
      new segment('27','27'),
      new segment('28','28'),
      new segment('29','29'),
      new segment('30','30'),
      new segment('31','31'),
      new segment('32','32'),
      new segment('33','33'),
      new segment('34','34'),
      new segment('35','35'),
      new segment('36','36'),
      new segment('37','37'),
      new segment('38','38'),
      new segment('39','39'),
      new segment('40','40'),
      new segment('41','41'),
      new segment('42','42'),
      new segment('43','43'),
      new segment('44','44'),
      new segment('45','45'),
      new segment('46','46'),
      new segment('47','47'),
      new segment('48','48'),
      new segment('49','49'),
      new segment('50','50'),
      new segment('51','51'),
      new segment('52','52'),
      new segment('53','53'),
      new segment('54','54'),
      new segment('55','55'),
      new segment('56','56'),
      new segment('57','57'),
      new segment('58','58'),
      new segment('59','59'),
      new segment('60','60'),
      new segment('61','61'),
      new segment('62','62'),

    ]
  }

  getLossThresholds(){
    return[
      new lossthreshold(0.1,0.1),
      new lossthreshold(0.2,0.2),
      new lossthreshold(0.4,0.4),
      new lossthreshold(1.,1.),
      new lossthreshold(2.,2.),
      new lossthreshold(5.,1.),
    ]
  }







/*******************************************************/
  getPortfolios() {

    return [
      new portfolios('A', new Date(2017, 5, 16)),
      new portfolios('AB', new Date(2014, 5, 16)),
      new portfolios('AY', new Date(2012, 4, 21)),
      new portfolios('CA', new Date(2017, 5, 6)),
      new portfolios('AD', new Date(2017, 5, 26)),
      new portfolios('AZ', new Date(2011, 8, 16)),
      new portfolios('FA', new Date(2017, 5, 16)),
      new portfolios('MA', new Date(2017, 5, 16))
    ];
  }

  getStates() {
    return [
      new states('AL', 'Alabama'),
      new states('AK', 'Alaska'),
      new states('AS', 'American Samoa'),
      new states('AZ', 'Arizona'),
      new states('AR', 'Arkansas'),
      new states('CA', 'California'),
      new states('CO', 'Colorado'),
      new states('CT', 'Connecticut'),
      new states('DE', 'Delaware'),
      new states('DC', 'District Of Columbia'),
      new states('FM', 'Federated States Of Micronesia'),
      new states('FL', 'Florida'),
      new states('GA', 'Georgia'),
      new states('GU', 'Guam'),
      new states('HI', 'Hawaii'),
      new states('ID', 'Idaho'),
      new states('IL', 'Illinois'),
      new states('IN', 'Indiana'),
      new states('IA', 'Iowa'),
      new states('KS', 'Kansas'),
      new states('KY', 'Kentucky'),
      new states('LA', 'Louisiana'),
      new states('ME', 'Maine'),
      new states('MH', 'Marshall Islands'),
      new states('MD', 'Maryland'),
      new states('MA', 'Massachusetts'),
      new states('MI', 'Michigan'),
      new states('MN', 'Minnesota'),
      new states('MS', 'Mississippi'),
      new states('MO', 'Missouri'),
      new states('MT', 'Montana'),
      new states('NE', 'Nebraska'),
      new states('NV', 'Nevada'),
      new states('NH', 'New Hampshire'),
      new states('NJ', 'New Jersey'),
      new states('NM', 'New Mexico'),
      new states('NY', 'New York'),
      new states('NC', 'North Carolina'),
      new states('ND', 'North Dakota'),
      new states('MP', 'Northern Mariana Islands'),
      new states('OH', 'Ohio'),
      new states('OK', 'Oklahoma'),
      new states('OR', 'Oregon'),
      new states('PW', 'Palau'),
      new states('PA', 'Pennsylvania'),
      new states('PR', 'Puerto Rico'),
      new states('RI', 'Rhode Island'),
      new states('SC', 'South Carolina'),
      new states('SD', 'South Dakota'),
      new states('TN', 'Tennessee'),
      new states('TX', 'Texas'),
      new states('UT', 'Utah'),
      new states('VT', 'Vermont'),
      new states('VI', 'Virgin Islands'),
      new states('VA', 'Virginia'),
      new states('WA', 'Washington'),
      new states('WV', 'West Virginia'),
      new states('WI', 'Wisconsin'),
      new states('WY', 'Wyoming')

    ]
  }


  //MLSE-Detail Component details

  getMlseDetails() {

  }
}
