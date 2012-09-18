var levels = [
    {
        name:"Level 0",
        theme:'snoop',
        template:[
            "  123                                       ##",
            "  456                                         ",
            "           #######   ()                       ",
            "                     []                       ",
            "  #####                                       ",
            "                                            ##",
            "          ####                                ",
            "                                              ",
            "                                              ",
            "  ~~~~  ??????????????????????   #############",
            "   ^                                          ",
            "  /ü`                                         ",
            "xxxxxxxxxxxxxxxxxxxxxxxx"
        ]
    },
    {
        name:"SUSE",
        theme:'suse',
        template:[
            "  123                 ######     ########    ######    #####  ",
            "  456                                                         ",
            "           #######                  #### #  # #### ####       ",
            "                                    #    #  # #    #          ",
            "  #####                             #### #  # #### ###        ",
            "                      ######           # #  #    # #          ",
            "          ####                      #### #### #### ####       ",
            "                                                              ",
            "                                                              ",
            "  ~~~~     ######################    ######################   ",
            "   ^                                                          ",
            "  /ü`                                                         ",
            "xxxxxxxxxxx@@@@@@@@@@@@@@@@@@@@@@xxxxxxxxxxxxxxxxxxxxxxxxxxxxx"
        ]
    },
    {
        name:"Mario Level 1",
        theme:'super_mario',
        template:[
            "      13           13      1223                                              13                                                                                                                                                                     ",
            "      46           46      4556           13                  13             46      1223                                13                                                                    13                                     13            ",
            "                                          46                  46                     4556                                46                      1223                                  13      46          1223                       46            ",
            "                                                                                                 p                                               4556                                  46                  4556                                     ",
            "                        ?                                                                  #########     #####?                               ###     #??#                                                              HH         °                ",
            "                                                                                                                                                                                                                       HHH        'R                ",
            "                                                                                                                                                                                                                      HHHH         |     *          ",
            "                                                                           k          p                                                                                                                              HHHHH         |    WWW         ",
            "                ?     #?#?#                       qw          qw                     #?#                      #        #k     ?  ?  ?      #           ##           H  H         HH  H                ##?#          HHHHHH         |    lXj         ",
            "    ^                                     qw      as    ^     as                                                 ^                                                 HH  HH   ^   HHH  HH                            HHHHHHH     ^   |   WUUUW        ",
            "   /ü`            ^              qw       as      as   /ü`    as        ^                                       /ü`                    ^                          HHH  HHH /ü` HHHH  HHH    ^   qw             qw HHHHHHHH    /ü`  |   XXOXX  ^     ",
            "  /ügü`      {=} /ü`  p          as       as p{=} as p/ügü`p  as  {==} /ü`      {=}                  {=}      p/ügü`p          {==}   /ü`     /`p p  p p         HHHH==HHHHügüHHHHH  HHHH} /ü`  as   {=}   p p asHHHHHHHHH   /ügü` H   XXBXX}/ü`    ",
            "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx@@xxxxxxxxxxxxxxxxx     xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx  xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx"
        ]
    },
    {
        name:"Bauersman",
        theme:'super_mario',
        template:[
            "      13           13      1223                                              13                                                                                                                                                                                                                                                                                                                                                                                             ",
            "      46           46      4556           13                  13             46      1223                                             p     p         p                                     p  pp                         p                 p                             p    p   p      p                                      p  p            13                                                                    13                                     13            ",
            "                                          46                  46                     4556                                 xx    xx   xxxx   xxxxx   xxxxx  xx    xx      xx?xx   xx xxxxxx xxxxxxxxx xx    xx xxxx      xxxx   xx    xx     xxxxx     xxxx   xx    xx xxxxxxx  xxxxxxx  xxxxxx xx      xx   xxxx   xx     xx     xx xx           46                      1223                                  13      46          1223                       46            ",
            "                                                                                                 p                        xx    xx  xx  xx  xx  xx  xx  xx  xx  xx       xx  xx  xx xx  xx xxxxxxxxx xx    xx xx xx    xx  xx   xx  xx      xx  xx   xx  xx  xx    xx xxxxxxx  xx   xx  xxxxxx xxx    xxx  xx  xx  xxx    xx     xx xx                                   4556                                  46                  4556                                     ",
            "                        ?                                                                  #########     #####?           xx p  xx xx    xx xx   xx xx   xx  xxxx        xx  xx  xx xx  xx    xx     xx    xx xx  xx  xx    xx   xxxx       xx  xx  xx    xx xx    xx xx       xx   xx  xx     xx x  x xx xx    xx xx x   xx     xx xx                                ###     #??#                                                              HH         °                ",
            "                                                                                                                          xxxxxxxx xx  p xx xx  xx  xx  xx    xx         xxxxxx  xx xxxxx     xx     xxxxxxxx xx   xx xx p  xx    xx        xxx?xx  xx p  xx xx    xx xxxx     xx  xx   xxxxxx xx  xx  xx xx    xx xx  x  xx     xx xx                                                                                                         HHH        'R                ",
            "                                                                                                                          xxxxxxxx xxxxxxxx xxxxx   xxx?x     xx         xx  xx  xx xx x      xx     xxxxxxxx xx   xx xxxxxxxx    xx        xx  xx  xxxx?xxx xx    xx xxxx     xxxxx    xxxxxx xx      xx xxxxxxxx xx   x xx     xx xx                                                                                                        HHHH         |     *          ",
            "                                                                           k          p                                   xx    xx xx    xx xx      xx        xx         xx   xx xx xx xx     xx     xx    xx xx  xx  xx    xx    xx        xx   xx xx    xx xx    xx xx       xx xxx       xx xx      xx xx    xx xx    xxx     xx xx                                                                                                       HHHHH         |    WWW         ",
            "                ?     #?#?#                       qw          qw                     #?#                      #           xx    xx xx    xx xx      xx        xx         xx   xx xx xx  xx    xx     xx    xx xx xx   xx    xx    xx        xx   xx xx    xx  xx  xx  xxxxxxxx xx  xxx  xxxxxx xx      xx xx    xx xx     xx                   #k     ?  ?  ?      #           ##           H  H         HH  H                ##?#          HHHHHH         |    lXj         ",
            "    ^                                     qw      as    ^     as                                                 ^        xx    xx xx    xx xx      xx        xx         xxx?xx  xx xx   xx   xx     xx    xx xx?x    xx    xx    xx        xxxxxx  xx    xx   xxxx   xxxxxxxx xx   xxx xxxxxx xx      xx xx    xx xx     xx     xx xx                                                     HH  HH   ^   HHH  HH                            HHHHHHH     ^   |   WUUUW        ",
            "   /ü`            ^              qw       as      as   /ü`    as        ^                                       /ü`                                                                                                                                                                                                                                            ^                          HHH  HHH /ü` HHHH  HHH    ^   qw             qw HHHHHHHH    /ü`  |   XXOXX  ^     ",
            "  /ügü`      {=} /ü`  p          as       as p{=} as p/ügü`p  as  {==} /ü`      {=}                  {=}       /ügü`                                                                                                                                                                                                                                   {==}   /ü`     /`p p  p p         HHHH==HHHHügüHHHHH  HHHH} /ü`  as   {=}   p p asHHHHHHHHH   /ügü` H   XXBXX}/ü`    ",
            "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx@@xxxxxxxxxxxxxxxxx     xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx  xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx"
        ]
    }
];
