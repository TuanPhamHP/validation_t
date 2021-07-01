# Validation_t

This package was written by Phạm Anh Tuấn .
The destination of this package is testing and do some small stuff

<h3>Install</h3>
<div style="background-color: #F7F7F7; padding : 12px 16px;">
  <p>npm install validation_t</p>
  <p>yarn add validation_t</p>
</div>

# GITHUB :

<a href="https://github.com/TuanPhamHP/validation_t"> &#9658; GITHUB</a>

# Current Features :

\*\* String methods

<div style="background-color: #F7F7F7; padding : 12px 16px;">
  <b>import { tStr } from "validation_t/src";</b>
</div>
      Syntax : <b>tStr.method-name</b>
      <table
        style="border:1px solid #ececec; border-spacing: 0px;border-collapse: collapse;    background-color: rgb(246 246 246 / 63%);"
      >
        <thead>
          <tr>
            <th style="border:1px solid #ececec; padding : 4px 10px;">
              Methods
            </th>
            <th style="border:1px solid #ececec; padding : 4px 10px;">
              Params
            </th>
            <th style="border:1px solid #ececec; padding : 4px 10px;">
              Result
            </th>
          </tr>
        </thead>
        <tbody>
        <tr>
            <td colspan="3">
              <p style="text-align:center;"><b>String</b></p>
            </td>
          </tr>
          <tr>
            <td style="border:1px solid #ececec; padding : 4px 10px;">
              <b>removeAscent(str)</b>
            </td>
            <td style="border:1px solid #ececec; padding : 4px 10px;">
              str : String
            </td>
            <td style="border:1px solid #ececec; padding : 4px 10px;">
              Return new lowercase string does not contain ascent. <br />
              Ex: removeAscent('Tuấn') -> 'tuan'
            </td>
          </tr>
          <tr>
            <td style="border:1px solid #ececec; padding : 4px 10px;">
              <b>isEmail(str)</b>
            </td>
            <td style="border:1px solid #ececec; padding : 4px 10px;">
              str : String
            </td>
            <td style="border:1px solid #ececec; padding : 4px 10px;">
              Return a Boolean . &#9888; &#x26A0; just test some regular email,
              not match for all case. <br />
              Ex: isEmail('example@gmail') -> false
            </td>
          </tr>
          <tr>
            <td style="border:1px solid #ececec; padding : 4px 10px;">
              <b>isURL(str)</b>
            </td>
            <td style="border:1px solid #ececec; padding : 4px 10px;">
              str : String
            </td>
            <td style="border:1px solid #ececec; padding : 4px 10px;">
              Return a Boolean . Check if provided string match a url pattern <br />
              Ex: isURL('https://www.npmjs.com/package/validation_t') -> true
            </td>
          </tr>
          <tr>
            <td style="border:1px solid #ececec; padding : 4px 10px;">
              <b>isContainURL(str)</b>
            </td>
            <td style="border:1px solid #ececec; padding : 4px 10px;">
              str : String
            </td>
            <td style="border:1px solid #ececec; padding : 4px 10px;">
              Return a Boolean . Check if provided string contain any url pattern <br />
              Ex: isURL('thisexamplehttps://www.npmjs.com/package/validation_t') -> true
            </td>
          </tr>
          <tr>
            <td style="border:1px solid #ececec; padding : 4px 10px;">
              <b>isNotContainNumber(str)</b>
            </td>
            <td style="border:1px solid #ececec; padding : 4px 10px;">
              str : String
            </td>
            <td style="border:1px solid #ececec; padding : 4px 10px;">
              Return a Boolean check if provided string contain number or not.
              <br />
              Ex: isNotContainNumber('abc') -> true
            </td>
          </tr>
          <tr>
            <td style="border:1px solid #ececec; padding : 4px 10px;">
              <b>getCurrency(str)</b>
            </td>
            <td style="border:1px solid #ececec; padding : 4px 10px;">
              str : String
            </td>
            <td style="border:1px solid #ececec; padding : 4px 10px;">
              Return a formated string if the string can convert to number, if not its return the string it self. 
              Work the same with number .
              <br />
              Ex: getCurrency('abc') -> 'abc'
               getCurrency('1234567.89') -> '1,234,567.89'
            </td>
          </tr>
        </tbody>
      </table>

\*\* Date methods

<div style="background-color: #F7F7F7; padding : 12px 16px;">
  <p>import { tDate } from "validation_t/src";</p>
