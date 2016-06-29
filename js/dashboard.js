$(document).ready(function() {
    // New Date Picker
    $(".time_entry_status_box  .input-daterange input").change(function(e) {
        var targetevt = $(this);
        var daysarray = ['Sun', 'Mon', 'Tue', 'Wen', 'Thu', 'Fri', 'Sat'];
        var montharray = ['', 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
        var days_list = getAllDaysNew(new Date($(this).val()));
        var put_date = [];
        for (day in days_list) {
            var str = days_list[day].toString();
            if (!(str.match("Sun") == "Sun" || str.match("Sat") == "Sat")) {
                var date = str.substr(7, 3) + "-" + montharray.indexOf(str.substr(4, 3)) + "-" + str.substr(13, 3) + " | " + str.substr(0, 3);
                put_date.push(date);
            }
        }
        var i = 0;
        targetevt.parents(".inline_action_tab_content").find(".weekdays_block").find(".inline_block .bottom_date_of_box").each(function() {
            var date_txt = $(this);
            date_txt.text(put_date[i]);
            i++;
        });
    });
    /***********************.inline_block .time_entry_status_box input validation*********************/
    $(".inline_block .time_entry_status_box input").keyup(function() {
        var str = $(this).val();
        var patt1 = /[^0-9],./;
        var result = str.match(patt1);
        if (result != null) {
            str = str.replace(result, '');
            $(this).val(str);
        }
    });

    $(".route_hidden_hashtag_popups").tooltip({
        trigger: 'click',
        placement: "right",
        container: 'body'
    });
    resizeWindow(screen.width, screen.height)
});

function getAllDaysNew(start) {
    var s_date = new Date(start);
    var date_array = [];
    var i = 0;
    var flag = 0;
    while (flag++ != 7) {
        date_array.push(s_date);
        s_date = new Date(s_date.setDate(s_date.getDate() + i));
        if (i == 0) {
            i++;
        }
    }
    //date_array.pop();
    return date_array;
};

$(document).ready(function(e) {
    var window_height;
    var navbar_height;
    var home_tab_height;
    var search_box_height;
    var chat_box_navbar_height;
    var footer_height;
    var history_tab_height;
    var my_workitems_height;
    var temp;

    $(window).bind("resize", function() {
        window_height = $(window).height();
        navbar_height = $(".navbar-inverse").height();
        home_tab_height = $(".home_tab").height();
        search_box_height = $(".searh_box").height();
        chat_box_navbar_height = $(".chat_box_navbar ul").height();
        footer_height = $(".footer").height();
        history_tab_height = $(".history_tab").height();

        my_workitems_height = navbar_height + home_tab_height + search_box_height + chat_box_navbar_height + footer_height + history_tab_height + 50;

        $(".chatbox").height(window_height - navbar_height);
        //alert(window_height-my_workitems_height);
        $(".chat_inline_action").find(".my_workitems").not(".serach_list").height(window_height - my_workitems_height - 10);
    }).trigger("resize");

    /*******************history_tab on click******************/
    var my_workitems_first = $(".chat_inline_action").find(".active_workitems");

    $(".chat_window .my_workitems .row_border").click(function() {
        $(this).parents(".chat_window").animate({
            "right": "0"
        }, "slow");
        $(".chat_window .open_chat_panel").animate({
            "right": "700"
        }, "slow");

        if ($(this).parent().hasClass("history_workitems")) {
            $(".active_workitems").find(".row_border").removeClass("active");
            $(".active_workitems").find(".row_border").hide(300);
            //$(".chat_window .my_workitems").first().find(".row_border.active").hide();
        } else if ($(this).parent().hasClass("active_workitems")) {
            $(".history_workitems").find(".row_border").hide(300);
            if ($('.history_workitems').find(".row_border").hasClass("active")) {
                my_workitems_height = navbar_height + home_tab_height + search_box_height + chat_box_navbar_height + footer_height + history_tab_height + 90 - 30;
                my_workitems_first.height(window_height - my_workitems_height);
            }
        }
        $(".chat_window .my_workitems .row_border").removeClass("active");
        $(this).addClass("active");
        $(".chatbox").addClass("opened");
    });

    $(".history_tab").click(function() {
        my_workitems_first.find(".row_border").not(".active").hide();
        my_workitems_first.removeAttr('style');
        $('.history_workitems').find(".row_border").show();
        $(".chat_box_navbar .chat_box_navbar").css("background-color", "#f7f7f7");
        $(".chat_box_navbar .row_border.chat_container").not(".active").hide(300);
        $(".my_workitems.active_workitems").height("auto");
        $(".history_tab").css("background-color", "#ffffff");


    });
    /******************chat_inline_action on click****************/
    $(".chat_inline_action .home_tab_content .chat_box_navbar ul").on('click', function() {
        if ($(".history_workitems").find(".row_border").hasClass("active")) {
            my_workitems_height = navbar_height + home_tab_height + search_box_height + chat_box_navbar_height + footer_height + history_tab_height + 50 + 91;
            my_workitems_first.height(window_height - my_workitems_height);
        } else {
            my_workitems_height = navbar_height + home_tab_height + search_box_height + chat_box_navbar_height + footer_height + history_tab_height + 50;
            my_workitems_first.height(window_height - my_workitems_height);
        }

        my_workitems_first.find(".row_border").show();
        $(".chat_box_navbar .row_border.chat_container").show(300);
        $(".home_tab_content .chat_box_navbar").css("background-color", "#ffffff");
        var rc = $(".row_border.chat_container").height().length;
        $(".history_tab").css("background-color", "#f7f7f7");
        $('.history_workitems').find(".row_border").not(".active").hide();
        var a = 0;
        if ($(".history_workitems .row_border.chat_container").hasClass("active")) {
            a = $(".row_border.chat_container.active").height();
        }

        $(".my_workitems.active_workitems").height($(".home_tab_content").height() - $(".chat_box_navbar").height() - 45 - a);


    });
    var right_click = 0;
    $(".comment_box").mousedown(function(e) {
        var ele = $(this);
        if (e.button == 0) {
            $(this).parent(".chat_comment").toggleClass("count");
        }
        if (e.button == 2 && !$(e.target).parents("ul").hasClass("file_list")) {
            $(".right_clicked_popup").fadeOut();
            var comment_l = $(".comment_list .count").length;
            console.log(comment_l)
            var attachment_l = 0;
            $(".comment_list .file_list").each(function() {
                if ($(this).parents(".chat_comment").hasClass("count")) {
                    attachment_l = attachment_l + $(this).find('li').length;
                }
            })
            console.log(attachment_l)
            var pop_txt = '<span>' + comment_l + '</span>Comment &amp; <span>' + attachment_l + '</span>Uploaded File Selected';
            ele.parents(".comment_list").siblings(".right_clicked_popup").find('h2').html('');
            ele.parents(".comment_list").siblings(".right_clicked_popup").find('h2').append(pop_txt);
            ele.parents(".comment_list").siblings(".right_clicked_popup").show(300);


            right_click = 2;
            return false;
        } else if (e.button == 2 && $(e.target).parents("ul").hasClass("file_list")) {
            $(".right_clicked_popup").fadeOut();
            right_click = 2;
            var set_top = e.pageY - $(".comment_list .comment_box").offset().top - 150;
            $(e.target).parents("ul").siblings(".right_clicked_popup").css({
                'top': set_top + 'px'
            }).show(300);
        }
        return true;
    });
    $(".chat_inline_action .searh_box .inputbox").click(function(event) {
        $(this).siblings(".search_result").show(300);
    });
    $(".chat_window").mouseup(function(e) {
        var subject = $(".search_result");
        if (e.target.class != subject.attr('class') && !subject.has(e.target).length) {
            subject.fadeOut();
        }
    });
    $(".chat_window").mouseup(function(e) {
        var subject = $(".right_clicked_popup");
        if (e.target.class != subject.attr('class') && !subject.has(e.target).length) {
            if (right_click != 2) {
                subject.fadeOut();
            }
            right_click = 0;
        }
    });
    var height = $(window).height();
    var k = 100;
    var inlinemenu = 0 || $('.inline_menu_container').height();
    $('.cocontainer').height(height - k);
    console.log('inlinemenu = ' + inlinemenu);
    $('.scroll_container').height($('.cocontainer').height() - inlinemenu - $('.first_half_container').height())
        /*****chat_window's chat_list height *****/

    var comment_list_height = ($(".chat_window").height()) - ($('.chatbox').find(".container_class").height() + $(".member_count").height() + $(".chatbox .chat_box_navbar ul").height() + $(".add_comment").height() + $(".range_calender").height());
    /// removed height $(".range_calender").height()
    $(".comment_list").height(comment_list_height - k + 30);
});