﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

namespace ContosoUniversity.Controllers
{
    public class SPAin1PlatformController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
    }
}