</div>
<p>
          Syntax : <b>tDate.formatDate(_date, format, lang)</b>
          <br />
          _date : Valid Date value Ex : '01/13/2020' , '01/13/2020 12:20' ,
          GTMString, ISOString, miliseconds ... .
          <br />
          format : String . Listed as an Array bellow
          <br />
          lang | default 'vi' : define your language . only can recognize 'vi'
          as vietnamese, the rest will be treated as 'eng'
        </p>
        <table
          style="
            border: 1px solid #ececec;
            border-spacing: 0px;
            border-collapse: collapse;
            background-color: rgb(246 246 246 / 63%);
          "
        >
          <thead>
            <tr>
              <th style="border: 1px solid #ececec; padding: 4px 10px">
                Format
              </th>
              <th style="border: 1px solid #ececec; padding: 4px 10px">
                Return
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style="border: 1px solid #ececec; padding: 4px 10px">day</td>
              <td style="border: 1px solid #ececec; padding: 4px 10px">
                <span> 'Monday' - 'Thứ 2'</span> <br />
              </td>
            </tr>
            <tr>
              <td style="border: 1px solid #ececec; padding: 4px 10px">
                d | dd | ddd
              </td>
              <td style="border: 1px solid #ececec; padding: 4px 10px">
                <span>1 | 01 | 01</span>
              </td>
            </tr>
            <tr>
              <td style="border: 1px solid #ececec; padding: 4px 10px">
                M | MM | MMM | MMMM
              </td>
              <td style="border: 1px solid #ececec; padding: 4px 10px">
                <span>1 | 01 | Jan - Tháng 1 | January - Tháng 1</span>
              </td>
            </tr>
            <tr>
              <td style="border: 1px solid #ececec; padding: 4px 10px">
                yy | yyyy
              </td>
              <td style="border: 1px solid #ececec; padding: 4px 10px">
                <span>21 | 2021</span>
              </td>
            </tr>
            <tr>
              <td style="border: 1px solid #ececec; padding: 4px 10px; white-space : nowrap;">
                hh | mm | ss | mili | 12
              </td>
              <td style="border: 1px solid #ececec; padding: 4px 10px">
                <span >09 | 09 | 09 | 789 | Turn time to 12-hour-clock </span>
              </td>
            </tr>
            <tr>
              <td style="border: 1px solid #ececec; padding: 4px 10px">
                Format Array
              </td>
              <td style="border: 1px solid #ececec; padding: 4px 10px">
                <span>
                  d/M/yy | d-M-yy | dd/MM/yyyy | dd-MM-yyyy | day |MMM dd | yyyy
                  |day |MMMM ddd | yyyy | hh:mm | hh:mm:ss | hh:mm:ss:mili |
                  hh:mm 12 |hh:mm:ss 12 | hh:mm:ss:mili 12 | dd/MM/yyyy hh:mm |
                  day |MMMM ddd |yyyy hh:mm | day |MMMM ddd | yyyy hh:mm:ss |
                  day |MMMM ddd | yyyy hh:mm:mili | day |MMM dd | yyyy hh:mm |
                  day |MMM dd | yyyy hh:mm 12 |dd/MM/yyyy hh:mm:ss | dd/MM/yyyy
                  hh:mm:ss 12 | dd/MM/yyyyhh:mm:ss:mili | dd/MM/yyyy
                  hh:mm:ss:mili 12
                </span>
              </td>
            </tr>
          </tbody>
        </table>
      Syntax : <b>tDate.method-name</b>
      <table
        style="border:1px solid #ececec; border-spacing: 0px;border-collapse: collapse;    background-color: rgb(246 246 246 / 63%);"
      >
        <thead>
          <tr>
            <th style="border:1px solid #ececec; padding : 4px 10px;">
              Methods
            </th>
            <th style="border:1px solid #ececec; padding : 4px 10px;">
              Params
            </th>
            <th style="border:1px solid #ececec; padding : 4px 10px;">
              Result
            </th>
          </tr>
        </thead>
        <tbody>
        <tr>
            <td colspan="3">
              <p style="text-align:center;"><b>Date</b></p>
            </td>
          </tr>
          <tr>
            <td style="border:1px solid #ececec; padding : 4px 10px;">
              <b>formatDateCustomize(_date, lang, timezone)</b>
            </td>
            <td style="border:1px solid #ececec; padding : 4px 10px;">
              _date : valid date</br>
              lang : String - default 'vi' as vietnamese, other value will be treat as 'en' </br>
              timezone : Number - default 24 . switch to 12 if you wanna change to 12'clock 
            </td>
            <td style="border:1px solid #ececec; padding : 4px 10px;">
              Return an Object to customize format by your self
            </td>
          </tr>
          <tr>
            <td style="border:1px solid #ececec; padding : 4px 10px;">
              <b>getCurrentWeek(_date)</b>
            </td>
            <td style="border:1px solid #ececec; padding : 4px 10px;">
              _date : valid date
            </td>
            <td style="border:1px solid #ececec; padding : 4px 10px;">
              Return an object { </br>
                startWeek: dateObject,</br>
                endWeek: dateObject </br>
                 }
            </td>
          </tr>
        </tbody>
      </table>
