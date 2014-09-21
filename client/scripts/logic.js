/**
 * Created by user on 19.09.2014.
 */
function initWebinarPanel() {
    $(function () {
        var pstyle0 = 'background-color: #F5F6F7; border: 1px solid #dfdfdf; padding: 0;';
        var pstyle = 'background-color: #F5F6F7; border: 1px solid #dfdfdf; padding: 5px;';
        $('#layout').w2layout({
            name: 'layout',
            panels: [
                { type: 'top',  size: 30, resizable: false, style: pstyle0, content: '<div id="topToolbar"></div>' },
                { type: 'left', size: 200, resizable: true, style: pstyle, content: '<div id="sidebar" style="height: 450px"></div>' },
                { type: 'main', style: pstyle, content: 'main' },
                { type: 'right', size: 200, resizable: true, style: pstyle, content: 'Agenda here' },
                { type: 'bottom', size: 50, resizable: true, style: pstyle, content: 'Chat here :)' }
            ]
        });

        $('#topToolbar').w2toolbar({
            name : 'topToolbar',
            items: [
                { type: 'check',  id: 'item1', caption: 'Play sound', checked: true },
                { type: 'break' },
                { type: 'radio',  id: 'item2',  group: '1', caption: 'Can\'t say', img: 'icon-page', checked: true },
                { type: 'radio',  id: 'item3',  group: '1', caption: 'Interesting', img: 'icon-page' },
                { type: 'radio',  id: 'item4',  group: '1', caption: 'Average', img: 'icon-page' },
                { type: 'radio',  id: 'item5',  group: '1', caption: 'Boring', img: 'icon-page' },
                { type: 'spacer' },
                { type: 'button',  id: 'itemLector', caption: 'Lector'},
                { type: 'button',  id: 'itemHelp',  caption: 'Help' }
            ]
        });

        $('#sidebar').w2sidebar({
            name: 'sidebar',
            img: null,
            nodes: [
                { id: 'user-0', text: 'Online (4)' },
                { id: 'user-1', text: 'User 1' },
                { id: 'user-2', text: 'User 2' },
                { id: 'user-3', text: 'User 3' },
                { id: 'user-4', text: 'User 4' }
            ],
            onClick: function (id, data) {
                console.log(id);
            }
        });
    });
}
