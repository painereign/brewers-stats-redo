/**
 * @author v.lugovksy
 * created on 16.12.2015
 */
(function () {
  'use strict';

  angular.module('BlurAdmin.pages.dashboard')
      .controller('DashboardCalendarCtrl', DashboardCalendarCtrl);

  /** @ngInject */
  function DashboardCalendarCtrl(baConfig) {

    var dashboardColors = baConfig.colors.dashboard;
    var $element = $('#calendar').fullCalendar({
      //height: 335,
      header: {
        left: 'prev,next today',
        center: 'title',
        right: 'month,agendaWeek,agendaDay'
      },
      defaultDate: '2017-06-01',
      selectable: true,
      selectHelper: true,
      select: function (start, end) {
        var title = prompt('Event Title:');
        var eventData;
        if (title) {
          eventData = {
            title: title,
            start: start,
            end: end
          };
          $element.fullCalendar('renderEvent', eventData, true); // stick? = true
        }
        $element.fullCalendar('unselect');
      },
      editable: true,
      eventLimit: true, // allow "more" link when too many events
      events: [
{title: 'vs COL',start: '2017-04-03T16:10:00',color: dashboardColors.silverTree},
{title: 'vs COL',start: '2017-04-04T19:10:00',color: dashboardColors.silverTree},
{title: 'vs COL',start: '2017-04-05T19:10:00',color: dashboardColors.silverTree},
{title: 'vs COL',start: '2017-04-06T13:10:00',color: dashboardColors.silverTree},
{title: 'vs CHC',start: '2017-04-07T20:10:00',color: dashboardColors.silverTree},
{title: 'vs CHC',start: '2017-04-08T16:10:00',color: dashboardColors.silverTree},
{title: 'vs CHC',start: '2017-04-09T14:10:00',color: dashboardColors.silverTree},
{title: '@ TOR',start: '2017-04-11T19:40:00',color: dashboardColors.surfieGreen},
{title: '@ TOR',start: '2017-04-12T19:40:00',color: dashboardColors.surfieGreen},
{title: '@ CIN',start: '2017-04-13T20:10:00',color: dashboardColors.surfieGreen},
{title: '@ CIN',start: '2017-04-14T14:10:00',color: dashboardColors.surfieGreen},
{title: '@ CIN',start: '2017-04-15T21:40:00',color: dashboardColors.surfieGreen},
{title: '@ CIN',start: '2017-04-16T22:10:00',color: dashboardColors.surfieGreen},
{title: '@ CHC',start: '2017-04-17T16:10:00',color: dashboardColors.surfieGreen},
{title: '@ CHC',start: '2017-04-18T14:15:00',color: dashboardColors.surfieGreen},
{title: '@ CHC',start: '2017-04-19T20:15:00',color: dashboardColors.surfieGreen},
{title: 'vs STL',start: '2017-04-20T16:10:00',color: dashboardColors.silverTree},
{title: 'vs STL',start: '2017-04-21T19:10:00',color: dashboardColors.silverTree},
{title: 'vs STL',start: '2017-04-22T19:10:00',color: dashboardColors.silverTree},
{title: 'vs STL',start: '2017-04-23T13:10:00',color: dashboardColors.silverTree},
{title: 'vs CIN',start: '2017-04-24T20:10:00',color: dashboardColors.silverTree},
{title: 'vs CIN',start: '2017-04-25T16:10:00',color: dashboardColors.silverTree},
{title: 'vs CIN',start: '2017-04-26T14:10:00',color: dashboardColors.silverTree},
{title: 'vs ATL',start: '2017-04-28T19:40:00',color: dashboardColors.silverTree},
{title: 'vs ATL',start: '2017-04-29T19:40:00',color: dashboardColors.silverTree},
{title: 'vs ATL',start: '2017-04-30T20:10:00',color: dashboardColors.silverTree},
{title: '@ STL',start: '2017-05-01T14:10:00',color: dashboardColors.surfieGreen},
{title: '@ STL',start: '2017-05-02T21:40:00',color: dashboardColors.surfieGreen},
{title: '@ STL',start: '2017-05-04T22:10:00',color: dashboardColors.surfieGreen},
{title: '@ PIT',start: '2017-05-05T16:10:00',color: dashboardColors.surfieGreen},
{title: '@ PIT',start: '2017-05-06T14:15:00',color: dashboardColors.surfieGreen},
{title: '@ PIT',start: '2017-05-07T20:15:00',color: dashboardColors.surfieGreen},
{title: 'vs BOS',start: '2017-05-09T16:10:00',color: dashboardColors.silverTree},
{title: 'vs BOS',start: '2017-05-10T19:10:00',color: dashboardColors.silverTree},
{title: 'vs BOS',start: '2017-05-11T19:10:00',color: dashboardColors.silverTree},
{title: 'vs NYM',start: '2017-05-12T13:10:00',color: dashboardColors.silverTree},
{title: 'vs NYM',start: '2017-05-13T20:10:00',color: dashboardColors.silverTree},
{title: 'vs NYM',start: '2017-05-14T16:10:00',color: dashboardColors.silverTree},
{title: '@ SDP',start: '2017-05-15T14:10:00',color: dashboardColors.surfieGreen},
{title: '@ SDP',start: '2017-05-16T19:40:00',color: dashboardColors.surfieGreen},
{title: '@ SDP',start: '2017-05-17T19:40:00',color: dashboardColors.surfieGreen},
{title: '@ SDP',start: '2017-05-18T20:10:00',color: dashboardColors.surfieGreen},
{title: '@ CHC',start: '2017-05-19T14:10:00',color: dashboardColors.surfieGreen},
{title: '@ CHC',start: '2017-05-21T21:40:00',color: dashboardColors.surfieGreen},
{title: 'vs TOR',start: '2017-05-23T22:10:00',color: dashboardColors.silverTree},
{title: 'vs TOR',start: '2017-05-24T16:10:00',color: dashboardColors.silverTree},
{title: 'vs ARI',start: '2017-05-25T14:15:00',color: dashboardColors.silverTree},
{title: 'vs ARI',start: '2017-05-26T20:15:00',color: dashboardColors.silverTree},
{title: 'vs ARI',start: '2017-05-27T19:10:00',color: dashboardColors.silverTree},
{title: 'vs ARI',start: '2017-05-28T13:10:00',color: dashboardColors.silverTree},
{title: '@ NYM',start: '2017-05-29T16:10:00',color: dashboardColors.surfieGreen},
{title: '@ NYM',start: '2017-05-30T19:10:00',color: dashboardColors.surfieGreen},
{title: '@ NYM',start: '2017-05-31T19:10:00',color: dashboardColors.surfieGreen},
{title: '@ NYM',start: '2017-06-01T13:10:00',color: dashboardColors.surfieGreen},
{title: 'vs LAD',start: '2017-06-02T20:10:00',color: dashboardColors.silverTree},
{title: 'vs LAD',start: '2017-06-03T16:10:00',color: dashboardColors.silverTree},
{title: 'vs LAD',start: '2017-06-04T14:10:00',color: dashboardColors.silverTree},
{title: 'vs SFG',start: '2017-06-05T19:40:00',color: dashboardColors.silverTree},
{title: 'vs SFG',start: '2017-06-06T19:40:00',color: dashboardColors.silverTree},
{title: 'vs SFG',start: '2017-06-07T20:10:00',color: dashboardColors.silverTree},
{title: 'vs SFG',start: '2017-06-08T14:10:00',color: dashboardColors.silverTree},
{title: '@ ARI',start: '2017-06-09T21:40:00',color: dashboardColors.surfieGreen},
{title: '@ ARI',start: '2017-06-10T22:10:00',color: dashboardColors.surfieGreen},
{title: '@ ARI',start: '2017-06-11T16:10:00',color: dashboardColors.surfieGreen},
{title: '@ STL',start: '2017-06-13T14:15:00',color: dashboardColors.surfieGreen},
{title: '@ STL',start: '2017-06-13T20:15:00',color: dashboardColors.surfieGreen},
{title: '@ STL',start: '2017-06-14T20:15:00',color: dashboardColors.surfieGreen},
{title: '@ STL',start: '2017-06-15T19:15:00',color: dashboardColors.surfieGreen},
{title: 'vs SDP',start: '2017-06-16T20:10:00',color: dashboardColors.silverTree},
{title: 'vs SDP',start: '2017-06-17T16:10:00',color: dashboardColors.silverTree},
{title: 'vs SDP',start: '2017-06-18T14:10:00',color: dashboardColors.silverTree},
{title: 'vs PIT',start: '2017-06-19T19:40:00',color: dashboardColors.silverTree},
{title: 'vs PIT',start: '2017-06-20T19:40:00',color: dashboardColors.silverTree},
{title: 'vs PIT',start: '2017-06-21T20:10:00',color: dashboardColors.silverTree},
{title: 'vs PIT',start: '2017-06-22T14:10:00',color: dashboardColors.silverTree},
{title: '@ ATL',start: '2017-06-23T19:35:00',color: dashboardColors.surfieGreen},
{title: '@ ATL',start: '2017-06-24T16:10:00',color: dashboardColors.surfieGreen},
{title: '@ ATL',start: '2017-06-25T13:35:00',color: dashboardColors.surfieGreen},
{title: '@ CIN',start: '2017-06-27T19:10:00',color: dashboardColors.surfieGreen},
{title: '@ CIN',start: '2017-06-28T19:10:00',color: dashboardColors.surfieGreen},
{title: '@ CIN',start: '2017-06-29T19:10:00',color: dashboardColors.surfieGreen},
{title: 'vs MIA',start: '2017-06-30T20:10:00',color: dashboardColors.silverTree},
{title: 'vs MIA',start: '2017-07-01T16:10:00',color: dashboardColors.silverTree},
{title: 'vs MIA',start: '2017-07-02T14:10:00',color: dashboardColors.silverTree},
{title: 'vs BAL',start: '2017-07-03T14:10:00',color: dashboardColors.silverTree},
{title: 'vs BAL',start: '2017-07-04T16:10:00',color: dashboardColors.silverTree},
{title: 'vs BAL',start: '2017-07-05T19:10:00',color: dashboardColors.silverTree},
{title: '@ CHC',start: '2017-07-06T14:20:00',color: dashboardColors.surfieGreen},
{title: '@ NYY',start: '2017-07-07T19:05:00',color: dashboardColors.surfieGreen},
{title: '@ NYY',start: '2017-07-08T13:05:00',color: dashboardColors.surfieGreen},
{title: '@ NYY',start: '2017-07-09T13:05:00',color: dashboardColors.surfieGreen},
{title: 'vs PHI',start: '2017-07-14T20:10:00',color: dashboardColors.silverTree},
{title: 'vs PHI',start: '2017-07-15T19:10:00',color: dashboardColors.silverTree},
{title: 'vs PHI',start: '2017-07-16T14:10:00',color: dashboardColors.silverTree},
{title: '@ PIT',start: '2017-07-17T19:05:00',color: dashboardColors.surfieGreen},
{title: '@ PIT',start: '2017-07-18T19:05:00',color: dashboardColors.surfieGreen},
{title: '@ PIT',start: '2017-07-19T19:05:00',color: dashboardColors.surfieGreen},
{title: '@ PIT',start: '2017-07-20T12:35:00',color: dashboardColors.surfieGreen},
{title: '@ PHI',start: '2017-07-21T19:05:00',color: dashboardColors.surfieGreen},
{title: '@ PHI',start: '2017-07-22T19:05:00',color: dashboardColors.surfieGreen},
{title: '@ PHI',start: '2017-07-23T13:35:00',color: dashboardColors.surfieGreen},
{title: '@ WSN',start: '2017-07-25T19:05:00',color: dashboardColors.surfieGreen},
{title: '@ WSN',start: '2017-07-26T19:05:00',color: dashboardColors.surfieGreen},
{title: '@ WSN',start: '2017-07-27T12:05:00',color: dashboardColors.surfieGreen},
{title: 'vs CHC',start: '2017-07-28T20:10:00',color: dashboardColors.silverTree},
{title: 'vs CHC',start: '2017-07-29T19:10:00',color: dashboardColors.silverTree},
{title: 'vs CHC',start: '2017-07-30T14:10:00',color: dashboardColors.silverTree},
{title: 'vs STL',start: '2017-08-01T19:40:00',color: dashboardColors.silverTree},
{title: 'vs STL',start: '2017-08-02T20:10:00',color: dashboardColors.silverTree},
{title: 'vs STL',start: '2017-08-03T14:10:00',color: dashboardColors.silverTree},
{title: '@ TBR',start: '2017-08-04T19:10:00',color: dashboardColors.surfieGreen},
{title: '@ TBR',start: '2017-08-05T18:10:00',color: dashboardColors.surfieGreen},
{title: '@ TBR',start: '2017-08-06T13:10:00',color: dashboardColors.surfieGreen},
{title: '@ MIN',start: '2017-08-07T20:10:00',color: dashboardColors.surfieGreen},
{title: '@ MIN',start: '2017-08-08T20:10:00',color: dashboardColors.surfieGreen},
{title: 'vs MIN',start: '2017-08-09T20:10:00',color: dashboardColors.silverTree},
{title: 'vs MIN',start: '2017-08-10T20:10:00',color: dashboardColors.silverTree},
{title: 'vs CIN',start: '2017-08-11T20:10:00',color: dashboardColors.silverTree},
{title: 'vs CIN',start: '2017-08-12T19:10:00',color: dashboardColors.silverTree},
{title: 'vs CIN',start: '2017-08-13T14:10:00',color: dashboardColors.silverTree},
{title: 'vs PIT',start: '2017-08-15T19:40:00',color: dashboardColors.silverTree},
{title: 'vs PIT',start: '2017-08-16T14:10:00',color: dashboardColors.silverTree},
{title: '@ COL',start: '2017-08-18T20:40:00',color: dashboardColors.surfieGreen},
{title: '@ COL',start: '2017-08-19T20:10:00',color: dashboardColors.surfieGreen},
{title: '@ COL',start: '2017-08-20T15:10:00',color: dashboardColors.surfieGreen},
{title: '@ SFG',start: '2017-08-21T22:15:00',color: dashboardColors.surfieGreen},
{title: '@ SFG',start: '2017-08-22T22:15:00',color: dashboardColors.surfieGreen},
{title: '@ SFG',start: '2017-08-23T15:45:00',color: dashboardColors.surfieGreen},
{title: '@ LAD',start: '2017-08-25T22:10:00',color: dashboardColors.surfieGreen},
{title: '@ LAD',start: '2017-08-26T21:10:00',color: dashboardColors.surfieGreen},
{title: '@ LAD',start: '2017-08-27T16:10:00',color: dashboardColors.surfieGreen},
{title: 'vs STL',start: '2017-08-29T19:40:00',color: dashboardColors.silverTree},
{title: 'vs STL',start: '2017-08-30T14:10:00',color: dashboardColors.silverTree},
{title: 'vs WSN',start: '2017-08-31T20:10:00',color: dashboardColors.silverTree},
{title: 'vs WSN',start: '2017-09-01T20:10:00',color: dashboardColors.silverTree},
{title: 'vs WSN',start: '2017-09-02T19:10:00',color: dashboardColors.silverTree},
{title: 'vs WSN',start: '2017-09-03T14:10:00',color: dashboardColors.silverTree},
{title: '@ CIN',start: '2017-09-04T13:10:00',color: dashboardColors.surfieGreen},
{title: '@ CIN',start: '2017-09-05T19:10:00',color: dashboardColors.surfieGreen},
{title: '@ CIN',start: '2017-09-06T12:35:00',color: dashboardColors.surfieGreen},
{title: '@ CHC',start: '2017-09-08T14:20:00',color: dashboardColors.surfieGreen},
{title: '@ CHC',start: '2017-09-09T16:05:00',color: dashboardColors.surfieGreen},
{title: '@ CHC',start: '2017-09-10T14:20:00',color: dashboardColors.surfieGreen},
{title: 'vs PIT',start: '2017-09-11T19:40:00',color: dashboardColors.silverTree},
{title: 'vs PIT',start: '2017-09-12T19:40:00',color: dashboardColors.silverTree},
{title: 'vs PIT',start: '2017-09-13T20:10:00',color: dashboardColors.silverTree},
{title: '@ MIA',start: '2017-09-15T19:10:00',color: dashboardColors.surfieGreen},
{title: '@ MIA',start: '2017-09-16T19:10:00',color: dashboardColors.surfieGreen},
{title: '@ MIA',start: '2017-09-17T13:10:00',color: dashboardColors.surfieGreen},
{title: '@ PIT',start: '2017-09-18T19:05:00',color: dashboardColors.surfieGreen},
{title: '@ PIT',start: '2017-09-19T19:05:00',color: dashboardColors.surfieGreen},
{title: '@ PIT',start: '2017-09-20T19:05:00',color: dashboardColors.surfieGreen},
{title: 'vs CHC',start: '2017-09-21T20:10:00',color: dashboardColors.silverTree},
{title: 'vs CHC',start: '2017-09-22T20:10:00',color: dashboardColors.silverTree},
{title: 'vs CHC',start: '2017-09-23T19:10:00',color: dashboardColors.silverTree},
{title: 'vs CHC',start: '2017-09-24T14:10:00',color: dashboardColors.silverTree},
{title: 'vs CIN',start: '2017-09-26T19:40:00',color: dashboardColors.silverTree},
{title: 'vs CIN',start: '2017-09-27T20:10:00',color: dashboardColors.silverTree},
{title: 'vs CIN',start: '2017-09-28T20:10:00',color: dashboardColors.silverTree},
{title: '@ STL',start: '2017-09-29T20:15:00',color: dashboardColors.surfieGreen},
{title: '@ STL',start: '2017-09-30T16:15:00',color: dashboardColors.surfieGreen},
{title: '@ STL',start: '2017-10-01T15:15:00',color: dashboardColors.surfieGreen}
      ]
    });

  }
})();