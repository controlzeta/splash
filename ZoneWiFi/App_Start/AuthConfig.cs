﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using Microsoft.Web.WebPages.OAuth;
using ZoneWiFi.Models;

namespace ZoneWiFi
{
    public static class AuthConfig
    {
        public static void RegisterAuth()
        {
            // Para permitir que los usuarios de este sitio inicien sesión con sus cuentas de otros sitios como, por ejemplo, Microsoft, Facebook y Twitter,
            // es necesario actualizar este sitio. Para obtener más información, visite http://go.microsoft.com/fwlink/?LinkID=252166

            //OAuthWebSecurity.RegisterMicrosoftClient(
            //    clientId: "",
            //    clientSecret: "");

            OAuthWebSecurity.RegisterTwitterClient(
                consumerKey: "BLlUgeDdvnohPqdp36rGgNceQ",
                consumerSecret: "ZjCBvErFT5WHWUbfZPYz0gpmTv9BzqZ2wohB96Qgkuw9VGtwr6");

            OAuthWebSecurity.RegisterFacebookClient(
                appId: "273036986422600",
                appSecret: "cd73e27cca40f08d4a0909c690b6bbc0");

            //OAuthWebSecurity.RegisterGoogleClient();
        }
    }
}
