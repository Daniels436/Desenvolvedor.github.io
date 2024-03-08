{
  "requestedUrl": "https://daniels436.github.io/",
  "finalUrl": "https://daniels436.github.io/",
  "mainDocumentUrl": "https://daniels436.github.io/",
  "finalDisplayedUrl": "https://daniels436.github.io/",
  "lighthouseVersion": "11.5.0",
  "userAgent": "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) HeadlessChrome/122.0.6261.94 Safari/537.36",
  "fetchTime": "2024-03-08T14:09:09.970Z",
  "environment": {
    "networkUserAgent": "Mozilla/5.0 (Linux; Android 11; moto g power (2022)) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/119.0.0.0 Mobile Safari/537.36",
    "hostUserAgent": "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) HeadlessChrome/122.0.6261.94 Safari/537.36",
    "benchmarkIndex": 161,
    "credits": {
      "axe-core": "4.8.1"
    }
  },
  "runWarnings": [],
  "configSettings": {
    "emulatedFormFactor": "mobile",
    "formFactor": "mobile",
    "locale": "en-US",
    "onlyCategories": [
      "pwa",
      "performance",
      "accessibility",
      "best-practices",
      "seo"
    ],
    "channel": "lr"
  },
  "audits": {
    "aria-command-name": {
      "id": "aria-command-name",
      "title": "`button`, `link`, and `menuitem` elements have accessible names",
      "description": "When an element doesn't have an accessible name, screen readers announce it with a generic name, making it unusable for users who rely on screen readers. [Learn how to make command elements more accessible](https://dequeuniversity.com/rules/axe/4.8/aria-command-name).",
      "score": null,
      "scoreDisplayMode": "notApplicable"
    },
    "is-crawlable": {
      "id": "is-crawlable",
      "title": "Page isn’t blocked from indexing",
      "description": "Search engines are unable to include your pages in search results if they don't have permission to crawl them. [Learn more about crawler directives](https://developer.chrome.com/docs/lighthouse/seo/is-crawlable/).",
      "score": 1,
      "scoreDisplayMode": "binary",
      "details": {
        "headings": [],
        "type": "table",
        "items": []
      },
      "warnings": []
    },
    "http-status-code": {
      "id": "http-status-code",
      "title": "Page has successful HTTP status code",
      "description": "Pages with unsuccessful HTTP status codes may not be indexed properly. [Learn more about HTTP status codes](https://developer.chrome.com/docs/lighthouse/seo/http-status-code/).",
      "score": 1,
      "scoreDisplayMode": "binary"
    },
    "bypass": {
      "id": "bypass",
      "title": "The page contains a heading, skip link, or landmark region",
      "description": "Adding ways to bypass repetitive content lets keyboard users navigate the page more efficiently. [Learn more about bypass blocks](https://dequeuniversity.com/rules/axe/4.8/bypass).",
      "score": null,
      "scoreDisplayMode": "notApplicable"
    },
    "first-meaningful-paint": {
      "id": "first-meaningful-paint",
      "title": "First Meaningful Paint",
      "description": "First Meaningful Paint measures when the primary content of a page is visible. [Learn more about the First Meaningful Paint metric](https://developer.chrome.com/docs/lighthouse/performance/first-meaningful-paint/).",
      "score": 1,
      "scoreDisplayMode": "numeric",
      "displayValue": "1.1 s",
      "numericValue": 1051,
      "numericUnit": "millisecond"
    },
    "uses-rel-preload": {
      "id": "uses-rel-preload",
      "title": "Preload key requests",
      "description": "Consider using `<link rel=preload>` to prioritize fetching resources that are currently requested later in page load. [Learn how to preload key requests](https://developer.chrome.com/docs/lighthouse/performance/uses-rel-preload/).",
      "score": null,
      "scoreDisplayMode": "notApplicable",
      "details": {
        "items": [],
        "type": "opportunity",
        "headings": [],
        "overallSavingsMs": 0
      }
    },
    "identical-links-same-purpose": {
      "id": "identical-links-same-purpose",
      "title": "Identical links have the same purpose.",
      "description": "Links with the same destination should have the same description, to help users understand the link's purpose and decide whether to follow it. [Learn more about identical links](https://dequeuniversity.com/rules/axe/4.8/identical-links-same-purpose).",
      "score": null,
      "scoreDisplayMode": "error",
      "errorMessage": "axe-core Error: URI malformed"
    },
    "crawlable-anchors": {
      "id": "crawlable-anchors",
      "title": "Links are crawlable",
      "description": "Search engines may use `href` attributes on links to crawl websites. Ensure that the `href` attribute of anchor elements links to an appropriate destination, so more pages of the site can be discovered. [Learn how to make links crawlable](https://support.google.com/webmasters/answer/9112205)",
      "score": 1,
      "scoreDisplayMode": "binary",
      "details": {
        "headings": [],
        "type": "table",
        "items": []
      }
    },
    "critical-request-chains": {
      "id": "critical-request-chains",
      "title": "Avoid chaining critical requests",
      "description": "The Critical Request Chains below show you what resources are loaded with a high priority. Consider reducing the length of chains, reducing the download size of resources, or deferring the download of unnecessary resources to improve page load. [Learn how to avoid chaining critical requests](https://developer.chrome.com/docs/lighthouse/performance/critical-request-chains/).",
      "score": 1,
      "scoreDisplayMode": "informative",
      "displayValue": "9 chains found",
      "details": {
        "type": "criticalrequestchain",
        "longestChain": {
          "transferSize": 1395,
          "length": 2,
          "duration": 192.71399998664856
        },
        "chains": {
          "A92F90C19CD8AE965AAC28F02547981D": {
            "request": {
              "endTime": 223866.88228,
              "responseReceivedTime": 223866.882272,
              "startTime": 223866.805447,
              "url": "https://daniels436.github.io/",
              "transferSize": 7822
            },
            "children": {
              "42.24": {
                "request": {
                  "endTime": 223866.997195,
                  "url": "https://daniels436.github.io/install-prompt.js",
                  "startTime": 223866.912074,
                  "responseReceivedTime": 223866.997191,
                  "transferSize": 1108
                }
              },
              "42.23": {
                "request": {
                  "startTime": 223866.911989,
                  "responseReceivedTime": 223866.982925,
                  "transferSize": 1155,
                  "endTime": 223866.982928,
                  "url": "https://daniels436.github.io/JS/menu-mobile-script.js"
                }
              },
              "42.22": {
                "request": {
                  "transferSize": 1395,
                  "startTime": 223866.911917,
                  "endTime": 223866.998161,
                  "url": "https://daniels436.github.io/JS/slid-cel.js",
                  "responseReceivedTime": 223866.998158
                }
              },
              "42.25": {
                "request": {
                  "endTime": 223866.989018,
                  "startTime": 223866.912193,
                  "url": "https://daniels436.github.io/service-worker.js",
                  "transferSize": 1726,
                  "responseReceivedTime": 223866.989015
                }
              },
              "42.20": {
                "request": {
                  "url": "https://daniels436.github.io/files/process-form.php",
                  "startTime": 223866.911674,
                  "responseReceivedTime": 223866.99163099998,
                  "endTime": 223866.991634,
                  "transferSize": 1258
                }
              },
              "42.21": {
                "request": {
                  "url": "https://daniels436.github.io/JS/form-pattern.js",
                  "startTime": 223866.911815,
                  "transferSize": 1293,
                  "endTime": 223866.99184800003,
                  "responseReceivedTime": 223866.991845
                }
              },
              "42.3": {
                "request": {
                  "responseReceivedTime": 223866.980212,
                  "transferSize": 1866,
                  "endTime": 223866.98021499996,
                  "startTime": 223866.901417,
                  "url": "https://daniels436.github.io/CSS-PRINCIPAL/style-menu-mobile.css"
                }
              },
              "42.26": {
                "request": {
                  "endTime": 223866.985307,
                  "startTime": 223866.912326,
                  "transferSize": 976,
                  "url": "https://daniels436.github.io/index.js",
                  "responseReceivedTime": 223866.985304
                }
              },
              "42.2": {
                "request": {
                  "responseReceivedTime": 223866.982648,
                  "url": "https://daniels436.github.io/CSS-PRINCIPAL/style-principal.css",
                  "endTime": 223866.98264999996,
                  "startTime": 223866.901118,
                  "transferSize": 6825
                }
              }
            }
          }
        }
      }
    },
    "is-on-https": {
      "id": "is-on-https",
      "title": "Uses HTTPS",
      "description": "All sites should be protected with HTTPS, even ones that don't handle sensitive data. This includes avoiding [mixed content](https://developers.google.com/web/fundamentals/security/prevent-mixed-content/what-is-mixed-content), where some resources are loaded over HTTP despite the initial request being served over HTTPS. HTTPS prevents intruders from tampering with or passively listening in on the communications between your app and your users, and is a prerequisite for HTTP/2 and many new web platform APIs. [Learn more about HTTPS](https://developer.chrome.com/docs/lighthouse/pwa/is-on-https/).",
      "score": 1,
      "scoreDisplayMode": "binary",
      "details": {
        "type": "table",
        "headings": [],
        "items": []
      }
    },
    "logical-tab-order": {
      "id": "logical-tab-order",
      "title": "The page has a logical tab order",
      "description": "Tabbing through the page follows the visual layout. Users cannot focus elements that are offscreen. [Learn more about logical tab ordering](https://developer.chrome.com/docs/lighthouse/accessibility/logical-tab-order/).",
      "score": null,
      "scoreDisplayMode": "manual"
    },
    "color-contrast": {
      "id": "color-contrast",
      "title": "Background and foreground colors have a sufficient contrast ratio",
      "description": "Low-contrast text is difficult or impossible for many users to read. [Learn how to provide sufficient color contrast](https://dequeuniversity.com/rules/axe/4.8/color-contrast).",
      "score": 1,
      "scoreDisplayMode": "binary",
      "details": {
        "type": "table",
        "headings": [],
        "items": []
      }
    },
    "hreflang": {
      "id": "hreflang",
      "title": "Document has a valid `hreflang`",
      "description": "hreflang links tell search engines what version of a page they should list in search results for a given language or region. [Learn more about `hreflang`](https://developer.chrome.com/docs/lighthouse/seo/hreflang/).",
      "score": 1,
      "scoreDisplayMode": "binary",
      "details": {
        "items": [],
        "headings": [],
        "type": "table"
      }
    },
    "performance-budget": {
      "id": "performance-budget",
      "title": "Performance budget",
      "description": "Keep the quantity and size of network requests under the targets set by the provided performance budget. [Learn more about performance budgets](https://developers.google.com/web/tools/lighthouse/audits/budgets).",
      "score": null,
      "scoreDisplayMode": "notApplicable"
    },
    "interactive-element-affordance": {
      "id": "interactive-element-affordance",
      "title": "Interactive elements indicate their purpose and state",
      "description": "Interactive elements, such as links and buttons, should indicate their state and be distinguishable from non-interactive elements. [Learn how to decorate interactive elements with affordance hints](https://developer.chrome.com/docs/lighthouse/accessibility/interactive-element-affordance/).",
      "score": null,
      "scoreDisplayMode": "manual"
    },
    "duplicate-id-active": {
      "id": "duplicate-id-active",
      "title": "`[id]` attributes on active, focusable elements are unique",
      "description": "All focusable elements must have a unique `id` to ensure that they're visible to assistive technologies. [Learn how to fix duplicate `id`s](https://dequeuniversity.com/rules/axe/4.8/duplicate-id-active).",
      "score": 1,
      "scoreDisplayMode": "binary",
      "details": {
        "items": [],
        "type": "table",
        "headings": []
      }
    },
    "font-size": {
      "id": "font-size",
      "title": "Document uses legible font sizes",
      "description": "Font sizes less than 12px are too small to be legible and require mobile visitors to “pinch to zoom” in order to read. Strive to have >60% of page text ≥12px. [Learn more about legible font sizes](https://developer.chrome.com/docs/lighthouse/seo/font-size/).",
      "score": 1,
      "scoreDisplayMode": "binary",
      "displayValue": "99.81% legible text",
      "details": {
        "headings": [
          {
            "key": "source",
            "label": "Source",
            "valueType": "source-location"
          },
          {
            "label": "Selector",
            "key": "selector",
            "valueType": "code"
          },
          {
            "key": "coverage",
            "valueType": "text",
            "label": "% of Page Text"
          },
          {
            "key": "fontSize",
            "valueType": "text",
            "label": "Font Size"
          }
        ],
        "type": "table",
        "items": [
          {
            "source": {
              "column": 19,
              "type": "source-location",
              "url": "https://daniels436.github.io/CSS-PRINCIPAL/style-principal.css",
              "line": 931,
              "urlProvider": "network"
            },
            "fontSize": "11.2px",
            "selector": "#footer-copyright",
            "coverage": "0.15%"
          },
          {
            "fontSize": "11px",
            "coverage": "0.05%",
            "source": {
              "url": "https://daniels436.github.io/CSS-PRINCIPAL/style-principal.css",
              "line": 945,
              "type": "source-location",
              "urlProvider": "network",
              "column": 12
            },
            "selector": ".footer1 p"
          },
          {
            "source": {
              "value": "Legible text",
              "type": "code"
            },
            "fontSize": "≥ 12px",
            "coverage": "99.81%"
          }
        ]
      }
    },
    "script-treemap-data": {
      "id": "script-treemap-data",
      "title": "Script Treemap Data",
      "description": "Used for treemap app",
      "score": 1,
      "scoreDisplayMode": "informative",
      "details": {
        "nodes": [
          {
            "resourceBytes": 765,
            "children": [
              {
                "unusedBytes": 292,
                "name": "(inline) function hideMe…",
                "resourceBytes": 765
              }
            ],
            "unusedBytes": 292,
            "name": "https://daniels436.github.io/"
          },
          {
            "name": "https://daniels436.github.io/JS/form-pattern.js",
            "resourceBytes": 917,
            "unusedBytes": 416
          },
          {
            "resourceBytes": 1353,
            "name": "https://daniels436.github.io/JS/slid-cel.js",
            "unusedBytes": 1022
          },
          {
            "unusedBytes": 350,
            "resourceBytes": 1050,
            "name": "https://daniels436.github.io/JS/menu-mobile-script.js"
          },
          {
            "name": "https://daniels436.github.io/install-prompt.js",
            "resourceBytes": 750,
            "unusedBytes": 518
          },
          {
            "name": "https://daniels436.github.io/service-worker.js",
            "unusedBytes": 3079,
            "resourceBytes": 3175
          },
          {
            "name": "https://daniels436.github.io/index.js",
            "unusedBytes": 0,
            "resourceBytes": 351
          }
        ],
        "type": "treemap-data"
      }
    },
    "aria-allowed-role": {
      "id": "aria-allowed-role",
      "title": "Values assigned to `role=\"\"` are valid ARIA roles.",
      "description": "ARIA `role`s enable assistive technologies to know the role of each element on the web page. If the `role` values are misspelled, not existing ARIA `role` values, or abstract roles, then the purpose of the element will not be communicated to users of assistive technologies. [Learn more about ARIA roles](https://dequeuniversity.com/rules/axe/4.8/aria-allowed-role).",
      "score": null,
      "scoreDisplayMode": "notApplicable"
    },
    "aria-hidden-body": {
      "id": "aria-hidden-body",
      "title": "`[aria-hidden=\"true\"]` is not present on the document `<body>`",
      "description": "Assistive technologies, like screen readers, work inconsistently when `aria-hidden=\"true\"` is set on the document `<body>`. [Learn how `aria-hidden` affects the document body](https://dequeuniversity.com/rules/axe/4.8/aria-hidden-body).",
      "score": 1,
      "scoreDisplayMode": "binary",
      "details": {
        "headings": [],
        "items": [],
        "type": "table"
      }
    },
    "structured-data": {
      "id": "structured-data",
      "title": "Structured data is valid",
      "description": "Run the [Structured Data Testing Tool](https://search.google.com/structured-data/testing-tool/) and the [Structured Data Linter](http://linter.structured-data.org/) to validate structured data. [Learn more about Structured Data](https://developer.chrome.com/docs/lighthouse/seo/structured-data/).",
      "score": null,
      "scoreDisplayMode": "manual"
    },
    "frame-title": {
      "id": "frame-title",
      "title": "`<frame>` or `<iframe>` elements have a title",
      "description": "Screen reader users rely on frame titles to describe the contents of frames. [Learn more about frame titles](https://dequeuniversity.com/rules/axe/4.8/frame-title).",
      "score": null,
      "scoreDisplayMode": "notApplicable"
    },
    "aria-input-field-name": {
      "id": "aria-input-field-name",
      "title": "ARIA input fields have accessible names",
      "description": "When an input field doesn't have an accessible name, screen readers announce it with a generic name, making it unusable for users who rely on screen readers. [Learn more about input field labels](https://dequeuniversity.com/rules/axe/4.8/aria-input-field-name).",
      "score": null,
      "scoreDisplayMode": "notApplicable"
    },
    "first-contentful-paint": {
      "id": "first-contentful-paint",
      "title": "First Contentful Paint",
      "description": "First Contentful Paint marks the time at which the first text or image is painted. [Learn more about the First Contentful Paint metric](https://developer.chrome.com/docs/lighthouse/performance/first-contentful-paint/).",
      "score": 1,
      "scoreDisplayMode": "numeric",
      "displayValue": "1.1 s",
      "numericValue": 1051,
      "numericUnit": "millisecond"
    },
    "dom-size": {
      "id": "dom-size",
      "title": "Avoids an excessive DOM size",
      "description": "A large DOM will increase memory usage, cause longer [style calculations](https://developers.google.com/web/fundamentals/performance/rendering/reduce-the-scope-and-complexity-of-style-calculations), and produce costly [layout reflows](https://developers.google.com/speed/articles/reflow). [Learn how to avoid an excessive DOM size](https://developer.chrome.com/docs/lighthouse/performance/dom-size/).",
      "score": 1,
      "scoreDisplayMode": "informative",
      "displayValue": "286 elements",
      "details": {
        "type": "table",
        "headings": [
          {
            "label": "Statistic",
            "valueType": "text",
            "key": "statistic"
          },
          {
            "key": "node",
            "valueType": "node",
            "label": "Element"
          },
          {
            "valueType": "numeric",
            "label": "Value",
            "key": "value"
          }
        ],
        "items": [
          {
            "statistic": "Total DOM Elements",
            "value": {
              "type": "numeric",
              "value": 286,
              "granularity": 1
            }
          },
          {
            "node": {
              "path": "1,HTML,1,BODY,3,MAIN,1,SECTION,1,SECTION,0,DIV,0,DIV,0,DIV,0,DIV,0,H1,1,SPAN",
              "snippet": "<span>",
              "nodeLabel": "Criando aplicações responsivas e intuitivas!",
              "selector": "div.topo-conteudo > div.txt-topo-site > h1 > span",
              "boundingRect": {
                "bottom": 650,
                "left": 34,
                "right": 352,
                "top": 524,
                "height": 126,
                "width": 318
              },
              "type": "node",
              "lhId": "1-64-SPAN"
            },
            "statistic": "Maximum DOM Depth",
            "value": {
              "value": 10,
              "granularity": 1,
              "type": "numeric"
            }
          },
          {
            "statistic": "Maximum Child Elements",
            "value": {
              "granularity": 1,
              "type": "numeric",
              "value": 11
            },
            "node": {
              "nodeLabel": "body.dark-mode",
              "type": "node",
              "path": "1,HTML,1,BODY",
              "boundingRect": {
                "left": 0,
                "bottom": 823,
                "top": 0,
                "right": 412,
                "width": 412,
                "height": 823
              },
              "selector": "body.dark-mode",
              "snippet": "<body class=\"dark-mode\">",
              "lhId": "1-65-BODY"
            }
          }
        ]
      },
      "numericValue": 286,
      "numericUnit": "element"
    },
    "themed-omnibox": {
      "id": "themed-omnibox",
      "title": "Sets a theme color for the address bar.",
      "description": "The browser address bar can be themed to match your site. [Learn more about theming the address bar](https://developer.chrome.com/docs/lighthouse/pwa/themed-omnibox/).",
      "score": 1,
      "scoreDisplayMode": "binary",
      "details": {
        "type": "debugdata",
        "items": [
          {
            "hasPWADisplayValue": true,
            "hasBackgroundColor": true,
            "hasMaskableIcon": false,
            "hasName": true,
            "hasStartUrl": true,
            "fetchesIcon": true,
            "isParseFailure": false,
            "themeColor": "#000",
            "hasShortName": true,
            "hasIconsAtLeast144px": true,
            "hasThemeColor": true,
            "shortNameLength": true,
            "hasIconsAtLeast512px": true,
            "failures": []
          }
        ]
      }
    },
    "tap-targets": {
      "id": "tap-targets",
      "title": "Tap targets are sized appropriately",
      "description": "Interactive elements like buttons and links should be large enough (48x48px), or have enough space around them, to be easy enough to tap without overlapping onto other elements. [Learn more about tap targets](https://developer.chrome.com/docs/lighthouse/seo/tap-targets/).",
      "score": 1,
      "scoreDisplayMode": "binary",
      "displayValue": "100% appropriately sized tap targets",
      "details": {
        "headings": [],
        "items": [],
        "type": "table"
      }
    },
    "prioritize-lcp-image": {
      "id": "prioritize-lcp-image",
      "title": "Preload Largest Contentful Paint image",
      "description": "If the LCP element is dynamically added to the page, you should preload the image in order to improve LCP. [Learn more about preloading LCP elements](https://web.dev/articles/optimize-lcp#optimize_when_the_resource_is_discovered).",
      "score": null,
      "scoreDisplayMode": "notApplicable"
    },
    "uses-text-compression": {
      "id": "uses-text-compression",
      "title": "Enable text compression",
      "description": "Text-based resources should be served with compression (gzip, deflate or brotli) to minimize total network bytes. [Learn more about text compression](https://developer.chrome.com/docs/lighthouse/performance/uses-text-compression/).",
      "score": 1,
      "scoreDisplayMode": "metricSavings",
      "details": {
        "sortedBy": [
          "wastedBytes"
        ],
        "overallSavingsBytes": 0,
        "items": [],
        "headings": [],
        "overallSavingsMs": 0,
        "type": "opportunity",
        "debugData": {
          "metricSavings": {
            "LCP": 0,
            "FCP": 0
          },
          "type": "debugdata"
        }
      },
      "numericValue": 0,
      "numericUnit": "millisecond"
    },
    "aria-dialog-name": {
      "id": "aria-dialog-name",
      "title": "Elements with `role=\"dialog\"` or `role=\"alertdialog\"` have accessible names.",
      "description": "ARIA dialog elements without accessible names may prevent screen readers users from discerning the purpose of these elements. [Learn how to make ARIA dialog elements more accessible](https://dequeuniversity.com/rules/axe/4.8/aria-dialog-name).",
      "score": null,
      "scoreDisplayMode": "notApplicable"
    },
    "layout-shift-elements": {
      "id": "layout-shift-elements",
      "title": "Avoid large layout shifts",
      "description": "These DOM elements were most affected by layout shifts. Some layout shifts may not be included in the CLS metric value due to [windowing](https://web.dev/articles/cls#what_is_cls). [Learn how to improve CLS](https://web.dev/articles/optimize-cls)",
      "score": null,
      "scoreDisplayMode": "notApplicable",
      "details": {
        "headings": [],
        "type": "table",
        "items": []
      }
    },
    "heading-order": {
      "id": "heading-order",
      "title": "Heading elements appear in a sequentially-descending order",
      "description": "Properly ordered headings that do not skip levels convey the semantic structure of the page, making it easier to navigate and understand when using assistive technologies. [Learn more about heading order](https://dequeuniversity.com/rules/axe/4.8/heading-order).",
      "score": 1,
      "scoreDisplayMode": "binary",
      "details": {
        "type": "table",
        "headings": [],
        "items": []
      }
    },
    "total-byte-weight": {
      "id": "total-byte-weight",
      "title": "Avoids enormous network payloads",
      "description": "Large network payloads cost users real money and are highly correlated with long load times. [Learn how to reduce payload sizes](https://developer.chrome.com/docs/lighthouse/performance/total-byte-weight/).",
      "score": 1,
      "scoreDisplayMode": "informative",
      "displayValue": "Total size was 210 KiB",
      "details": {
        "sortedBy": [
          "totalBytes"
        ],
        "items": [
          {
            "totalBytes": 81349,
            "url": "https://daniels436.github.io/img/ma-web-mobile-eventos-venda-ingresos.webp"
          },
          {
            "url": "https://daniels436.github.io/img/Daniel-P-Souza2.jpg",
            "totalBytes": 15766
          },
          {
            "url": "https://daniels436.github.io/img/economia-list.png",
            "totalBytes": 10651
          },
          {
            "totalBytes": 10413,
            "url": "https://daniels436.github.io/img/personal-consult.png"
          },
          {
            "url": "https://daniels436.github.io/img/Daniel-P-Souza-02-formacao.jpg",
            "totalBytes": 10270
          },
          {
            "url": "https://daniels436.github.io/img/servicos-%20web-page.png",
            "totalBytes": 9554
          },
          {
            "url": "https://daniels436.github.io/img/seo-servicos.png",
            "totalBytes": 8693
          },
          {
            "url": "https://daniels436.github.io/",
            "totalBytes": 7822
          },
          {
            "url": "https://daniels436.github.io/",
            "totalBytes": 7820
          },
          {
            "url": "https://daniels436.github.io/img/CODEPEN.png",
            "totalBytes": 7537
          }
        ],
        "headings": [
          {
            "key": "url",
            "label": "URL",
            "valueType": "url"
          },
          {
            "valueType": "bytes",
            "key": "totalBytes",
            "label": "Transfer Size"
          }
        ],
        "type": "table"
      },
      "numericValue": 215140,
      "numericUnit": "byte"
    },
    "managed-focus": {
      "id": "managed-focus",
      "title": "The user's focus is directed to new content added to the page",
      "description": "If new content, such as a dialog, is added to the page, the user's focus is directed to it. [Learn how to direct focus to new content](https://developer.chrome.com/docs/lighthouse/accessibility/managed-focus/).",
      "score": null,
      "scoreDisplayMode": "manual"
    },
    "aria-allowed-attr": {
      "id": "aria-allowed-attr",
      "title": "`[aria-*]` attributes match their roles",
      "description": "Each ARIA `role` supports a specific subset of `aria-*` attributes. Mismatching these invalidates the `aria-*` attributes. [Learn how to match ARIA attributes to their roles](https://dequeuniversity.com/rules/axe/4.8/aria-allowed-attr).",
      "score": null,
      "scoreDisplayMode": "notApplicable"
    },
    "accesskeys": {
      "id": "accesskeys",
      "title": "`[accesskey]` values are unique",
      "description": "Access keys let users quickly focus a part of the page. For proper navigation, each access key must be unique. [Learn more about access keys](https://dequeuniversity.com/rules/axe/4.8/accesskeys).",
      "score": null,
      "scoreDisplayMode": "notApplicable"
    },
    "uses-optimized-images": {
      "id": "uses-optimized-images",
      "title": "Efficiently encode images",
      "description": "Optimized images load faster and consume less cellular data. [Learn how to efficiently encode images](https://developer.chrome.com/docs/lighthouse/performance/uses-optimized-images/).",
      "score": 1,
      "scoreDisplayMode": "metricSavings",
      "details": {
        "overallSavingsBytes": 0,
        "sortedBy": [
          "wastedBytes"
        ],
        "items": [],
        "debugData": {
          "metricSavings": {
            "FCP": 0,
            "LCP": 0
          },
          "type": "debugdata"
        },
        "headings": [],
        "overallSavingsMs": 0,
        "type": "opportunity"
      },
      "warnings": [],
      "numericValue": 0,
      "numericUnit": "millisecond"
    },
    "uses-long-cache-ttl": {
      "id": "uses-long-cache-ttl",
      "title": "Serve static assets with an efficient cache policy",
      "description": "A long cache lifetime can speed up repeat visits to your page. [Learn more about efficient cache policies](https://developer.chrome.com/docs/lighthouse/performance/uses-long-cache-ttl/).",
      "score": 0.5,
      "scoreDisplayMode": "metricSavings",
      "displayValue": "24 resources found",
      "details": {
        "sortedBy": [
          "totalBytes"
        ],
        "skipSumming": [
          "cacheLifetimeMs"
        ],
        "summary": {
          "wastedBytes": 190041.5
        },
        "headings": [
          {
            "key": "url",
            "label": "URL",
            "valueType": "url"
          },
          {
            "displayUnit": "duration",
            "valueType": "ms",
            "key": "cacheLifetimeMs",
            "label": "Cache TTL"
          },
          {
            "displayUnit": "kb",
            "label": "Transfer Size",
            "valueType": "bytes",
            "granularity": 1,
            "key": "totalBytes"
          }
        ],
        "type": "table",
        "items": [
          {
            "cacheHitProbability": 0.08333333333333333,
            "debugData": {
              "max-age": 600,
              "type": "debugdata"
            },
            "url": "https://daniels436.github.io/img/ma-web-mobile-eventos-venda-ingresos.webp",
            "wastedBytes": 74569.91666666666,
            "cacheLifetimeMs": 600000,
            "totalBytes": 81349
          },
          {
            "debugData": {
              "max-age": 600,
              "type": "debugdata"
            },
            "wastedBytes": 14452.166666666666,
            "cacheHitProbability": 0.08333333333333333,
            "totalBytes": 15766,
            "url": "https://daniels436.github.io/img/Daniel-P-Souza2.jpg",
            "cacheLifetimeMs": 600000
          },
          {
            "debugData": {
              "max-age": 600,
              "type": "debugdata"
            },
            "wastedBytes": 9763.416666666666,
            "url": "https://daniels436.github.io/img/economia-list.png",
            "cacheLifetimeMs": 600000,
            "cacheHitProbability": 0.08333333333333333,
            "totalBytes": 10651
          },
          {
            "cacheLifetimeMs": 600000,
            "debugData": {
              "max-age": 600,
              "type": "debugdata"
            },
            "cacheHitProbability": 0.08333333333333333,
            "wastedBytes": 9545.25,
            "totalBytes": 10413,
            "url": "https://daniels436.github.io/img/personal-consult.png"
          },
          {
            "totalBytes": 10270,
            "cacheLifetimeMs": 600000,
            "debugData": {
              "type": "debugdata",
              "max-age": 600
            },
            "cacheHitProbability": 0.08333333333333333,
            "url": "https://daniels436.github.io/img/Daniel-P-Souza-02-formacao.jpg",
            "wastedBytes": 9414.166666666666
          },
          {
            "debugData": {
              "max-age": 600,
              "type": "debugdata"
            },
            "url": "https://daniels436.github.io/img/servicos-%20web-page.png",
            "cacheHitProbability": 0.08333333333333333,
            "wastedBytes": 8757.833333333332,
            "totalBytes": 9554,
            "cacheLifetimeMs": 600000
          },
          {
            "url": "https://daniels436.github.io/img/seo-servicos.png",
            "cacheLifetimeMs": 600000,
            "totalBytes": 8693,
            "wastedBytes": 7968.583333333333,
            "cacheHitProbability": 0.08333333333333333,
            "debugData": {
              "max-age": 600,
              "type": "debugdata"
            }
          },
          {
            "cacheHitProbability": 0.08333333333333333,
            "wastedBytes": 7168.333333333333,
            "cacheLifetimeMs": 600000,
            "url": "https://daniels436.github.io/",
            "debugData": {
              "max-age": 600,
              "type": "debugdata"
            },
            "totalBytes": 7820
          },
          {
            "cacheHitProbability": 0.08333333333333333,
            "cacheLifetimeMs": 600000,
            "totalBytes": 7537,
            "debugData": {
              "type": "debugdata",
              "max-age": 600
            },
            "wastedBytes": 6908.916666666666,
            "url": "https://daniels436.github.io/img/CODEPEN.png"
          },
          {
            "url": "https://daniels436.github.io/CSS-PRINCIPAL/style-principal.css",
            "totalBytes": 6825,
            "debugData": {
              "type": "debugdata",
              "max-age": 600
            },
            "cacheLifetimeMs": 600000,
            "cacheHitProbability": 0.08333333333333333,
            "wastedBytes": 6256.25
          },
          {
            "url": "https://daniels436.github.io/CSS-PRINCIPAL/style-principal.css",
            "cacheHitProbability": 0.08333333333333333,
            "cacheLifetimeMs": 600000,
            "totalBytes": 6823,
            "wastedBytes": 6254.416666666666,
            "debugData": {
              "max-age": 600,
              "type": "debugdata"
            }
          },
          {
            "url": "https://daniels436.github.io/img/X-antigo-twitter-mobile.png",
            "debugData": {
              "max-age": 600,
              "type": "debugdata"
            },
            "cacheLifetimeMs": 600000,
            "totalBytes": 6045,
            "wastedBytes": 5541.25,
            "cacheHitProbability": 0.08333333333333333
          },
          {
            "wastedBytes": 5132.416666666666,
            "cacheLifetimeMs": 600000,
            "cacheHitProbability": 0.08333333333333333,
            "url": "https://daniels436.github.io/img/linkedin.png",
            "debugData": {
              "type": "debugdata",
              "max-age": 600
            },
            "totalBytes": 5599
          },
          {
            "totalBytes": 5416,
            "wastedBytes": 4964.666666666666,
            "debugData": {
              "max-age": 600,
              "type": "debugdata"
            },
            "cacheLifetimeMs": 600000,
            "cacheHitProbability": 0.08333333333333333,
            "url": "https://daniels436.github.io/img/GITHUB.png"
          },
          {
            "url": "https://daniels436.github.io/img/fechou.png",
            "cacheLifetimeMs": 600000,
            "wastedBytes": 2213.75,
            "cacheHitProbability": 0.08333333333333333,
            "debugData": {
              "type": "debugdata",
              "max-age": 600
            },
            "totalBytes": 2415
          },
          {
            "debugData": {
              "type": "debugdata",
              "max-age": 600
            },
            "url": "https://daniels436.github.io/CSS-PRINCIPAL/style-menu-mobile.css",
            "cacheLifetimeMs": 600000,
            "wastedBytes": 1710.5,
            "totalBytes": 1866,
            "cacheHitProbability": 0.08333333333333333
          },
          {
            "wastedBytes": 1582.1666666666665,
            "debugData": {
              "type": "debugdata",
              "max-age": 600
            },
            "url": "https://daniels436.github.io/service-worker.js",
            "cacheHitProbability": 0.08333333333333333,
            "totalBytes": 1726,
            "cacheLifetimeMs": 600000
          },
          {
            "cacheHitProbability": 0.08333333333333333,
            "wastedBytes": 1278.75,
            "totalBytes": 1395,
            "cacheLifetimeMs": 600000,
            "url": "https://daniels436.github.io/JS/slid-cel.js",
            "debugData": {
              "max-age": 600,
              "type": "debugdata"
            }
          },
          {
            "cacheLifetimeMs": 600000,
            "url": "https://daniels436.github.io/img/ico-nav-abrir.ico",
            "totalBytes": 1365,
            "cacheHitProbability": 0.08333333333333333,
            "debugData": {
              "type": "debugdata",
              "max-age": 600
            },
            "wastedBytes": 1251.25
          },
          {
            "cacheHitProbability": 0.08333333333333333,
            "totalBytes": 1293,
            "cacheLifetimeMs": 600000,
            "url": "https://daniels436.github.io/JS/form-pattern.js",
            "wastedBytes": 1185.25,
            "debugData": {
              "type": "debugdata",
              "max-age": 600
            }
          },
          {
            "url": "https://daniels436.github.io/files/process-form.php",
            "cacheLifetimeMs": 600000,
            "cacheHitProbability": 0.08333333333333333,
            "debugData": {
              "type": "debugdata",
              "max-age": 600
            },
            "totalBytes": 1258,
            "wastedBytes": 1153.1666666666665
          },
          {
            "cacheHitProbability": 0.08333333333333333,
            "debugData": {
              "type": "debugdata",
              "max-age": 600
            },
            "totalBytes": 1155,
            "cacheLifetimeMs": 600000,
            "url": "https://daniels436.github.io/JS/menu-mobile-script.js",
            "wastedBytes": 1058.75
          },
          {
            "wastedBytes": 1015.6666666666666,
            "cacheHitProbability": 0.08333333333333333,
            "totalBytes": 1108,
            "cacheLifetimeMs": 600000,
            "url": "https://daniels436.github.io/install-prompt.js",
            "debugData": {
              "type": "debugdata",
              "max-age": 600
            }
          },
          {
            "cacheHitProbability": 0.08333333333333333,
            "wastedBytes": 894.6666666666666,
            "totalBytes": 976,
            "url": "https://daniels436.github.io/index.js",
            "debugData": {
              "type": "debugdata",
              "max-age": 600
            },
            "cacheLifetimeMs": 600000
          }
        ]
      },
      "numericValue": 190041.5,
      "numericUnit": "byte"
    },
    "csp-xss": {
      "id": "csp-xss",
      "title": "Ensure CSP is effective against XSS attacks",
      "description": "A strong Content Security Policy (CSP) significantly reduces the risk of cross-site scripting (XSS) attacks. [Learn how to use a CSP to prevent XSS](https://developer.chrome.com/docs/lighthouse/best-practices/csp-xss/)",
      "score": 1,
      "scoreDisplayMode": "informative",
      "details": {
        "headings": [
          {
            "key": "description",
            "label": "Description",
            "subItemsHeading": {
              "key": "description"
            },
            "valueType": "text"
          },
          {
            "subItemsHeading": {
              "key": "directive"
            },
            "label": "Directive",
            "key": "directive",
            "valueType": "code"
          },
          {
            "valueType": "text",
            "subItemsHeading": {
              "key": "severity"
            },
            "label": "Severity",
            "key": "severity"
          }
        ],
        "items": [
          {
            "severity": "High",
            "description": "No CSP found in enforcement mode"
          }
        ],
        "type": "table"
      }
    },
    "table-fake-caption": {
      "id": "table-fake-caption",
      "title": "Tables use `<caption>` instead of cells with the `[colspan]` attribute to indicate a caption.",
      "description": "Screen readers have features to make navigating tables easier. Ensuring that tables use the actual caption element instead of cells with the `[colspan]` attribute may improve the experience for screen reader users. [Learn more about captions](https://dequeuniversity.com/rules/axe/4.8/table-fake-caption).",
      "score": null,
      "scoreDisplayMode": "notApplicable"
    },
    "aria-valid-attr-value": {
      "id": "aria-valid-attr-value",
      "title": "`[aria-*]` attributes have valid values",
      "description": "Assistive technologies, like screen readers, can't interpret ARIA attributes with invalid values. [Learn more about valid values for ARIA attributes](https://dequeuniversity.com/rules/axe/4.8/aria-valid-attr-value).",
      "score": null,
      "scoreDisplayMode": "notApplicable"
    },
    "metrics": {
      "id": "metrics",
      "title": "Metrics",
      "description": "Collects all available metrics.",
      "score": 1,
      "scoreDisplayMode": "informative",
      "details": {
        "type": "debugdata",
        "items": [
          {
            "observedLargestContentfulPaint": 236,
            "observedDomContentLoaded": 236,
            "observedFirstVisualChange": 241,
            "observedLoadTs": 223867568489,
            "observedCumulativeLayoutShift": 0,
            "observedLargestContentfulPaintTs": 223867040132,
            "observedDomContentLoadedTs": 223867039774,
            "observedLastVisualChangeTs": 223869827890,
            "observedFirstContentfulPaint": 236,
            "observedLastVisualChange": 3024,
            "observedLargestContentfulPaintAllFramesTs": 223867040132,
            "totalBlockingTime": 22,
            "timeToFirstByte": 658,
            "observedTimeOriginTs": 223866803890,
            "observedCumulativeLayoutShiftMainFrame": 0,
            "cumulativeLayoutShiftMainFrame": 0,
            "observedTraceEnd": 3079,
            "observedLargestContentfulPaintAllFrames": 236,
            "cumulativeLayoutShift": 0,
            "interactive": 1351,
            "speedIndex": 1075,
            "observedSpeedIndex": 298,
            "observedFirstVisualChangeTs": 223867044890,
            "observedNavigationStart": 0,
            "firstMeaningfulPaint": 1051,
            "observedFirstContentfulPaintAllFrames": 236,
            "observedTraceEndTs": 223869883054,
            "observedFirstContentfulPaintAllFramesTs": 223867040132,
            "observedLoad": 765,
            "largestContentfulPaint": 1576,
            "observedFirstContentfulPaintTs": 223867040132,
            "observedNavigationStartTs": 223866803890,
            "observedFirstMeaningfulPaint": 236,
            "firstContentfulPaint": 1051,
            "observedSpeedIndexTs": 223867102291,
            "maxPotentialFID": 93,
            "observedFirstPaintTs": 223867040132,
            "observedTimeOrigin": 0,
            "observedFirstMeaningfulPaintTs": 223867040132,
            "observedFirstPaint": 236
          },
          {
            "lcpInvalidated": false
          }
        ]
      },
      "numericValue": 1351,
      "numericUnit": "millisecond"
    },
    "modern-image-formats": {
      "id": "modern-image-formats",
      "title": "Serve images in next-gen formats",
      "description": "Image formats like WebP and AVIF often provide better compression than PNG or JPEG, which means faster downloads and less data consumption. [Learn more about modern image formats](https://developer.chrome.com/docs/lighthouse/performance/uses-webp-images/).",
      "score": 0,
      "scoreDisplayMode": "metricSavings",
      "displayValue": "Potential savings of 25 KiB",
      "details": {
        "items": [
          {
            "totalBytes": 15048,
            "wastedWebpBytes": 7240,
            "isCrossOrigin": false,
            "fromProtocol": true,
            "wastedBytes": 9004.3,
            "url": "https://daniels436.github.io/img/Daniel-P-Souza2.jpg",
            "node": {
              "selector": "div.flexo > div.topo-conteudo > div.img-topo-site > img.img-movimento",
              "lhId": "1-74-IMG",
              "boundingRect": {
                "left": 110,
                "width": 193,
                "height": 193,
                "bottom": 333,
                "right": 303,
                "top": 140
              },
              "path": "1,HTML,1,BODY,3,MAIN,1,SECTION,1,SECTION,0,DIV,0,DIV,0,DIV,1,DIV,0,IMG",
              "snippet": "<img src=\"img/Daniel-P-Souza2.jpg\" alt=\"\" class=\"img-movimento\">",
              "type": "node",
              "nodeLabel": "div.flexo > div.topo-conteudo > div.img-topo-site > img.img-movimento"
            }
          },
          {
            "url": "https://daniels436.github.io/img/personal-consult.png",
            "wastedWebpBytes": 7790,
            "fromProtocol": true,
            "wastedBytes": 8441,
            "totalBytes": 9720,
            "node": {
              "boundingRect": {
                "top": 2529,
                "left": 175,
                "height": 63,
                "width": 63,
                "bottom": 2592,
                "right": 238
              },
              "selector": "div.servicos-box > a > i.ico-04 > img",
              "path": "1,HTML,1,BODY,3,MAIN,3,SECTION,0,DIV,1,DIV,3,DIV,0,A,0,I,0,IMG",
              "snippet": "<img src=\"img/personal-consult.png\" alt=\" Ícone de serviço de personal-consult, Suporte e Consultoria\">",
              "type": "node",
              "lhId": "1-78-IMG",
              "nodeLabel": " Ícone de serviço de personal-consult, Suporte e Consultoria"
            },
            "isCrossOrigin": false
          },
          {
            "wastedBytes": 8414.4,
            "node": {
              "lhId": "1-77-IMG",
              "path": "1,HTML,1,BODY,3,MAIN,3,SECTION,0,DIV,1,DIV,2,DIV,0,A,0,I,0,IMG",
              "snippet": "<img src=\"img/economia-list.png\" alt=\"Ícone de serviço de Gestão de Projetos\">",
              "boundingRect": {
                "bottom": 2172,
                "height": 63,
                "left": 175,
                "right": 238,
                "top": 2109,
                "width": 63
              },
              "nodeLabel": "Ícone de serviço de Gestão de Projetos",
              "selector": "div.servicos-box > a > i.ico-03 > img",
              "type": "node"
            },
            "fromProtocol": true,
            "wastedWebpBytes": 7442,
            "url": "https://daniels436.github.io/img/economia-list.png",
            "totalBytes": 9936,
            "isCrossOrigin": false
          }
        ],
        "debugData": {
          "metricSavings": {
            "FCP": 0,
            "LCP": 150
          },
          "type": "debugdata"
        },
        "headings": [
          {
            "valueType": "node",
            "key": "node"
          },
          {
            "label": "URL",
            "key": "url",
            "valueType": "url"
          },
          {
            "key": "totalBytes",
            "label": "Resource Size",
            "valueType": "bytes"
          },
          {
            "label": "Potential Savings",
            "key": "wastedBytes",
            "valueType": "bytes"
          }
        ],
        "overallSavingsBytes": 25859.699999999997,
        "type": "opportunity",
        "sortedBy": [
          "wastedBytes"
        ],
        "overallSavingsMs": 150
      },
      "warnings": [],
      "numericValue": 150,
      "numericUnit": "millisecond"
    },
    "custom-controls-labels": {
      "id": "custom-controls-labels",
      "title": "Custom controls have associated labels",
      "description": "Custom interactive controls have associated labels, provided by aria-label or aria-labelledby. [Learn more about custom controls and labels](https://developer.chrome.com/docs/lighthouse/accessibility/custom-controls-labels/).",
      "score": null,
      "scoreDisplayMode": "manual"
    },
    "meta-viewport": {
      "id": "meta-viewport",
      "title": "`[user-scalable=\"no\"]` is not used in the `<meta name=\"viewport\">` element and the `[maximum-scale]` attribute is not less than 5.",
      "description": "Disabling zooming is problematic for users with low vision who rely on screen magnification to properly see the contents of a web page. [Learn more about the viewport meta tag](https://dequeuniversity.com/rules/axe/4.8/meta-viewport).",
      "score": 1,
      "scoreDisplayMode": "binary",
      "details": {
        "type": "table",
        "headings": [],
        "items": []
      }
    },
    "unminified-javascript": {
      "id": "unminified-javascript",
      "title": "Minify JavaScript",
      "description": "Minifying JavaScript files can reduce payload sizes and script parse time. [Learn how to minify JavaScript](https://developer.chrome.com/docs/lighthouse/performance/unminified-javascript/).",
      "score": 1,
      "scoreDisplayMode": "metricSavings",
      "details": {
        "items": [],
        "type": "opportunity",
        "overallSavingsBytes": 0,
        "overallSavingsMs": 0,
        "debugData": {
          "type": "debugdata",
          "metricSavings": {
            "FCP": 0,
            "LCP": 0
          }
        },
        "headings": [],
        "sortedBy": [
          "wastedBytes"
        ]
      },
      "warnings": [],
      "numericValue": 0,
      "numericUnit": "millisecond"
    },
    "largest-contentful-paint-element": {
      "id": "largest-contentful-paint-element",
      "title": "Largest Contentful Paint element",
      "description": "This is the largest contentful element painted within the viewport. [Learn more about the Largest Contentful Paint element](https://developer.chrome.com/docs/lighthouse/performance/lighthouse-largest-contentful-paint/)",
      "score": 1,
      "scoreDisplayMode": "informative",
      "displayValue": "1,580 ms",
      "details": {
        "items": [
          {
            "headings": [
              {
                "label": "Element",
                "valueType": "node",
                "key": "node"
              }
            ],
            "type": "table",
            "items": [
              {
                "node": {
                  "nodeLabel": "Potencialize o engajamento e as conversões. Invista em sistemas responsivos que…",
                  "type": "node",
                  "lhId": "page-0-P",
                  "path": "1,HTML,1,BODY,3,MAIN,1,SECTION,1,SECTION,0,DIV,0,DIV,0,DIV,0,DIV,1,P",
                  "selector": "div.flexo > div.topo-conteudo > div.txt-topo-site > p",
                  "boundingRect": {
                    "width": 313,
                    "height": 238,
                    "top": 690,
                    "bottom": 928,
                    "left": 34,
                    "right": 346
                  },
                  "snippet": "<p>"
                }
              }
            ]
          },
          {
            "type": "table",
            "items": [
              {
                "percent": "42%",
                "phase": "TTFB",
                "timing": 658
              },
              {
                "phase": "Load Delay",
                "timing": 0,
                "percent": "0%"
              },
              {
                "phase": "Load Time",
                "percent": "0%",
                "timing": 0
              },
              {
                "percent": "58%",
                "phase": "Render Delay",
                "timing": 918
              }
            ],
            "headings": [
              {
                "label": "Phase",
                "valueType": "text",
                "key": "phase"
              },
              {
                "valueType": "text",
                "label": "% of LCP",
                "key": "percent"
              },
              {
                "key": "timing",
                "valueType": "ms",
                "label": "Timing"
              }
            ]
          }
        ],
        "type": "list"
      }
    },
    "aria-roles": {
      "id": "aria-roles",
      "title": "`[role]` values are valid",
      "description": "ARIA roles must have valid values in order to perform their intended accessibility functions. [Learn more about valid ARIA roles](https://dequeuniversity.com/rules/axe/4.8/aria-roles).",
      "score": null,
      "scoreDisplayMode": "notApplicable"
    },
    "tabindex": {
      "id": "tabindex",
      "title": "No element has a `[tabindex]` value greater than 0",
      "description": "A value greater than 0 implies an explicit navigation ordering. Although technically valid, this often creates frustrating experiences for users who rely on assistive technologies. [Learn more about the `tabindex` attribute](https://dequeuniversity.com/rules/axe/4.8/tabindex).",
      "score": null,
      "scoreDisplayMode": "notApplicable"
    },
    "final-screenshot": {
      "id": "final-screenshot",
      "title": "Final Screenshot",
      "description": "The last screenshot captured of the pageload.",
      "score": 1,
      "scoreDisplayMode": "informative",
      "details": {
        "type": "screenshot",
        "timestamp": 223869828182,
        "data": "data:image/jpeg;base64,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",
        "timing": 3024
      }
    },
    "aria-valid-attr": {
      "id": "aria-valid-attr",
      "title": "`[aria-*]` attributes are valid and not misspelled",
      "description": "Assistive technologies, like screen readers, can't interpret ARIA attributes with invalid names. [Learn more about valid ARIA attributes](https://dequeuniversity.com/rules/axe/4.8/aria-valid-attr).",
      "score": null,
      "scoreDisplayMode": "notApplicable"
    },
    "unused-javascript": {
      "id": "unused-javascript",
      "title": "Reduce unused JavaScript",
      "description": "Reduce unused JavaScript and defer loading scripts until they are required to decrease bytes consumed by network activity. [Learn how to reduce unused JavaScript](https://developer.chrome.com/docs/lighthouse/performance/unused-javascript/).",
      "score": 1,
      "scoreDisplayMode": "metricSavings",
      "details": {
        "overallSavingsBytes": 0,
        "items": [],
        "debugData": {
          "type": "debugdata",
          "metricSavings": {
            "FCP": 0,
            "LCP": 0
          }
        },
        "headings": [],
        "type": "opportunity",
        "overallSavingsMs": 0,
        "sortedBy": [
          "wastedBytes"
        ]
      },
      "numericValue": 0,
      "numericUnit": "millisecond"
    },
    "listitem": {
      "id": "listitem",
      "title": "List items (`<li>`) are contained within `<ul>`, `<ol>` or `<menu>` parent elements",
      "description": "Screen readers require list items (`<li>`) to be contained within a parent `<ul>`, `<ol>` or `<menu>` to be announced properly. [Learn more about proper list structure](https://dequeuniversity.com/rules/axe/4.8/listitem).",
      "score": 1,
      "scoreDisplayMode": "binary",
      "details": {
        "items": [],
        "type": "table",
        "headings": []
      }
    },
    "select-name": {
      "id": "select-name",
      "title": "Select elements have associated label elements.",
      "description": "Form elements without effective labels can create frustrating experiences for screen reader users. [Learn more about the `select` element](https://dequeuniversity.com/rules/axe/4.8/select-name).",
      "score": null,
      "scoreDisplayMode": "notApplicable"
    },
    "aria-required-attr": {
      "id": "aria-required-attr",
      "title": "`[role]`s have all required `[aria-*]` attributes",
      "description": "Some ARIA roles have required attributes that describe the state of the element to screen readers. [Learn more about roles and required attributes](https://dequeuniversity.com/rules/axe/4.8/aria-required-attr).",
      "score": null,
      "scoreDisplayMode": "notApplicable"
    },
    "table-duplicate-name": {
      "id": "table-duplicate-name",
      "title": "Tables have different content in the summary attribute and `<caption>`.",
      "description": "The summary attribute should describe the table structure, while `<caption>` should have the onscreen title. Accurate table mark-up helps users of screen readers. [Learn more about summary and caption](https://dequeuniversity.com/rules/axe/4.8/table-duplicate-name).",
      "score": null,
      "scoreDisplayMode": "notApplicable"
    },
    "link-name": {
      "id": "link-name",
      "title": "Links do not have a discernible name",
      "description": "Link text (and alternate text for images, when used as links) that is discernible, unique, and focusable improves the navigation experience for screen reader users. [Learn how to make links accessible](https://dequeuniversity.com/rules/axe/4.8/link-name).",
      "score": 0,
      "scoreDisplayMode": "binary",
      "details": {
        "items": [
          {
            "node": {
              "selector": "header#home > div.interface > div.contato > a",
              "boundingRect": {
                "width": 18,
                "top": 0,
                "left": 86,
                "height": 26,
                "right": 104,
                "bottom": 26
              },
              "nodeLabel": "esse botao leva para o rodapé",
              "type": "node",
              "lhId": "1-0-A",
              "explanation": "Fix all of the following:\n  Element is in tab order and does not have accessible text\n\nFix any of the following:\n  Element does not have text that is visible to screen readers\n  aria-label attribute does not exist or is empty\n  aria-labelledby attribute does not exist, references elements that do not exist or references elements that are empty\n  Element has no title attribute",
              "path": "1,HTML,1,BODY,2,HEADER,0,DIV,4,DIV,0,A",
              "snippet": "<a href=\"#rodape\" alt=\"esse botao leva para o rodapé\">"
            }
          }
        ],
        "debugData": {
          "type": "debugdata",
          "tags": [
            "cat.name-role-value",
            "wcag2a",
            "wcag244",
            "wcag412",
            "section508",
            "section508.22.a",
            "TTv5",
            "TT6.a",
            "EN-301-549",
            "EN-9.2.4.4",
            "EN-9.4.1.2",
            "ACT"
          ],
          "impact": "serious"
        },
        "type": "table",
        "headings": [
          {
            "key": "node",
            "valueType": "node",
            "subItemsHeading": {
              "key": "relatedNode",
              "valueType": "node"
            },
            "label": "Failing Elements"
          }
        ]
      }
    },
    "paste-preventing-inputs": {
      "id": "paste-preventing-inputs",
      "title": "Allows users to paste into input fields",
      "description": "Preventing input pasting is a bad practice for the UX, and weakens security by blocking password managers.[Learn more about user-friendly input fields](https://developer.chrome.com/docs/lighthouse/best-practices/paste-preventing-inputs/).",
      "score": 1,
      "scoreDisplayMode": "binary",
      "details": {
        "headings": [],
        "type": "table",
        "items": []
      }
    },
    "bootup-time": {
      "id": "bootup-time",
      "title": "JavaScript execution time",
      "description": "Consider reducing the time spent parsing, compiling, and executing JS. You may find delivering smaller JS payloads helps with this. [Learn how to reduce Javascript execution time](https://developer.chrome.com/docs/lighthouse/performance/bootup-time/).",
      "score": 1,
      "scoreDisplayMode": "informative",
      "displayValue": "0.0 s",
      "details": {
        "summary": {
          "wastedMs": 14.312000000000001
        },
        "items": [
          {
            "url": "https://daniels436.github.io/",
            "total": 824.2440000000024,
            "scripting": 6.212,
            "scriptParseCompile": 1.1560000000000001
          },
          {
            "scriptParseCompile": 0,
            "total": 177.50400000000002,
            "url": "Unattributable",
            "scripting": 6.944000000000001
          }
        ],
        "type": "table",
        "sortedBy": [
          "total"
        ],
        "headings": [
          {
            "key": "url",
            "label": "URL",
            "valueType": "url"
          },
          {
            "key": "total",
            "valueType": "ms",
            "granularity": 1,
            "label": "Total CPU Time"
          },
          {
            "key": "scripting",
            "label": "Script Evaluation",
            "granularity": 1,
            "valueType": "ms"
          },
          {
            "key": "scriptParseCompile",
            "label": "Script Parse",
            "granularity": 1,
            "valueType": "ms"
          }
        ]
      },
      "numericValue": 14.312000000000001,
      "numericUnit": "millisecond"
    },
    "link-text": {
      "id": "link-text",
      "title": "Links have descriptive text",
      "description": "Descriptive link text helps search engines understand your content. [Learn how to make links more accessible](https://developer.chrome.com/docs/lighthouse/seo/link-text/).",
      "score": 1,
      "scoreDisplayMode": "binary",
      "details": {
        "headings": [],
        "items": [],
        "type": "table"
      }
    },
    "notification-on-start": {
      "id": "notification-on-start",
      "title": "Avoids requesting the notification permission on page load",
      "description": "Users are mistrustful of or confused by sites that request to send notifications without context. Consider tying the request to user gestures instead. [Learn more about responsibly getting permission for notifications](https://developer.chrome.com/docs/lighthouse/best-practices/notification-on-start/).",
      "score": 1,
      "scoreDisplayMode": "binary",
      "details": {
        "type": "table",
        "headings": [],
        "items": []
      }
    },
    "focus-traps": {
      "id": "focus-traps",
      "title": "User focus is not accidentally trapped in a region",
      "description": "A user can tab into and out of any control or region without accidentally trapping their focus. [Learn how to avoid focus traps](https://developer.chrome.com/docs/lighthouse/accessibility/focus-traps/).",
      "score": null,
      "scoreDisplayMode": "manual"
    },
    "server-response-time": {
      "id": "server-response-time",
      "title": "Initial server response time was short",
      "description": "Keep the server response time for the main document short because all other requests depend on it. [Learn more about the Time to First Byte metric](https://developer.chrome.com/docs/lighthouse/performance/time-to-first-byte/).",
      "score": 1,
      "scoreDisplayMode": "informative",
      "displayValue": "Root document took 50 ms",
      "details": {
        "headings": [
          {
            "key": "url",
            "label": "URL",
            "valueType": "url"
          },
          {
            "key": "responseTime",
            "label": "Time Spent",
            "valueType": "timespanMs"
          }
        ],
        "overallSavingsMs": 0,
        "type": "opportunity",
        "items": [
          {
            "responseTime": 50,
            "url": "https://daniels436.github.io/"
          }
        ]
      },
      "numericValue": 50,
      "numericUnit": "millisecond"
    },
    "duplicated-javascript": {
      "id": "duplicated-javascript",
      "title": "Remove duplicate modules in JavaScript bundles",
      "description": "Remove large, duplicate JavaScript modules from bundles to reduce unnecessary bytes consumed by network activity. ",
      "score": 1,
      "scoreDisplayMode": "metricSavings",
      "details": {
        "sortedBy": [
          "wastedBytes"
        ],
        "overallSavingsBytes": 0,
        "items": [],
        "debugData": {
          "metricSavings": {
            "LCP": 0,
            "FCP": 0
          },
          "type": "debugdata"
        },
        "type": "opportunity",
        "overallSavingsMs": 0,
        "headings": []
      },
      "numericValue": 0,
      "numericUnit": "millisecond"
    },
    "pwa-each-page-has-url": {
      "id": "pwa-each-page-has-url",
      "title": "Each page has a URL",
      "description": "Ensure individual pages are deep linkable via URL and that URLs are unique for the purpose of shareability on social media. [Learn more about providing deep links](https://developer.chrome.com/docs/lighthouse/pwa/pwa-each-page-has-url/).",
      "score": null,
      "scoreDisplayMode": "manual"
    },
    "duplicate-id-aria": {
      "id": "duplicate-id-aria",
      "title": "ARIA IDs are unique",
      "description": "The value of an ARIA ID must be unique to prevent other instances from being overlooked by assistive technologies. [Learn how to fix duplicate ARIA IDs](https://dequeuniversity.com/rules/axe/4.8/duplicate-id-aria).",
      "score": null,
      "scoreDisplayMode": "notApplicable"
    },
    "target-size": {
      "id": "target-size",
      "title": "Touch targets have sufficient size and spacing.",
      "description": "Touch targets with sufficient size and spacing help users who may have difficulty targeting small controls to activate the targets. [Learn more about touch targets](https://dequeuniversity.com/rules/axe/4.8/target-size).",
      "score": null,
      "scoreDisplayMode": "notApplicable"
    },
    "dlitem": {
      "id": "dlitem",
      "title": "Definition list items are wrapped in `<dl>` elements",
      "description": "Definition list items (`<dt>` and `<dd>`) must be wrapped in a parent `<dl>` element to ensure that screen readers can properly announce them. [Learn how to structure definition lists correctly](https://dequeuniversity.com/rules/axe/4.8/dlitem).",
      "score": null,
      "scoreDisplayMode": "notApplicable"
    },
    "interactive": {
      "id": "interactive",
      "title": "Time to Interactive",
      "description": "Time to Interactive is the amount of time it takes for the page to become fully interactive. [Learn more about the Time to Interactive metric](https://developer.chrome.com/docs/lighthouse/performance/interactive/).",
      "score": 1,
      "scoreDisplayMode": "numeric",
      "displayValue": "1.4 s",
      "numericValue": 1351,
      "numericUnit": "millisecond"
    },
    "aria-toggle-field-name": {
      "id": "aria-toggle-field-name",
      "title": "ARIA toggle fields have accessible names",
      "description": "When a toggle field doesn't have an accessible name, screen readers announce it with a generic name, making it unusable for users who rely on screen readers. [Learn more about toggle fields](https://dequeuniversity.com/rules/axe/4.8/aria-toggle-field-name).",
      "score": null,
      "scoreDisplayMode": "notApplicable"
    },
    "network-requests": {
      "id": "network-requests",
      "title": "Network Requests",
      "description": "Lists the network requests that were made during page load.",
      "score": 1,
      "scoreDisplayMode": "informative",
      "details": {
        "headings": [
          {
            "key": "url",
            "valueType": "url",
            "label": "URL"
          },
          {
            "valueType": "text",
            "label": "Protocol",
            "key": "protocol"
          },
          {
            "granularity": 1,
            "label": "Network Request Time",
            "valueType": "ms",
            "key": "networkRequestTime"
          },
          {
            "granularity": 1,
            "label": "Network End Time",
            "valueType": "ms",
            "key": "networkEndTime"
          },
          {
            "valueType": "bytes",
            "key": "transferSize",
            "displayUnit": "kb",
            "granularity": 1,
            "label": "Transfer Size"
          },
          {
            "displayUnit": "kb",
            "label": "Resource Size",
            "valueType": "bytes",
            "granularity": 1,
            "key": "resourceSize"
          },
          {
            "label": "Status Code",
            "valueType": "text",
            "key": "statusCode"
          },
          {
            "label": "MIME Type",
            "key": "mimeType",
            "valueType": "text"
          },
          {
            "key": "resourceType",
            "valueType": "text",
            "label": "Resource Type"
          }
        ],
        "debugData": {
          "networkStartTimeTs": 223866803996,
          "type": "debugdata"
        },
        "type": "table",
        "items": [
          {
            "rendererStartTime": 0,
            "experimentalFromMainFrame": true,
            "statusCode": 200,
            "mimeType": "text/html",
            "protocol": "h2",
            "resourceSize": 27678,
            "sessionTargetType": "page",
            "networkEndTime": 78.28400000929832,
            "resourceType": "Document",
            "finished": true,
            "transferSize": 7822,
            "url": "https://daniels436.github.io/",
            "priority": "VeryHigh",
            "entity": "GitHub",
            "networkRequestTime": 1.4510000050067902
          },
          {
            "rendererStartTime": 96.46100002527237,
            "sessionTargetType": "page",
            "url": "https://daniels436.github.io/CSS-PRINCIPAL/style-principal.css",
            "entity": "GitHub",
            "resourceSize": 27273,
            "protocol": "h2",
            "statusCode": 200,
            "networkEndTime": 178.65399998426437,
            "experimentalFromMainFrame": true,
            "priority": "VeryHigh",
            "networkRequestTime": 97.12200000882149,
            "mimeType": "text/css",
            "finished": true,
            "transferSize": 6825,
            "resourceType": "Stylesheet"
          },
          {
            "finished": true,
            "experimentalFromMainFrame": true,
            "protocol": "h2",
            "sessionTargetType": "page",
            "mimeType": "text/css",
            "url": "https://daniels436.github.io/CSS-PRINCIPAL/style-menu-mobile.css",
            "networkRequestTime": 97.4210000038147,
            "resourceType": "Stylesheet",
            "rendererStartTime": 97.02399998903275,
            "entity": "GitHub",
            "statusCode": 200,
            "transferSize": 1866,
            "networkEndTime": 176.2189999818802,
            "priority": "VeryHigh",
            "resourceSize": 3459
          },
          {
            "url": "https://daniels436.github.io/img/Daniel-P-Souza2.jpg",
            "protocol": "h2",
            "resourceSize": 15048,
            "statusCode": 200,
            "rendererStartTime": 97.30300000309944,
            "priority": "Medium",
            "networkRequestTime": 97.73000001907349,
            "experimentalFromMainFrame": true,
            "resourceType": "Image",
            "finished": true,
            "sessionTargetType": "page",
            "mimeType": "image/jpeg",
            "transferSize": 15766,
            "entity": "GitHub",
            "networkEndTime": 175.40900000929832
          },
          {
            "finished": true,
            "statusCode": 200,
            "transferSize": 9554,
            "networkEndTime": 176.69200003147125,
            "networkRequestTime": 98.02300000190735,
            "experimentalFromMainFrame": true,
            "entity": "GitHub",
            "resourceSize": 8861,
            "rendererStartTime": 97.5789999961853,
            "sessionTargetType": "page",
            "url": "https://daniels436.github.io/img/servicos-%20web-page.png",
            "mimeType": "image/png",
            "priority": "Medium",
            "protocol": "h2",
            "resourceType": "Image"
          },
          {
            "entity": "GitHub",
            "networkRequestTime": 106.2950000166893,
            "resourceSize": 7976,
            "protocol": "h2",
            "networkEndTime": 183.2820000052452,
            "finished": true,
            "url": "https://daniels436.github.io/img/seo-servicos.png",
            "transferSize": 8693,
            "experimentalFromMainFrame": true,
            "resourceType": "Image",
            "rendererStartTime": 97.7969999909401,
            "priority": "Medium",
            "sessionTargetType": "page",
            "mimeType": "image/png",
            "statusCode": 200
          },
          {
            "rendererStartTime": 97.93099999427795,
            "url": "https://daniels436.github.io/img/economia-list.png",
            "transferSize": 10651,
            "resourceSize": 9936,
            "mimeType": "image/png",
            "entity": "GitHub",
            "experimentalFromMainFrame": true,
            "statusCode": 200,
            "networkRequestTime": 107.39200001955032,
            "sessionTargetType": "page",
            "finished": true,
            "networkEndTime": 191.19400000572205,
            "resourceType": "Image",
            "protocol": "h2",
            "priority": "Medium"
          },
          {
            "rendererStartTime": 98.05700001120567,
            "protocol": "h2",
            "networkRequestTime": 107.51900002360344,
            "sessionTargetType": "page",
            "priority": "Medium",
            "mimeType": "image/png",
            "resourceType": "Image",
            "experimentalFromMainFrame": true,
            "transferSize": 10413,
            "resourceSize": 9720,
            "finished": true,
            "entity": "GitHub",
            "url": "https://daniels436.github.io/img/personal-consult.png",
            "statusCode": 200,
            "networkEndTime": 177.74099999666214
          },
          {
            "priority": "Low",
            "resourceType": "Image",
            "networkRequestTime": 108.39000001549721,
            "sessionTargetType": "page",
            "finished": true,
            "networkEndTime": 182.95900002121925,
            "resourceSize": 9553,
            "protocol": "h2",
            "mimeType": "image/jpeg",
            "statusCode": 200,
            "rendererStartTime": 98.18299999833107,
            "experimentalFromMainFrame": true,
            "transferSize": 10270,
            "entity": "GitHub",
            "url": "https://daniels436.github.io/img/Daniel-P-Souza-02-formacao.jpg"
          },
          {
            "entity": "GitHub",
            "statusCode": 200,
            "mimeType": "image/png",
            "transferSize": 6045,
            "url": "https://daniels436.github.io/img/X-antigo-twitter-mobile.png",
            "resourceSize": 5329,
            "rendererStartTime": 98.27200001478195,
            "networkEndTime": 175.86399999260902,
            "networkRequestTime": 108.483000010252,
            "protocol": "h2",
            "sessionTargetType": "page",
            "priority": "Low",
            "finished": true,
            "resourceType": "Image",
            "experimentalFromMainFrame": true
          },
          {
            "protocol": "h2",
            "resourceType": "Image",
            "entity": "GitHub",
            "url": "https://daniels436.github.io/img/GITHUB.png",
            "experimentalFromMainFrame": true,
            "resourceSize": 4700,
            "finished": true,
            "sessionTargetType": "page",
            "networkEndTime": 183.70600003004074,
            "networkRequestTime": 108.56000000238419,
            "priority": "Low",
            "rendererStartTime": 98.36700001358986,
            "transferSize": 5416,
            "mimeType": "image/png",
            "statusCode": 200
          },
          {
            "transferSize": 7537,
            "rendererStartTime": 98.44500002264977,
            "protocol": "h2",
            "finished": true,
            "statusCode": 200,
            "experimentalFromMainFrame": true,
            "url": "https://daniels436.github.io/img/CODEPEN.png",
            "networkEndTime": 177.98800003528595,
            "mimeType": "image/png",
            "resourceSize": 6823,
            "sessionTargetType": "page",
            "priority": "Low",
            "resourceType": "Image",
            "entity": "GitHub",
            "networkRequestTime": 108.61500000953674
          },
          {
            "statusCode": 200,
            "networkRequestTime": 108.66800001263618,
            "mimeType": "image/png",
            "resourceSize": 4884,
            "sessionTargetType": "page",
            "networkEndTime": 205.03400000929832,
            "url": "https://daniels436.github.io/img/linkedin.png",
            "finished": true,
            "rendererStartTime": 98.52300000190735,
            "resourceType": "Image",
            "transferSize": 5599,
            "protocol": "h2",
            "priority": "Low",
            "experimentalFromMainFrame": true,
            "entity": "GitHub"
          },
          {
            "entity": "GitHub",
            "protocol": "h2",
            "experimentalFromMainFrame": true,
            "statusCode": 200,
            "mimeType": "image/vnd.microsoft.icon",
            "priority": "Low",
            "networkEndTime": 176.51299998164177,
            "url": "https://daniels436.github.io/img/ico-nav-abrir.ico",
            "resourceSize": 1758,
            "resourceType": "Image",
            "finished": true,
            "sessionTargetType": "page",
            "rendererStartTime": 98.62700000405312,
            "transferSize": 1365,
            "networkRequestTime": 108.74799999594688
          },
          {
            "url": "https://daniels436.github.io/img/fechou.png",
            "transferSize": 2415,
            "networkEndTime": 175.70800000429153,
            "resourceSize": 1720,
            "sessionTargetType": "page",
            "resourceType": "Image",
            "priority": "Low",
            "entity": "GitHub",
            "protocol": "h2",
            "statusCode": 200,
            "finished": true,
            "networkRequestTime": 108.83100000023842,
            "mimeType": "image/png",
            "rendererStartTime": 98.75300002098083,
            "experimentalFromMainFrame": true
          },
          {
            "url": "https://daniels436.github.io/files/process-form.php",
            "entity": "GitHub",
            "rendererStartTime": 98.97500002384186,
            "resourceType": "Script",
            "mimeType": "application/x-httpd-php",
            "networkEndTime": 187.6380000114441,
            "resourceSize": 966,
            "experimentalFromMainFrame": true,
            "statusCode": 200,
            "priority": "Medium",
            "finished": true,
            "transferSize": 1258,
            "protocol": "h2",
            "networkRequestTime": 107.67800000309944,
            "sessionTargetType": "page"
          },
          {
            "url": "https://daniels436.github.io/JS/form-pattern.js",
            "statusCode": 200,
            "experimentalFromMainFrame": true,
            "resourceSize": 948,
            "networkEndTime": 187.85200002789497,
            "priority": "Medium",
            "transferSize": 1293,
            "finished": true,
            "resourceType": "Script",
            "networkRequestTime": 107.81900000572205,
            "sessionTargetType": "page",
            "mimeType": "application/javascript",
            "entity": "GitHub",
            "protocol": "h2",
            "rendererStartTime": 99.32700002193451
          },
          {
            "experimentalFromMainFrame": true,
            "protocol": "h2",
            "networkRequestTime": 107.9210000038147,
            "transferSize": 1395,
            "statusCode": 200,
            "resourceSize": 1359,
            "priority": "Medium",
            "entity": "GitHub",
            "finished": true,
            "resourceType": "Script",
            "mimeType": "application/javascript",
            "networkEndTime": 194.16499999165535,
            "sessionTargetType": "page",
            "rendererStartTime": 99.44500002264977,
            "url": "https://daniels436.github.io/JS/slid-cel.js"
          },
          {
            "mimeType": "application/javascript",
            "priority": "Medium",
            "protocol": "h2",
            "statusCode": 200,
            "networkRequestTime": 107.99300000071526,
            "resourceSize": 1050,
            "resourceType": "Script",
            "url": "https://daniels436.github.io/JS/menu-mobile-script.js",
            "sessionTargetType": "page",
            "experimentalFromMainFrame": true,
            "entity": "GitHub",
            "finished": true,
            "networkEndTime": 178.93200001120567,
            "rendererStartTime": 99.51199999451637,
            "transferSize": 1155
          },
          {
            "priority": "Medium",
            "protocol": "h2",
            "resourceSize": 753,
            "networkEndTime": 193.19900000095367,
            "url": "https://daniels436.github.io/install-prompt.js",
            "networkRequestTime": 108.0780000090599,
            "finished": true,
            "statusCode": 200,
            "entity": "GitHub",
            "sessionTargetType": "page",
            "transferSize": 1108,
            "resourceType": "Script",
            "rendererStartTime": 99.59400001168251,
            "experimentalFromMainFrame": true,
            "mimeType": "application/javascript"
          },
          {
            "mimeType": "application/javascript",
            "transferSize": 1726,
            "rendererStartTime": 99.66000002622604,
            "networkEndTime": 185.02200001478195,
            "resourceSize": 3175,
            "priority": "Medium",
            "statusCode": 200,
            "resourceType": "Script",
            "networkRequestTime": 108.19699999690056,
            "protocol": "h2",
            "entity": "GitHub",
            "finished": true,
            "experimentalFromMainFrame": true,
            "sessionTargetType": "page",
            "url": "https://daniels436.github.io/service-worker.js"
          },
          {
            "networkRequestTime": 108.33000001311302,
            "rendererStartTime": 99.72400000691414,
            "experimentalFromMainFrame": true,
            "transferSize": 976,
            "resourceSize": 351,
            "entity": "GitHub",
            "resourceType": "Script",
            "priority": "Medium",
            "mimeType": "application/javascript",
            "sessionTargetType": "page",
            "networkEndTime": 181.31099998950958,
            "protocol": "h2",
            "finished": true,
            "statusCode": 200,
            "url": "https://daniels436.github.io/index.js"
          },
          {
            "transferSize": 7820,
            "statusCode": 200,
            "url": "https://daniels436.github.io/",
            "priority": "Low",
            "networkEndTime": 137.41100001335144,
            "experimentalFromMainFrame": true,
            "entity": "GitHub",
            "rendererStartTime": 104.94900000095367,
            "protocol": "h2",
            "networkRequestTime": 108.9200000166893,
            "resourceSize": 27678,
            "resourceType": "Image",
            "sessionTargetType": "page",
            "mimeType": "text/html",
            "finished": true
          },
          {
            "resourceSize": 0,
            "finished": true,
            "url": "https://daniels436.github.io/ARTIGOS/Imgs-artigos/network-web-aplicativos-desenvolvimento-video-smatphones-negocios-matrix%20(1080p).mp4",
            "entity": "GitHub",
            "rendererStartTime": 112.51199999451637,
            "statusCode": -1,
            "networkEndTime": 763.8490000069141,
            "resourceType": "Media",
            "networkRequestTime": 112.51199999451637,
            "experimentalFromMainFrame": true,
            "priority": "Low",
            "sessionTargetType": "page",
            "transferSize": 0
          },
          {
            "experimentalFromMainFrame": true,
            "rendererStartTime": 187.68299999833107,
            "entity": "GitHub",
            "transferSize": 6823,
            "resourceSize": 27273,
            "statusCode": 200,
            "url": "https://daniels436.github.io/CSS-PRINCIPAL/style-principal.css",
            "networkRequestTime": 188.20600000023842,
            "sessionTargetType": "page",
            "networkEndTime": 222.4860000014305,
            "resourceType": "Image",
            "mimeType": "text/css",
            "priority": "High",
            "finished": true,
            "protocol": "h2"
          },
          {
            "experimentalFromMainFrame": true,
            "resourceType": "Image",
            "transferSize": 81349,
            "sessionTargetType": "page",
            "resourceSize": 80632,
            "statusCode": 200,
            "url": "https://daniels436.github.io/img/ma-web-mobile-eventos-venda-ingresos.webp",
            "networkEndTime": 308.5920000076294,
            "finished": true,
            "rendererStartTime": 191.0160000026226,
            "entity": "GitHub",
            "protocol": "h2",
            "priority": "Low",
            "mimeType": "image/webp",
            "networkRequestTime": 191.47299998998642
          }
        ]
      }
    },
    "landmark-one-main": {
      "id": "landmark-one-main",
      "title": "Document has a main landmark.",
      "description": "One main landmark helps screen reader users navigate a web page. [Learn more about landmarks](https://dequeuniversity.com/rules/axe/4.8/landmark-one-main).",
      "score": null,
      "scoreDisplayMode": "notApplicable"
    },
    "video-caption": {
      "id": "video-caption",
      "title": "`<video>` elements contain a `<track>` element with `[kind=\"captions\"]`",
      "description": "When a video provides a caption it is easier for deaf and hearing impaired users to access its information. [Learn more about video captions](https://dequeuniversity.com/rules/axe/4.8/video-caption).",
      "score": null,
      "scoreDisplayMode": "notApplicable"
    },
    "user-timings": {
      "id": "user-timings",
      "title": "User Timing marks and measures",
      "description": "Consider instrumenting your app with the User Timing API to measure your app's real-world performance during key user experiences. [Learn more about User Timing marks](https://developer.chrome.com/docs/lighthouse/performance/user-timings/).",
      "score": null,
      "scoreDisplayMode": "notApplicable",
      "details": {
        "items": [],
        "type": "table",
        "headings": []
      }
    },
    "splash-screen": {
      "id": "splash-screen",
      "title": "Configured for a custom splash screen",
      "description": "A themed splash screen ensures a high-quality experience when users launch your app from their homescreens. [Learn more about splash screens](https://developer.chrome.com/docs/lighthouse/pwa/splash-screen/).",
      "score": 1,
      "scoreDisplayMode": "binary",
      "details": {
        "type": "debugdata",
        "items": [
          {
            "hasMaskableIcon": false,
            "fetchesIcon": true,
            "hasPWADisplayValue": true,
            "isParseFailure": false,
            "hasThemeColor": true,
            "shortNameLength": true,
            "hasIconsAtLeast512px": true,
            "hasShortName": true,
            "failures": [],
            "hasBackgroundColor": true,
            "hasName": true,
            "hasIconsAtLeast144px": true,
            "hasStartUrl": true
          }
        ]
      }
    },
    "render-blocking-resources": {
      "id": "render-blocking-resources",
      "title": "Eliminate render-blocking resources",
      "description": "Resources are blocking the first paint of your page. Consider delivering critical JS/CSS inline and deferring all non-critical JS/styles. [Learn how to eliminate render-blocking resources](https://developer.chrome.com/docs/lighthouse/performance/render-blocking-resources/).",
      "score": 0.5,
      "scoreDisplayMode": "metricSavings",
      "displayValue": "Potential savings of 0 ms",
      "details": {
        "type": "opportunity",
        "overallSavingsMs": 0,
        "headings": [
          {
            "key": "url",
            "valueType": "url",
            "label": "URL"
          },
          {
            "label": "Transfer Size",
            "key": "totalBytes",
            "valueType": "bytes"
          },
          {
            "label": "Potential Savings",
            "valueType": "timespanMs",
            "key": "wastedMs"
          }
        ],
        "items": [
          {
            "url": "https://daniels436.github.io/CSS-PRINCIPAL/style-principal.css",
            "totalBytes": 6823,
            "wastedMs": 150
          }
        ]
      },
      "numericValue": 0,
      "numericUnit": "millisecond"
    },
    "th-has-data-cells": {
      "id": "th-has-data-cells",
      "title": "`<th>` elements and elements with `[role=\"columnheader\"/\"rowheader\"]` have data cells they describe.",
      "description": "Screen readers have features to make navigating tables easier. Ensuring table headers always refer to some set of cells may improve the experience for screen reader users. [Learn more about table headers](https://dequeuniversity.com/rules/axe/4.8/th-has-data-cells).",
      "score": null,
      "scoreDisplayMode": "notApplicable"
    },
    "html-lang-valid": {
      "id": "html-lang-valid",
      "title": "`<html>` element has a valid value for its `[lang]` attribute",
      "description": "Specifying a valid [BCP 47 language](https://www.w3.org/International/questions/qa-choosing-language-tags#question) helps screen readers announce text properly. [Learn how to use the `lang` attribute](https://dequeuniversity.com/rules/axe/4.8/html-lang-valid).",
      "score": 1,
      "scoreDisplayMode": "binary",
      "details": {
        "items": [],
        "headings": [],
        "type": "table"
      }
    },
    "aria-treeitem-name": {
      "id": "aria-treeitem-name",
      "title": "ARIA `treeitem` elements have accessible names",
      "description": "When a `treeitem` element doesn't have an accessible name, screen readers announce it with a generic name, making it unusable for users who rely on screen readers. [Learn more about labeling `treeitem` elements](https://dequeuniversity.com/rules/axe/4.8/aria-treeitem-name).",
      "score": null,
      "scoreDisplayMode": "notApplicable"
    },
    "unsized-images": {
      "id": "unsized-images",
      "title": "Image elements do not have explicit `width` and `height`",
      "description": "Set an explicit width and height on image elements to reduce layout shifts and improve CLS. [Learn how to set image dimensions](https://web.dev/articles/optimize-cls#images_without_dimensions)",
      "score": 0.5,
      "scoreDisplayMode": "metricSavings",
      "details": {
        "headings": [
          {
            "valueType": "node",
            "key": "node"
          },
          {
            "valueType": "url",
            "key": "url",
            "label": "URL"
          }
        ],
        "items": [
          {
            "url": "https://daniels436.github.io/img/Daniel-P-Souza-02-formacao.jpg",
            "node": {
              "boundingRect": {
                "height": 209,
                "left": 93,
                "top": 4921,
                "right": 303,
                "width": 210,
                "bottom": 5130
              },
              "path": "1,HTML,1,BODY,3,MAIN,8,SECTION,0,DIV,1,DIV,0,DIV,0,IMG",
              "selector": "div.interface-formacao > div.flex-formacao > div.img-formacao > img.img-formacao-r",
              "lhId": "1-79-IMG",
              "type": "node",
              "snippet": "<img src=\"img/Daniel-P-Souza-02-formacao.jpg\" alt=\" Damiel P. Souza \" class=\"img-formacao-r\">",
              "nodeLabel": " Damiel P. Souza "
            }
          },
          {
            "url": "https://daniels436.github.io/img/servicos-%20web-page.png",
            "node": {
              "selector": "div.servicos-box > a > i.ico-01 > img",
              "path": "1,HTML,1,BODY,3,MAIN,3,SECTION,0,DIV,1,DIV,0,DIV,0,A,0,I,0,IMG",
              "snippet": "<img src=\"img/servicos- web-page.png\" alt=\"Ícone de serviço Multi Plataforma web-page\">",
              "nodeLabel": "Ícone de serviço Multi Plataforma web-page",
              "boundingRect": {
                "top": 1319,
                "bottom": 1382,
                "height": 63,
                "left": 175,
                "width": 63,
                "right": 238
              },
              "type": "node",
              "lhId": "1-75-IMG"
            }
          },
          {
            "url": "https://daniels436.github.io/img/seo-servicos.png",
            "node": {
              "boundingRect": {
                "top": 1749,
                "bottom": 1812,
                "left": 175,
                "height": 63,
                "width": 63,
                "right": 238
              },
              "snippet": "<img src=\"img/seo-servicos.png\" alt=\"Ícone de serviço de Otimização de SEO\">",
              "nodeLabel": "Ícone de serviço de Otimização de SEO",
              "lhId": "1-76-IMG",
              "selector": "div.servicos-box > a > i.ico-01 > img",
              "type": "node",
              "path": "1,HTML,1,BODY,3,MAIN,3,SECTION,0,DIV,1,DIV,1,DIV,0,A,0,I,0,IMG"
            }
          },
          {
            "url": "https://daniels436.github.io/img/economia-list.png",
            "node": {
              "type": "node",
              "snippet": "<img src=\"img/economia-list.png\" alt=\"Ícone de serviço de Gestão de Projetos\">",
              "selector": "div.servicos-box > a > i.ico-03 > img",
              "boundingRect": {
                "height": 63,
                "top": 2109,
                "width": 63,
                "right": 238,
                "bottom": 2172,
                "left": 175
              },
              "path": "1,HTML,1,BODY,3,MAIN,3,SECTION,0,DIV,1,DIV,2,DIV,0,A,0,I,0,IMG",
              "nodeLabel": "Ícone de serviço de Gestão de Projetos",
              "lhId": "1-77-IMG"
            }
          },
          {
            "node": {
              "nodeLabel": " Ícone de serviço de personal-consult, Suporte e Consultoria",
              "boundingRect": {
                "height": 63,
                "left": 175,
                "right": 238,
                "width": 63,
                "bottom": 2592,
                "top": 2529
              },
              "path": "1,HTML,1,BODY,3,MAIN,3,SECTION,0,DIV,1,DIV,3,DIV,0,A,0,I,0,IMG",
              "type": "node",
              "snippet": "<img src=\"img/personal-consult.png\" alt=\" Ícone de serviço de personal-consult, Suporte e Consultoria\">",
              "lhId": "1-78-IMG",
              "selector": "div.servicos-box > a > i.ico-04 > img"
            },
            "url": "https://daniels436.github.io/img/personal-consult.png"
          },
          {
            "url": "https://daniels436.github.io/img/X-antigo-twitter-mobile.png",
            "node": {
              "lhId": "1-80-IMG",
              "boundingRect": {
                "top": 8884,
                "right": 80,
                "bottom": 8924,
                "left": 40,
                "height": 40,
                "width": 40
              },
              "nodeLabel": "Ícone",
              "type": "node",
              "selector": "div.footer-icon > div#input-icon > a.icon-link > img",
              "snippet": "<img src=\"img/X-antigo-twitter-mobile.png\" alt=\"Ícone\">",
              "path": "1,HTML,1,BODY,3,MAIN,14,FOOTER,1,DIV,0,DIV,0,A,0,IMG"
            }
          },
          {
            "node": {
              "lhId": "1-81-IMG",
              "type": "node",
              "nodeLabel": "Ícone",
              "snippet": "<img src=\"img/GITHUB.png\" alt=\"Ícone\">",
              "selector": "div.footer-icon > div#input-icon > a.icon-link > img",
              "boundingRect": {
                "right": 135,
                "height": 40,
                "width": 40,
                "bottom": 8924,
                "left": 95,
                "top": 8884
              },
              "path": "1,HTML,1,BODY,3,MAIN,14,FOOTER,1,DIV,0,DIV,1,A,0,IMG"
            },
            "url": "https://daniels436.github.io/img/GITHUB.png"
          },
          {
            "node": {
              "selector": "div.footer-icon > div#input-icon > a.icon-link > img",
              "snippet": "<img src=\"img/CODEPEN.png\" alt=\"Ícone\">",
              "nodeLabel": "Ícone",
              "type": "node",
              "lhId": "1-82-IMG",
              "path": "1,HTML,1,BODY,3,MAIN,14,FOOTER,1,DIV,0,DIV,2,A,0,IMG",
              "boundingRect": {
                "width": 40,
                "bottom": 8924,
                "top": 8884,
                "left": 150,
                "right": 190,
                "height": 40
              }
            },
            "url": "https://daniels436.github.io/img/CODEPEN.png"
          },
          {
            "node": {
              "type": "node",
              "path": "1,HTML,1,BODY,3,MAIN,14,FOOTER,1,DIV,0,DIV,3,A,0,IMG",
              "lhId": "1-83-IMG",
              "nodeLabel": "Ícone",
              "boundingRect": {
                "top": 8884,
                "right": 244,
                "bottom": 8924,
                "left": 204,
                "height": 40,
                "width": 40
              },
              "selector": "div.footer-icon > div#input-icon > a.icon-link > img",
              "snippet": "<img src=\"img/linkedin.png\" alt=\"Ícone\">"
            },
            "url": "https://daniels436.github.io/img/linkedin.png"
          },
          {
            "node": {
              "boundingRect": {
                "left": 480,
                "height": 24,
                "bottom": 37,
                "top": 13,
                "width": 24,
                "right": 504
              },
              "nodeLabel": "Ícone de abrir navegação",
              "type": "node",
              "snippet": "<img src=\"img/ico-nav-abrir.ico\" alt=\"Ícone de abrir navegação\">",
              "path": "1,HTML,1,BODY,3,MAIN,16,DIV,0,DIV,0,I,0,IMG",
              "lhId": "1-84-IMG",
              "selector": "div.menu-container > div#btn-menu > i > img"
            },
            "url": "https://daniels436.github.io/img/ico-nav-abrir.ico"
          },
          {
            "url": "https://daniels436.github.io/img/fechou.png",
            "node": {
              "snippet": "<img src=\"img/fechou.png\" alt=\"Ícone de fechar a navegação\" \"=\"\">",
              "path": "1,HTML,1,BODY,3,MAIN,16,DIV,1,DIV,1,DIV,0,DIV,0,I,0,IMG",
              "nodeLabel": "Ícone de fechar a navegação",
              "selector": "div#menu-mobile > div.btn-fechar > i.ico > img",
              "boundingRect": {
                "left": 411,
                "top": 20,
                "right": 434,
                "bottom": 43,
                "width": 23,
                "height": 23
              },
              "lhId": "1-85-IMG",
              "type": "node"
            }
          }
        ],
        "type": "table"
      }
    },
    "timing-budget": {
      "id": "timing-budget",
      "title": "Timing budget",
      "description": "Set a timing budget to help you keep an eye on the performance of your site. Performant sites load fast and respond to user input events quickly. [Learn more about performance budgets](https://developers.google.com/web/tools/lighthouse/audits/budgets).",
      "score": null,
      "scoreDisplayMode": "notApplicable"
    },
    "offscreen-images": {
      "id": "offscreen-images",
      "title": "Defer offscreen images",
      "description": "Consider lazy-loading offscreen and hidden images after all critical resources have finished loading to lower time to interactive. [Learn how to defer offscreen images](https://developer.chrome.com/docs/lighthouse/performance/offscreen-images/).",
      "score": 0.5,
      "scoreDisplayMode": "metricSavings",
      "displayValue": "Potential savings of 26 KiB",
      "details": {
        "type": "opportunity",
        "headings": [
          {
            "key": "node",
            "valueType": "node"
          },
          {
            "label": "URL",
            "valueType": "url",
            "key": "url"
          },
          {
            "key": "totalBytes",
            "label": "Resource Size",
            "valueType": "bytes"
          },
          {
            "label": "Potential Savings",
            "key": "wastedBytes",
            "valueType": "bytes"
          }
        ],
        "debugData": {
          "type": "debugdata",
          "metricSavings": {
            "FCP": 0,
            "LCP": 0
          }
        },
        "sortedBy": [
          "wastedBytes"
        ],
        "items": [
          {
            "url": "https://daniels436.github.io/img/Daniel-P-Souza-02-formacao.jpg",
            "requestStartTime": 223866912.386,
            "totalBytes": 9553,
            "wastedBytes": 9553,
            "node": {
              "type": "node",
              "path": "1,HTML,1,BODY,3,MAIN,8,SECTION,0,DIV,1,DIV,0,DIV,0,IMG",
              "snippet": "<img src=\"img/Daniel-P-Souza-02-formacao.jpg\" alt=\" Damiel P. Souza \" class=\"img-formacao-r\">",
              "boundingRect": {
                "width": 210,
                "left": 93,
                "height": 209,
                "bottom": 5130,
                "right": 303,
                "top": 4921
              },
              "nodeLabel": " Damiel P. Souza ",
              "lhId": "1-79-IMG",
              "selector": "div.interface-formacao > div.flex-formacao > div.img-formacao > img.img-formacao-r"
            },
            "wastedPercent": 100
          },
          {
            "wastedPercent": 100,
            "totalBytes": 6823,
            "url": "https://daniels436.github.io/img/CODEPEN.png",
            "requestStartTime": 223866912.611,
            "node": {
              "snippet": "<img src=\"img/CODEPEN.png\" alt=\"Ícone\">",
              "path": "1,HTML,1,BODY,3,MAIN,14,FOOTER,1,DIV,0,DIV,2,A,0,IMG",
              "selector": "div.footer-icon > div#input-icon > a.icon-link > img",
              "type": "node",
              "boundingRect": {
                "height": 40,
                "left": 150,
                "top": 8884,
                "right": 190,
                "bottom": 8924,
                "width": 40
              },
              "nodeLabel": "Ícone",
              "lhId": "1-82-IMG"
            },
            "wastedBytes": 6823
          },
          {
            "url": "https://daniels436.github.io/img/X-antigo-twitter-mobile.png",
            "totalBytes": 5329,
            "node": {
              "type": "node",
              "path": "1,HTML,1,BODY,3,MAIN,14,FOOTER,1,DIV,0,DIV,0,A,0,IMG",
              "snippet": "<img src=\"img/X-antigo-twitter-mobile.png\" alt=\"Ícone\">",
              "nodeLabel": "Ícone",
              "lhId": "1-80-IMG",
              "selector": "div.footer-icon > div#input-icon > a.icon-link > img",
              "boundingRect": {
                "left": 40,
                "width": 40,
                "bottom": 8924,
                "right": 80,
                "top": 8884,
                "height": 40
              }
            },
            "wastedPercent": 100,
            "wastedBytes": 5329,
            "requestStartTime": 223866912.479
          },
          {
            "url": "https://daniels436.github.io/img/GITHUB.png",
            "wastedBytes": 4700,
            "totalBytes": 4700,
            "requestStartTime": 223866912.556,
            "node": {
              "lhId": "1-81-IMG",
              "boundingRect": {
                "top": 8884,
                "width": 40,
                "right": 135,
                "height": 40,
                "bottom": 8924,
                "left": 95
              },
              "type": "node",
              "path": "1,HTML,1,BODY,3,MAIN,14,FOOTER,1,DIV,0,DIV,1,A,0,IMG",
              "snippet": "<img src=\"img/GITHUB.png\" alt=\"Ícone\">",
              "selector": "div.footer-icon > div#input-icon > a.icon-link > img",
              "nodeLabel": "Ícone"
            },
            "wastedPercent": 100
          }
        ],
        "overallSavingsMs": 150,
        "overallSavingsBytes": 26405
      },
      "warnings": [],
      "numericValue": 150,
      "numericUnit": "millisecond"
    },
    "focusable-controls": {
      "id": "focusable-controls",
      "title": "Interactive controls are keyboard focusable",
      "description": "Custom interactive controls are keyboard focusable and display a focus indicator. [Learn how to make custom controls focusable](https://developer.chrome.com/docs/lighthouse/accessibility/focusable-controls/).",
      "score": null,
      "scoreDisplayMode": "manual"
    },
    "uses-rel-preconnect": {
      "id": "uses-rel-preconnect",
      "title": "Preconnect to required origins",
      "description": "Consider adding `preconnect` or `dns-prefetch` resource hints to establish early connections to important third-party origins. [Learn how to preconnect to required origins](https://developer.chrome.com/docs/lighthouse/performance/uses-rel-preconnect/).",
      "score": 1,
      "scoreDisplayMode": "metricSavings",
      "details": {
        "overallSavingsMs": 0,
        "items": [],
        "type": "opportunity",
        "sortedBy": [
          "wastedMs"
        ],
        "headings": []
      },
      "warnings": [],
      "numericValue": 0,
      "numericUnit": "millisecond"
    },
    "long-tasks": {
      "id": "long-tasks",
      "title": "Avoid long main-thread tasks",
      "description": "Lists the longest tasks on the main thread, useful for identifying worst contributors to input delay. [Learn how to avoid long main-thread tasks](https://web.dev/articles/long-tasks-devtools)",
      "score": 1,
      "scoreDisplayMode": "informative",
      "displayValue": "2 long tasks found",
      "details": {
        "type": "table",
        "debugData": {
          "type": "debugdata",
          "tasks": [
            {
              "startTime": 1558,
              "duration": 93,
              "paintCompositeRender": 0,
              "urlIndex": 0,
              "styleLayout": 0,
              "other": 93
            },
            {
              "other": 79,
              "urlIndex": 1,
              "startTime": 808,
              "scriptEvaluation": 0,
              "duration": 79
            }
          ],
          "urls": [
            "https://daniels436.github.io/",
            "Unattributable"
          ]
        },
        "items": [
          {
            "url": "https://daniels436.github.io/",
            "duration": 93,
            "startTime": 1558
          },
          {
            "startTime": 808,
            "url": "Unattributable",
            "duration": 79
          }
        ],
        "skipSumming": [
          "startTime"
        ],
        "sortedBy": [
          "duration"
        ],
        "headings": [
          {
            "key": "url",
            "valueType": "url",
            "label": "URL"
          },
          {
            "valueType": "ms",
            "key": "startTime",
            "granularity": 1,
            "label": "Start Time"
          },
          {
            "granularity": 1,
            "key": "duration",
            "label": "Duration",
            "valueType": "ms"
          }
        ]
      }
    },
    "js-libraries": {
      "id": "js-libraries",
      "title": "Detected JavaScript libraries",
      "description": "All front-end JavaScript libraries detected on the page. [Learn more about this JavaScript library detection diagnostic audit](https://developer.chrome.com/docs/lighthouse/best-practices/js-libraries/).",
      "score": null,
      "scoreDisplayMode": "notApplicable"
    },
    "unused-css-rules": {
      "id": "unused-css-rules",
      "title": "Reduce unused CSS",
      "description": "Reduce unused rules from stylesheets and defer CSS not used for above-the-fold content to decrease bytes consumed by network activity. [Learn how to reduce unused CSS](https://developer.chrome.com/docs/lighthouse/performance/unused-css-rules/).",
      "score": 1,
      "scoreDisplayMode": "metricSavings",
      "details": {
        "headings": [],
        "overallSavingsMs": 0,
        "items": [],
        "overallSavingsBytes": 0,
        "sortedBy": [
          "wastedBytes"
        ],
        "type": "opportunity",
        "debugData": {
          "type": "debugdata",
          "metricSavings": {
            "FCP": 0,
            "LCP": 0
          }
        }
      },
      "numericValue": 0,
      "numericUnit": "millisecond"
    },
    "offscreen-content-hidden": {
      "id": "offscreen-content-hidden",
      "title": "Offscreen content is hidden from assistive technology",
      "description": "Offscreen content is hidden with display: none or aria-hidden=true. [Learn how to properly hide offscreen content](https://developer.chrome.com/docs/lighthouse/accessibility/offscreen-content-hidden/).",
      "score": null,
      "scoreDisplayMode": "manual"
    },
    "speed-index": {
      "id": "speed-index",
      "title": "Speed Index",
      "description": "Speed Index shows how quickly the contents of a page are visibly populated. [Learn more about the Speed Index metric](https://developer.chrome.com/docs/lighthouse/performance/speed-index/).",
      "score": 1,
      "scoreDisplayMode": "numeric",
      "displayValue": "1.1 s",
      "numericValue": 1074.6756617605593,
      "numericUnit": "millisecond"
    },
    "definition-list": {
      "id": "definition-list",
      "title": "`<dl>`'s contain only properly-ordered `<dt>` and `<dd>` groups, `<script>`, `<template>` or `<div>` elements.",
      "description": "When definition lists are not properly marked up, screen readers may produce confusing or inaccurate output. [Learn how to structure definition lists correctly](https://dequeuniversity.com/rules/axe/4.8/definition-list).",
      "score": null,
      "scoreDisplayMode": "notApplicable"
    },
    "object-alt": {
      "id": "object-alt",
      "title": "`<object>` elements have alternate text",
      "description": "Screen readers cannot translate non-text content. Adding alternate text to `<object>` elements helps screen readers convey meaning to users. [Learn more about alt text for `object` elements](https://dequeuniversity.com/rules/axe/4.8/object-alt).",
      "score": null,
      "scoreDisplayMode": "notApplicable"
    },
    "image-size-responsive": {
      "id": "image-size-responsive",
      "title": "Serves images with low resolution",
      "description": "Image natural dimensions should be proportional to the display size and the pixel ratio to maximize image clarity. [Learn how to provide responsive images](https://web.dev/articles/serve-responsive-images).",
      "score": 0,
      "scoreDisplayMode": "binary",
      "details": {
        "type": "table",
        "headings": [
          {
            "valueType": "node",
            "key": "node"
          },
          {
            "valueType": "url",
            "key": "url",
            "label": "URL"
          },
          {
            "label": "Displayed size",
            "key": "displayedSize",
            "valueType": "text"
          },
          {
            "valueType": "text",
            "label": "Actual size",
            "key": "actualSize"
          },
          {
            "label": "Expected size",
            "valueType": "text",
            "key": "expectedSize"
          }
        ],
        "items": [
          {
            "actualPixels": 36481,
            "displayedSize": "191 x 191",
            "actualSize": "191 x 191",
            "expectedPixels": 82369,
            "node": {
              "path": "1,HTML,1,BODY,3,MAIN,1,SECTION,1,SECTION,0,DIV,0,DIV,0,DIV,1,DIV,0,IMG",
              "type": "node",
              "snippet": "<img src=\"img/Daniel-P-Souza2.jpg\" alt=\"\" class=\"img-movimento\">",
              "lhId": "1-74-IMG",
              "selector": "div.flexo > div.topo-conteudo > div.img-topo-site > img.img-movimento",
              "boundingRect": {
                "right": 303,
                "left": 110,
                "bottom": 333,
                "width": 193,
                "top": 140,
                "height": 193
              },
              "nodeLabel": "div.flexo > div.topo-conteudo > div.img-topo-site > img.img-movimento"
            },
            "url": "https://daniels436.github.io/img/Daniel-P-Souza2.jpg",
            "expectedSize": "287 x 287"
          },
          {
            "node": {
              "path": "1,HTML,1,BODY,3,MAIN,16,DIV,1,DIV,1,DIV,0,DIV,0,I,0,IMG",
              "snippet": "<img src=\"img/fechou.png\" alt=\"Ícone de fechar a navegação\" \"=\"\">",
              "selector": "div#menu-mobile > div.btn-fechar > i.ico > img",
              "type": "node",
              "lhId": "1-85-IMG",
              "boundingRect": {
                "height": 23,
                "left": 411,
                "top": 20,
                "width": 23,
                "right": 434,
                "bottom": 43
              },
              "nodeLabel": "Ícone de fechar a navegação"
            },
            "actualPixels": 529,
            "displayedSize": "23 x 23",
            "url": "https://daniels436.github.io/img/fechou.png",
            "actualSize": "23 x 23",
            "expectedSize": "35 x 35",
            "expectedPixels": 1225
          }
        ]
      }
    },
    "maskable-icon": {
      "id": "maskable-icon",
      "title": "Manifest doesn't have a maskable icon",
      "description": "A maskable icon ensures that the image fills the entire shape without being letterboxed when installing the app on a device. [Learn about maskable manifest icons](https://developer.chrome.com/docs/lighthouse/pwa/maskable-icon-audit/).",
      "score": 0,
      "scoreDisplayMode": "binary"
    },
    "no-unload-listeners": {
      "id": "no-unload-listeners",
      "title": "Avoids `unload` event listeners",
      "description": "The `unload` event does not fire reliably and listening for it can prevent browser optimizations like the Back-Forward Cache. Use `pagehide` or `visibilitychange` events instead. [Learn more about unload event listeners](https://web.dev/articles/bfcache#never_use_the_unload_event)",
      "score": 1,
      "scoreDisplayMode": "binary"
    },
    "image-aspect-ratio": {
      "id": "image-aspect-ratio",
      "title": "Displays images with correct aspect ratio",
      "description": "Image display dimensions should match natural aspect ratio. [Learn more about image aspect ratio](https://developer.chrome.com/docs/lighthouse/best-practices/image-aspect-ratio/).",
      "score": 1,
      "scoreDisplayMode": "binary",
      "details": {
        "items": [],
        "type": "table",
        "headings": []
      }
    },
    "non-composited-animations": {
      "id": "non-composited-animations",
      "title": "Avoid non-composited animations",
      "description": "Animations which are not composited can be janky and increase CLS. [Learn how to avoid non-composited animations](https://developer.chrome.com/docs/lighthouse/performance/non-composited-animations/)",
      "score": 1,
      "scoreDisplayMode": "informative",
      "displayValue": "1 animated element found",
      "details": {
        "headings": [
          {
            "key": "node",
            "label": "Element",
            "subItemsHeading": {
              "key": "failureReason",
              "valueType": "text"
            },
            "valueType": "node"
          },
          {
            "subItemsHeading": {
              "valueType": "text",
              "key": "animation"
            },
            "label": "Name",
            "key": null,
            "valueType": "text"
          }
        ],
        "items": [
          {
            "subItems": {
              "type": "subitems",
              "items": [
                {
                  "failureReason": "Unsupported CSS Property: top",
                  "animation": "flutuar"
                }
              ]
            },
            "node": {
              "type": "node",
              "nodeLabel": "div.flexo > div.topo-conteudo > div.img-topo-site > img.img-movimento",
              "path": "1,HTML,1,BODY,3,MAIN,1,SECTION,1,SECTION,0,DIV,0,DIV,0,DIV,1,DIV,0,IMG",
              "snippet": "<img src=\"img/Daniel-P-Souza2.jpg\" alt=\"\" class=\"img-movimento\">",
              "boundingRect": {
                "left": 110,
                "height": 193,
                "top": 134,
                "bottom": 327,
                "width": 193,
                "right": 303
              },
              "lhId": "page-1-IMG",
              "selector": "div.flexo > div.topo-conteudo > div.img-topo-site > img.img-movimento"
            }
          }
        ],
        "type": "table"
      }
    },
    "image-redundant-alt": {
      "id": "image-redundant-alt",
      "title": "Image elements do not have `[alt]` attributes that are redundant text.",
      "description": "Informative elements should aim for short, descriptive alternative text. Alternative text that is exactly the same as the text adjacent to the link or image is potentially confusing for screen reader users, because the text will be read twice. [Learn more about the `alt` attribute](https://dequeuniversity.com/rules/axe/4.8/image-redundant-alt).",
      "score": 1,
      "scoreDisplayMode": "binary",
      "details": {
        "type": "table",
        "headings": [],
        "items": []
      }
    },
    "aria-text": {
      "id": "aria-text",
      "title": "Elements with the `role=text` attribute do not have focusable descendents.",
      "description": "Adding `role=text` around a text node split by markup enables VoiceOver to treat it as one phrase, but the element's focusable descendents will not be announced. [Learn more about the `role=text` attribute](https://dequeuniversity.com/rules/axe/4.8/aria-text).",
      "score": null,
      "scoreDisplayMode": "notApplicable"
    },
    "plugins": {
      "id": "plugins",
      "title": "Document avoids plugins",
      "description": "Search engines can't index plugin content, and many devices restrict plugins or don't support them. [Learn more about avoiding plugins](https://developer.chrome.com/docs/lighthouse/seo/plugins/).",
      "score": 1,
      "scoreDisplayMode": "binary",
      "details": {
        "headings": [],
        "type": "table",
        "items": []
      }
    },
    "errors-in-console": {
      "id": "errors-in-console",
      "title": "Browser errors were logged to the console",
      "description": "Errors logged to the console indicate unresolved problems. They can come from network request failures and other browser concerns. [Learn more about this errors in console diagnostic audit](https://developer.chrome.com/docs/lighthouse/best-practices/errors-in-console/)",
      "score": 0,
      "scoreDisplayMode": "binary",
      "details": {
        "items": [
          {
            "sourceLocation": {
              "column": 0,
              "urlProvider": "network",
              "url": "https://daniels436.github.io/ARTIGOS/Imgs-artigos/network-web-aplicativos-desenvolvimento-video-smatphones-negocios-matrix%20(1080p).mp4",
              "line": 0,
              "type": "source-location"
            },
            "source": "network",
            "description": "Failed to load resource: net::ERR_CONNECTION_FAILED"
          },
          {
            "sourceLocation": {
              "type": "source-location",
              "url": "https://daniels436.github.io/files/process-form.php",
              "urlProvider": "network",
              "column": 0,
              "line": 0
            },
            "description": "SyntaxError: Unexpected token '<'",
            "source": "exception"
          }
        ],
        "headings": [
          {
            "valueType": "source-location",
            "label": "Source",
            "key": "sourceLocation"
          },
          {
            "key": "description",
            "label": "Description",
            "valueType": "code"
          }
        ],
        "type": "table"
      }
    },
    "geolocation-on-start": {
      "id": "geolocation-on-start",
      "title": "Avoids requesting the geolocation permission on page load",
      "description": "Users are mistrustful of or confused by sites that request their location without context. Consider tying the request to a user action instead. [Learn more about the geolocation permission](https://developer.chrome.com/docs/lighthouse/best-practices/geolocation-on-start/).",
      "score": 1,
      "scoreDisplayMode": "binary",
      "details": {
        "headings": [],
        "items": [],
        "type": "table"
      }
    },
    "aria-hidden-focus": {
      "id": "aria-hidden-focus",
      "title": "`[aria-hidden=\"true\"]` elements do not contain focusable descendents",
      "description": "Focusable descendents within an `[aria-hidden=\"true\"]` element prevent those interactive elements from being available to users of assistive technologies like screen readers. [Learn how `aria-hidden` affects focusable elements](https://dequeuniversity.com/rules/axe/4.8/aria-hidden-focus).",
      "score": null,
      "scoreDisplayMode": "notApplicable"
    },
    "label-content-name-mismatch": {
      "id": "label-content-name-mismatch",
      "title": "Elements with visible text labels have matching accessible names.",
      "description": "Visible text labels that do not match the accessible name can result in a confusing experience for screen reader users. [Learn more about accessible names](https://dequeuniversity.com/rules/axe/4.8/label-content-name-mismatch).",
      "score": null,
      "scoreDisplayMode": "notApplicable"
    },
    "button-name": {
      "id": "button-name",
      "title": "Buttons have an accessible name",
      "description": "When a button doesn't have an accessible name, screen readers announce it as \"button\", making it unusable for users who rely on screen readers. [Learn how to make buttons more accessible](https://dequeuniversity.com/rules/axe/4.8/button-name).",
      "score": null,
      "scoreDisplayMode": "notApplicable"
    },
    "viewport": {
      "id": "viewport",
      "title": "Has a `<meta name=\"viewport\">` tag with `width` or `initial-scale`",
      "description": "A `<meta name=\"viewport\">` not only optimizes your app for mobile screen sizes, but also prevents [a 300 millisecond delay to user input](https://developer.chrome.com/blog/300ms-tap-delay-gone-away/). [Learn more about using the viewport meta tag](https://developer.chrome.com/docs/lighthouse/pwa/viewport/).",
      "score": 1,
      "scoreDisplayMode": "metricSavings",
      "details": {
        "type": "debugdata",
        "viewportContent": "width=device-width, initial-scale=1.0"
      },
      "warnings": []
    },
    "third-party-cookies": {
      "id": "third-party-cookies",
      "title": "Avoids third-party cookies",
      "description": "Support for third-party cookies will be removed in a future version of Chrome. [Learn more about phasing out third-party cookies](https://developer.chrome.com/en/docs/privacy-sandbox/third-party-cookie-phase-out/).",
      "score": 1,
      "scoreDisplayMode": "binary",
      "details": {
        "headings": [],
        "type": "table",
        "items": []
      }
    },
    "use-landmarks": {
      "id": "use-landmarks",
      "title": "HTML5 landmark elements are used to improve navigation",
      "description": "Landmark elements (`<main>`, `<nav>`, etc.) are used to improve the keyboard navigation of the page for assistive technology. [Learn more about landmark elements](https://developer.chrome.com/docs/lighthouse/accessibility/use-landmarks/).",
      "score": null,
      "scoreDisplayMode": "manual"
    },
    "uses-responsive-images": {
      "id": "uses-responsive-images",
      "title": "Properly size images",
      "description": "Serve images that are appropriately-sized to save cellular data and improve load time. [Learn how to size images](https://developer.chrome.com/docs/lighthouse/performance/uses-responsive-images/).",
      "score": 1,
      "scoreDisplayMode": "metricSavings",
      "details": {
        "items": [],
        "sortedBy": [
          "wastedBytes"
        ],
        "overallSavingsBytes": 0,
        "debugData": {
          "metricSavings": {
            "FCP": 0,
            "LCP": 0
          },
          "type": "debugdata"
        },
        "headings": [],
        "type": "opportunity",
        "overallSavingsMs": 0
      },
      "numericValue": 0,
      "numericUnit": "millisecond"
    },
    "third-party-summary": {
      "id": "third-party-summary",
      "title": "Minimize third-party usage",
      "description": "Third-party code can significantly impact load performance. Limit the number of redundant third-party providers and try to load third-party code after your page has primarily finished loading. [Learn how to minimize third-party impact](https://developers.google.com/web/fundamentals/performance/optimizing-content-efficiency/loading-third-party-javascript/).",
      "score": null,
      "scoreDisplayMode": "notApplicable"
    },
    "charset": {
      "id": "charset",
      "title": "Properly defines charset",
      "description": "A character encoding declaration is required. It can be done with a `<meta>` tag in the first 1024 bytes of the HTML or in the Content-Type HTTP response header. [Learn more about declaring the character encoding](https://developer.chrome.com/docs/lighthouse/best-practices/charset/).",
      "score": 1,
      "scoreDisplayMode": "binary"
    },
    "cumulative-layout-shift": {
      "id": "cumulative-layout-shift",
      "title": "Cumulative Layout Shift",
      "description": "Cumulative Layout Shift measures the movement of visible elements within the viewport. [Learn more about the Cumulative Layout Shift metric](https://web.dev/articles/cls).",
      "score": 1,
      "scoreDisplayMode": "numeric",
      "displayValue": "0",
      "details": {
        "type": "debugdata",
        "items": [
          {
            "cumulativeLayoutShiftMainFrame": 0,
            "newEngineResultDiffered": false,
            "newEngineResult": {
              "cumulativeLayoutShift": 0,
              "cumulativeLayoutShiftMainFrame": 0
            }
          }
        ]
      },
      "numericValue": 0,
      "numericUnit": "unitless"
    },
    "canonical": {
      "id": "canonical",
      "title": "Document has a valid `rel=canonical`",
      "description": "Canonical links suggest which URL to show in search results. [Learn more about canonical links](https://developer.chrome.com/docs/lighthouse/seo/canonical/).",
      "score": null,
      "scoreDisplayMode": "notApplicable"
    },
    "aria-meter-name": {
      "id": "aria-meter-name",
      "title": "ARIA `meter` elements have accessible names",
      "description": "When a meter element doesn't have an accessible name, screen readers announce it with a generic name, making it unusable for users who rely on screen readers. [Learn how to name `meter` elements](https://dequeuniversity.com/rules/axe/4.8/aria-meter-name).",
      "score": null,
      "scoreDisplayMode": "notApplicable"
    },
    "resource-summary": {
      "id": "resource-summary",
      "title": "Resources Summary",
      "description": "Aggregates all network requests and groups them by type",
      "score": 1,
      "scoreDisplayMode": "informative",
      "details": {
        "items": [
          {
            "resourceType": "total",
            "label": "Total",
            "transferSize": 215140,
            "requestCount": 26
          },
          {
            "transferSize": 189716,
            "resourceType": "image",
            "requestCount": 15,
            "label": "Image"
          },
          {
            "requestCount": 7,
            "resourceType": "script",
            "transferSize": 8911,
            "label": "Script"
          },
          {
            "label": "Stylesheet",
            "requestCount": 2,
            "resourceType": "stylesheet",
            "transferSize": 8691
          },
          {
            "requestCount": 1,
            "label": "Document",
            "transferSize": 7822,
            "resourceType": "document"
          },
          {
            "resourceType": "media",
            "requestCount": 1,
            "transferSize": 0,
            "label": "Media"
          },
          {
            "requestCount": 0,
            "resourceType": "font",
            "transferSize": 0,
            "label": "Font"
          },
          {
            "transferSize": 0,
            "label": "Other",
            "resourceType": "other",
            "requestCount": 0
          },
          {
            "transferSize": 215140,
            "label": "Third-party",
            "requestCount": 26,
            "resourceType": "third-party"
          }
        ],
        "headings": [
          {
            "valueType": "text",
            "key": "label",
            "label": "Resource Type"
          },
          {
            "valueType": "numeric",
            "label": "Requests",
            "key": "requestCount"
          },
          {
            "label": "Transfer Size",
            "key": "transferSize",
            "valueType": "bytes"
          }
        ],
        "type": "table"
      }
    },
    "input-button-name": {
      "id": "input-button-name",
      "title": "Input buttons have discernible text.",
      "description": "Adding discernable and accessible text to input buttons may help screen reader users understand the purpose of the input button. [Learn more about input buttons](https://dequeuniversity.com/rules/axe/4.8/input-button-name).",
      "score": 1,
      "scoreDisplayMode": "binary",
      "details": {
        "items": [],
        "headings": [],
        "type": "table"
      }
    },
    "meta-description": {
      "id": "meta-description",
      "title": "Document has a meta description",
      "description": "Meta descriptions may be included in search results to concisely summarize page content. [Learn more about the meta description](https://developer.chrome.com/docs/lighthouse/seo/meta-description/).",
      "score": 1,
      "scoreDisplayMode": "binary"
    },
    "visual-order-follows-dom": {
      "id": "visual-order-follows-dom",
      "title": "Visual order on the page follows DOM order",
      "description": "DOM order matches the visual order, improving navigation for assistive technology. [Learn more about DOM and visual ordering](https://developer.chrome.com/docs/lighthouse/accessibility/visual-order-follows-dom/).",
      "score": null,
      "scoreDisplayMode": "manual"
    },
    "html-has-lang": {
      "id": "html-has-lang",
      "title": "`<html>` element has a `[lang]` attribute",
      "description": "If a page doesn't specify a `lang` attribute, a screen reader assumes that the page is in the default language that the user chose when setting up the screen reader. If the page isn't actually in the default language, then the screen reader might not announce the page's text correctly. [Learn more about the `lang` attribute](https://dequeuniversity.com/rules/axe/4.8/html-has-lang).",
      "score": 1,
      "scoreDisplayMode": "binary",
      "details": {
        "type": "table",
        "items": [],
        "headings": []
      }
    },
    "meta-refresh": {
      "id": "meta-refresh",
      "title": "The document does not use `<meta http-equiv=\"refresh\">`",
      "description": "Users do not expect a page to refresh automatically, and doing so will move focus back to the top of the page. This may create a frustrating or confusing experience. [Learn more about the refresh meta tag](https://dequeuniversity.com/rules/axe/4.8/meta-refresh).",
      "score": null,
      "scoreDisplayMode": "notApplicable"
    },
    "link-in-text-block": {
      "id": "link-in-text-block",
      "title": "Links are distinguishable without relying on color.",
      "description": "Low-contrast text is difficult or impossible for many users to read. Link text that is discernible improves the experience for users with low vision. [Learn how to make links distinguishable](https://dequeuniversity.com/rules/axe/4.8/link-in-text-block).",
      "score": null,
      "scoreDisplayMode": "notApplicable"
    },
    "unminified-css": {
      "id": "unminified-css",
      "title": "Minify CSS",
      "description": "Minifying CSS files can reduce network payload sizes. [Learn how to minify CSS](https://developer.chrome.com/docs/lighthouse/performance/unminified-css/).",
      "score": 1,
      "scoreDisplayMode": "metricSavings",
      "details": {
        "headings": [],
        "type": "opportunity",
        "debugData": {
          "metricSavings": {
            "FCP": 0,
            "LCP": 0
          },
          "type": "debugdata"
        },
        "sortedBy": [
          "wastedBytes"
        ],
        "overallSavingsMs": 0,
        "overallSavingsBytes": 0,
        "items": []
      },
      "numericValue": 0,
      "numericUnit": "millisecond"
    },
    "valid-source-maps": {
      "id": "valid-source-maps",
      "title": "Page has valid source maps",
      "description": "Source maps translate minified code to the original source code. This helps developers debug in production. In addition, Lighthouse is able to provide further insights. Consider deploying source maps to take advantage of these benefits. [Learn more about source maps](https://developer.chrome.com/docs/devtools/javascript/source-maps/).",
      "score": 1,
      "scoreDisplayMode": "binary",
      "details": {
        "items": [],
        "type": "table",
        "headings": []
      }
    },
    "installable-manifest": {
      "id": "installable-manifest",
      "title": "Web app manifest and service worker meet the installability requirements",
      "description": "Service worker is the technology that enables your app to use many Progressive Web App features, such as offline, add to homescreen, and push notifications. With proper service worker and manifest implementations, browsers can proactively prompt users to add your app to their homescreen, which can lead to higher engagement. [Learn more about manifest installability requirements](https://developer.chrome.com/docs/lighthouse/pwa/installable-manifest/).",
      "score": 1,
      "scoreDisplayMode": "binary",
      "details": {
        "items": [],
        "type": "table",
        "headings": [],
        "debugData": {
          "type": "debugdata",
          "manifestUrl": "https://daniels436.github.io/site.webmanifest"
        }
      },
      "warnings": []
    },
    "aria-required-parent": {
      "id": "aria-required-parent",
      "title": "`[role]`s are contained by their required parent element",
      "description": "Some ARIA child roles must be contained by specific parent roles to properly perform their intended accessibility functions. [Learn more about ARIA roles and required parent element](https://dequeuniversity.com/rules/axe/4.8/aria-required-parent).",
      "score": null,
      "scoreDisplayMode": "notApplicable"
    },
    "efficient-animated-content": {
      "id": "efficient-animated-content",
      "title": "Use video formats for animated content",
      "description": "Large GIFs are inefficient for delivering animated content. Consider using MPEG4/WebM videos for animations and PNG/WebP for static images instead of GIF to save network bytes. [Learn more about efficient video formats](https://developer.chrome.com/docs/lighthouse/performance/efficient-animated-content/)",
      "score": 1,
      "scoreDisplayMode": "metricSavings",
      "details": {
        "type": "opportunity",
        "overallSavingsBytes": 0,
        "items": [],
        "sortedBy": [
          "wastedBytes"
        ],
        "debugData": {
          "type": "debugdata",
          "metricSavings": {
            "FCP": 0,
            "LCP": 0
          }
        },
        "overallSavingsMs": 0,
        "headings": []
      },
      "numericValue": 0,
      "numericUnit": "millisecond"
    },
    "inspector-issues": {
      "id": "inspector-issues",
      "title": "No issues in the `Issues` panel in Chrome Devtools",
      "description": "Issues logged to the `Issues` panel in Chrome Devtools indicate unresolved problems. They can come from network request failures, insufficient security controls, and other browser concerns. Open up the Issues panel in Chrome DevTools for more details on each issue.",
      "score": 1,
      "scoreDisplayMode": "binary",
      "details": {
        "headings": [],
        "type": "table",
        "items": []
      }
    },
    "document-title": {
      "id": "document-title",
      "title": "Document has a `<title>` element",
      "description": "The title gives screen reader users an overview of the page, and search engine users rely on it heavily to determine if a page is relevant to their search. [Learn more about document titles](https://dequeuniversity.com/rules/axe/4.8/document-title).",
      "score": 1,
      "scoreDisplayMode": "binary",
      "details": {
        "items": [],
        "headings": [],
        "type": "table"
      }
    },
    "network-server-latency": {
      "id": "network-server-latency",
      "title": "Server Backend Latencies",
      "description": "Server latencies can impact web performance. If the server latency of an origin is high, it's an indication the server is overloaded or has poor backend performance. [Learn more about server response time](https://hpbn.co/primer-on-web-performance/#analyzing-the-resource-waterfall).",
      "score": 1,
      "scoreDisplayMode": "informative",
      "displayValue": "60 ms",
      "details": {
        "items": [
          {
            "origin": "https://daniels436.github.io",
            "serverResponseTime": 58
          }
        ],
        "type": "table",
        "headings": [
          {
            "label": "URL",
            "key": "origin",
            "valueType": "text"
          },
          {
            "label": "Time Spent",
            "granularity": 1,
            "valueType": "ms",
            "key": "serverResponseTime"
          }
        ],
        "sortedBy": [
          "serverResponseTime"
        ]
      },
      "numericValue": 58,
      "numericUnit": "millisecond"
    },
    "pwa-cross-browser": {
      "id": "pwa-cross-browser",
      "title": "Site works cross-browser",
      "description": "To reach the most number of users, sites should work across every major browser. [Learn about cross-browser compatibility](https://developer.chrome.com/docs/lighthouse/pwa/pwa-cross-browser/).",
      "score": null,
      "scoreDisplayMode": "manual"
    },
    "label": {
      "id": "label",
      "title": "Form elements have associated labels",
      "description": "Labels ensure that form controls are announced properly by assistive technologies, like screen readers. [Learn more about form element labels](https://dequeuniversity.com/rules/axe/4.8/label).",
      "score": 1,
      "scoreDisplayMode": "binary",
      "details": {
        "type": "table",
        "items": [],
        "headings": []
      }
    },
    "deprecations": {
      "id": "deprecations",
      "title": "Avoids deprecated APIs",
      "description": "Deprecated APIs will eventually be removed from the browser. [Learn more about deprecated APIs](https://developer.chrome.com/docs/lighthouse/best-practices/deprecations/).",
      "score": 1,
      "scoreDisplayMode": "binary",
      "details": {
        "items": [],
        "type": "table",
        "headings": []
      }
    },
    "doctype": {
      "id": "doctype",
      "title": "Page has the HTML doctype",
      "description": "Specifying a doctype prevents the browser from switching to quirks-mode. [Learn more about the doctype declaration](https://developer.chrome.com/docs/lighthouse/best-practices/doctype/).",
      "score": 1,
      "scoreDisplayMode": "binary"
    },
    "mainthread-work-breakdown": {
      "id": "mainthread-work-breakdown",
      "title": "Minimizes main-thread work",
      "description": "Consider reducing the time spent parsing, compiling and executing JS. You may find delivering smaller JS payloads helps with this. [Learn how to minimize main-thread work](https://developer.chrome.com/docs/lighthouse/performance/mainthread-work-breakdown/)",
      "score": 1,
      "scoreDisplayMode": "informative",
      "displayValue": "1.0 s",
      "details": {
        "items": [
          {
            "duration": 505.3760000000021,
            "group": "other",
            "groupLabel": "Other"
          },
          {
            "duration": 354.27600000000035,
            "groupLabel": "Style & Layout",
            "group": "styleLayout"
          },
          {
            "groupLabel": "Rendering",
            "group": "paintCompositeRender",
            "duration": 109.9840000000018
          },
          {
            "duration": 28.82399999999999,
            "groupLabel": "Parse HTML & CSS",
            "group": "parseHTML"
          },
          {
            "groupLabel": "Script Evaluation",
            "duration": 21.08799999999999,
            "group": "scriptEvaluation"
          },
          {
            "groupLabel": "Script Parsing & Compilation",
            "duration": 5.636,
            "group": "scriptParseCompile"
          }
        ],
        "type": "table",
        "sortedBy": [
          "duration"
        ],
        "headings": [
          {
            "key": "groupLabel",
            "valueType": "text",
            "label": "Category"
          },
          {
            "granularity": 1,
            "key": "duration",
            "valueType": "ms",
            "label": "Time Spent"
          }
        ]
      },
      "numericValue": 1025.184000000004,
      "numericUnit": "millisecond"
    },
    "custom-controls-roles": {
      "id": "custom-controls-roles",
      "title": "Custom controls have ARIA roles",
      "description": "Custom interactive controls have appropriate ARIA roles. [Learn how to add roles to custom controls](https://developer.chrome.com/docs/lighthouse/accessibility/custom-control-roles/).",
      "score": null,
      "scoreDisplayMode": "manual"
    },
    "aria-required-children": {
      "id": "aria-required-children",
      "title": "Elements with an ARIA `[role]` that require children to contain a specific `[role]` have all required children.",
      "description": "Some ARIA parent roles must contain specific child roles to perform their intended accessibility functions. [Learn more about roles and required children elements](https://dequeuniversity.com/rules/axe/4.8/aria-required-children).",
      "score": null,
      "scoreDisplayMode": "notApplicable"
    },
    "content-width": {
      "id": "content-width",
      "title": "Content is sized correctly for the viewport",
      "description": "If the width of your app's content doesn't match the width of the viewport, your app might not be optimized for mobile screens. [Learn how to size content for the viewport](https://developer.chrome.com/docs/lighthouse/pwa/content-width/).",
      "score": 1,
      "scoreDisplayMode": "binary"
    },
    "legacy-javascript": {
      "id": "legacy-javascript",
      "title": "Avoid serving legacy JavaScript to modern browsers",
      "description": "Polyfills and transforms enable legacy browsers to use new JavaScript features. However, many aren't necessary for modern browsers. For your bundled JavaScript, adopt a modern script deployment strategy using module/nomodule feature detection to reduce the amount of code shipped to modern browsers, while retaining support for legacy browsers. [Learn how to use modern JavaScript](https://web.dev/articles/publish-modern-javascript)",
      "score": 1,
      "scoreDisplayMode": "metricSavings",
      "details": {
        "type": "opportunity",
        "overallSavingsBytes": 0,
        "items": [],
        "sortedBy": [
          "wastedBytes"
        ],
        "debugData": {
          "type": "debugdata",
          "metricSavings": {
            "FCP": 0,
            "LCP": 0
          }
        },
        "overallSavingsMs": 0,
        "headings": []
      },
      "numericValue": 0,
      "numericUnit": "millisecond"
    },
    "redirects": {
      "id": "redirects",
      "title": "Avoid multiple page redirects",
      "description": "Redirects introduce additional delays before the page can be loaded. [Learn how to avoid page redirects](https://developer.chrome.com/docs/lighthouse/performance/redirects/).",
      "score": 1,
      "scoreDisplayMode": "metricSavings",
      "details": {
        "headings": [],
        "type": "opportunity",
        "overallSavingsMs": 0,
        "items": []
      },
      "numericValue": 0,
      "numericUnit": "millisecond"
    },
    "preload-fonts": {
      "id": "preload-fonts",
      "title": "Fonts with `font-display: optional` are preloaded",
      "description": "Preload `optional` fonts so first-time visitors may use them. [Learn more about preloading fonts](https://web.dev/articles/preload-optional-fonts)",
      "score": null,
      "scoreDisplayMode": "notApplicable"
    },
    "list": {
      "id": "list",
      "title": "Lists contain only `<li>` elements and script supporting elements (`<script>` and `<template>`).",
      "description": "Screen readers have a specific way of announcing lists. Ensuring proper list structure aids screen reader output. [Learn more about proper list structure](https://dequeuniversity.com/rules/axe/4.8/list).",
      "score": 1,
      "scoreDisplayMode": "binary",
      "details": {
        "type": "table",
        "headings": [],
        "items": []
      }
    },
    "robots-txt": {
      "id": "robots-txt",
      "title": "robots.txt is valid",
      "description": "If your robots.txt file is malformed, crawlers may not be able to understand how you want your website to be crawled or indexed. [Learn more about robots.txt](https://developer.chrome.com/docs/lighthouse/seo/invalid-robots-txt/).",
      "score": 1,
      "scoreDisplayMode": "binary",
      "details": {
        "type": "table",
        "items": [],
        "headings": []
      }
    },
    "total-blocking-time": {
      "id": "total-blocking-time",
      "title": "Total Blocking Time",
      "description": "Sum of all time periods between FCP and Time to Interactive, when task length exceeded 50ms, expressed in milliseconds. [Learn more about the Total Blocking Time metric](https://developer.chrome.com/docs/lighthouse/performance/lighthouse-total-blocking-time/).",
      "score": 1,
      "scoreDisplayMode": "numeric",
      "displayValue": "20 ms",
      "numericValue": 21.5,
      "numericUnit": "millisecond"
    },
    "max-potential-fid": {
      "id": "max-potential-fid",
      "title": "Max Potential First Input Delay",
      "description": "The maximum potential First Input Delay that your users could experience is the duration of the longest task. [Learn more about the Maximum Potential First Input Delay metric](https://developer.chrome.com/docs/lighthouse/performance/lighthouse-max-potential-fid/).",
      "score": 0.97,
      "scoreDisplayMode": "numeric",
      "displayValue": "90 ms",
      "details": {
        "type": "debugdata",
        "observedLoafs": [
          {
            "startTime": 81.092,
            "duration": 137.742,
            "blockingDuration": 0
          }
        ]
      },
      "numericValue": 93,
      "numericUnit": "millisecond"
    },
    "image-alt": {
      "id": "image-alt",
      "title": "Image elements have `[alt]` attributes",
      "description": "Informative elements should aim for short, descriptive alternate text. Decorative elements can be ignored with an empty alt attribute. [Learn more about the `alt` attribute](https://dequeuniversity.com/rules/axe/4.8/image-alt).",
      "score": 1,
      "scoreDisplayMode": "binary",
      "details": {
        "type": "table",
        "headings": [],
        "items": []
      }
    },
    "form-field-multiple-labels": {
      "id": "form-field-multiple-labels",
      "title": "No form fields have multiple labels",
      "description": "Form fields with multiple labels can be confusingly announced by assistive technologies like screen readers which use either the first, the last, or all of the labels. [Learn how to use form labels](https://dequeuniversity.com/rules/axe/4.8/form-field-multiple-labels).",
      "score": null,
      "scoreDisplayMode": "notApplicable"
    },
    "input-image-alt": {
      "id": "input-image-alt",
      "title": "`<input type=\"image\">` elements have `[alt]` text",
      "description": "When an image is being used as an `<input>` button, providing alternative text can help screen reader users understand the purpose of the button. [Learn about input image alt text](https://dequeuniversity.com/rules/axe/4.8/input-image-alt).",
      "score": null,
      "scoreDisplayMode": "notApplicable"
    },
    "aria-progressbar-name": {
      "id": "aria-progressbar-name",
      "title": "ARIA `progressbar` elements have accessible names",
      "description": "When a `progressbar` element doesn't have an accessible name, screen readers announce it with a generic name, making it unusable for users who rely on screen readers. [Learn how to label `progressbar` elements](https://dequeuniversity.com/rules/axe/4.8/aria-progressbar-name).",
      "score": null,
      "scoreDisplayMode": "notApplicable"
    },
    "no-document-write": {
      "id": "no-document-write",
      "title": "Avoids `document.write()`",
      "description": "For users on slow connections, external scripts dynamically injected via `document.write()` can delay page load by tens of seconds. [Learn how to avoid document.write()](https://developer.chrome.com/docs/lighthouse/best-practices/no-document-write/).",
      "score": 1,
      "scoreDisplayMode": "metricSavings",
      "details": {
        "items": [],
        "headings": [],
        "type": "table"
      }
    },
    "lcp-lazy-loaded": {
      "id": "lcp-lazy-loaded",
      "title": "Largest Contentful Paint image was not lazily loaded",
      "description": "Above-the-fold images that are lazily loaded render later in the page lifecycle, which can delay the largest contentful paint. [Learn more about optimal lazy loading](https://web.dev/articles/lcp-lazy-loading).",
      "score": null,
      "scoreDisplayMode": "notApplicable"
    },
    "valid-lang": {
      "id": "valid-lang",
      "title": "`[lang]` attributes have a valid value",
      "description": "Specifying a valid [BCP 47 language](https://www.w3.org/International/questions/qa-choosing-language-tags#question) on elements helps ensure that text is pronounced correctly by a screen reader. [Learn how to use the `lang` attribute](https://dequeuniversity.com/rules/axe/4.8/valid-lang).",
      "score": null,
      "scoreDisplayMode": "notApplicable"
    },
    "diagnostics": {
      "id": "diagnostics",
      "title": "Diagnostics",
      "description": "Collection of useful page vitals.",
      "score": 1,
      "scoreDisplayMode": "informative",
      "details": {
        "type": "debugdata",
        "items": [
          {
            "throughput": 74649549.18939269,
            "numStylesheets": 2,
            "totalByteWeight": 215140,
            "maxServerLatency": 58,
            "maxRtt": 7,
            "numFonts": 0,
            "numTasksOver50ms": 0,
            "numTasks": 353,
            "numTasksOver500ms": 0,
            "rtt": 7,
            "numTasksOver10ms": 3,
            "numScripts": 7,
            "numRequests": 26,
            "numTasksOver25ms": 1,
            "numTasksOver100ms": 0,
            "mainDocumentTransferSize": 7822,
            "totalTaskTime": 256.29599999999976
          }
        ]
      }
    },
    "network-rtt": {
      "id": "network-rtt",
      "title": "Network Round Trip Times",
      "description": "Network round trip times (RTT) have a large impact on performance. If the RTT to an origin is high, it's an indication that servers closer to the user could improve performance. [Learn more about the Round Trip Time](https://hpbn.co/primer-on-latency-and-bandwidth/).",
      "score": 1,
      "scoreDisplayMode": "informative",
      "displayValue": "10 ms",
      "details": {
        "items": [
          {
            "origin": "https://daniels436.github.io",
            "rtt": 7
          }
        ],
        "headings": [
          {
            "valueType": "text",
            "label": "URL",
            "key": "origin"
          },
          {
            "key": "rtt",
            "label": "Time Spent",
            "granularity": 1,
            "valueType": "ms"
          }
        ],
        "sortedBy": [
          "rtt"
        ],
        "type": "table"
      },
      "numericValue": 7,
      "numericUnit": "millisecond"
    },
    "uses-passive-event-listeners": {
      "id": "uses-passive-event-listeners",
      "title": "Uses passive listeners to improve scrolling performance",
      "description": "Consider marking your touch and wheel event listeners as `passive` to improve your page's scroll performance. [Learn more about adopting passive event listeners](https://developer.chrome.com/docs/lighthouse/best-practices/uses-passive-event-listeners/).",
      "score": 1,
      "scoreDisplayMode": "metricSavings",
      "details": {
        "type": "table",
        "items": [],
        "headings": []
      }
    },
    "empty-heading": {
      "id": "empty-heading",
      "title": "All heading elements contain content.",
      "description": "A heading with no content or inaccessible text prevent screen reader users from accessing information on the page's structure. [Learn more about headings](https://dequeuniversity.com/rules/axe/4.8/empty-heading).",
      "score": null,
      "scoreDisplayMode": "notApplicable"
    },
    "font-display": {
      "id": "font-display",
      "title": "All text remains visible during webfont loads",
      "description": "Leverage the `font-display` CSS feature to ensure text is user-visible while webfonts are loading. [Learn more about `font-display`](https://developer.chrome.com/docs/lighthouse/performance/font-display/).",
      "score": 1,
      "scoreDisplayMode": "metricSavings",
      "details": {
        "headings": [],
        "items": [],
        "type": "table"
      },
      "warnings": []
    },
    "pwa-page-transitions": {
      "id": "pwa-page-transitions",
      "title": "Page transitions don't feel like they block on the network",
      "description": "Transitions should feel snappy as you tap around, even on a slow network. This experience is key to a user's perception of performance. [Learn more about page transitions](https://developer.chrome.com/docs/lighthouse/pwa/pwa-page-transitions/).",
      "score": null,
      "scoreDisplayMode": "manual"
    },
    "main-thread-tasks": {
      "id": "main-thread-tasks",
      "title": "Tasks",
      "description": "Lists the toplevel main thread tasks that executed during page load.",
      "score": 1,
      "scoreDisplayMode": "informative",
      "details": {
        "type": "table",
        "items": [
          {
            "duration": 19.803,
            "startTime": 81.097
          },
          {
            "duration": 7.025,
            "startTime": 105.917
          },
          {
            "duration": 46.71,
            "startTime": 183.14
          },
          {
            "duration": 14.424,
            "startTime": 241.713
          }
        ],
        "headings": [
          {
            "granularity": 1,
            "label": "Start Time",
            "key": "startTime",
            "valueType": "ms"
          },
          {
            "key": "duration",
            "label": "End Time",
            "valueType": "ms",
            "granularity": 1
          }
        ]
      }
    },
    "td-has-header": {
      "id": "td-has-header",
      "title": "`<td>` elements in a large `<table>` have one or more table headers.",
      "description": "Screen readers have features to make navigating tables easier. Ensuring that `<td>` elements in a large table (3 or more cells in width and height) have an associated table header may improve the experience for screen reader users. [Learn more about table headers](https://dequeuniversity.com/rules/axe/4.8/td-has-header).",
      "score": null,
      "scoreDisplayMode": "notApplicable"
    },
    "aria-tooltip-name": {
      "id": "aria-tooltip-name",
      "title": "ARIA `tooltip` elements have accessible names",
      "description": "When a tooltip element doesn't have an accessible name, screen readers announce it with a generic name, making it unusable for users who rely on screen readers. [Learn how to name `tooltip` elements](https://dequeuniversity.com/rules/axe/4.8/aria-tooltip-name).",
      "score": null,
      "scoreDisplayMode": "notApplicable"
    },
    "screenshot-thumbnails": {
      "id": "screenshot-thumbnails",
      "title": "Screenshot Thumbnails",
      "description": "This is what the load of your site looked like.",
      "score": 1,
      "scoreDisplayMode": "informative",
      "details": {
        "items": [
          {
            "timing": 378,
            "data": "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAHyAPoDASIAAhEBAxEB/8QAHAABAAIDAQEBAAAAAAAAAAAAAAUGAgQHAwEI/8QAShAAAQQCAAQDBQUEBggDCQEAAQACAwQFEQYSITETQVEHFCJhkTIzcXKBFSNCoQgWUrHB0SRTVGKSk9LwFzThGDdEY3OCorPC8f/EABsBAQACAwEBAAAAAAAAAAAAAAABAgMFBgQH/8QAOBEAAgIBAgMECAUDBAMAAAAAAAECEQMEIRIxQQUTUWEicYGRodHh8AYUMrHBFRZSI0JTcmKi8f/aAAwDAQACEQMRAD8A/Mp1s9AnT0C8iepXzatZho9unoE6egXjtNpYo9unoE6egXjtNpYo9unoE6egXjtNpYo9unoE6egXjtNpYo9unoE6egXjtNpYo9unoE6egXjtNpYo9unoE6egXjtNpYo9unoE6egXjtNpYo9unoE6egXjtNpYo9unoE6egXjtNpYo9unoE6egXjtNpYo9unoE6egXjtNpYo9unoE6egXjtNpYo9unoFlyf7v8lrg9V0fF3Zm42o0W52gRNAAzFdgHQdOUt238D1C9GnwrM2m69lmPLJwVpHPy3Q6t/kvRrW6HQKycaWZJqdcSTyygPPR9+Kxrp6MAI/EquM+w38FXNjWKbinfwJhJyjbI5zup6r5z/NYktJ3s/RPh9T9F5zPRlz/NOf5rH4fU/RPh9T9EFGXP805/msfh9T9E+H1P0QUZc/zTn+ax+H1P0T4fU/RBRlz/ADTn+ax+H1P0T4fU/RBRlz/NOf5rH4fU/RPh9T9EFGXP805/msfh9T9E+H1P0QUZc/zTn+ax+H1P0T4fU/RBRlz/ADTn+ax+H1P0T4fU/RBRlz/NOf5rH4fU/RPh9T9EFGXP805/msfh9T9E+H1P0QUZc/zTn+ax+H1P0T4fU/RBRlz/ADTn+ax+H1P0T4fU/RBRlz/NOf5rH4fU/RPh9T9EFGXP8198T8Fh8Pqfonw+p+iCjMvUhH9238Aoz4fU/RScX3bPwClFZESiIoMgREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAFLRfdM/KFEqWi+6Z+UKUUmRKIiguEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBS0X3TPyhRKlovumflClFJkSi+6TSgufEX3SaQHxF90mkB8RfdJpAfEX3SaQHxF9WcUTpHAMBJPkEDdHmvoBKnqXD8r3tE58LbS4DuenyUtBg68Z6jnPzWx0vZeo1N8CqvHb6kxjKf6UU0McfJPDd6LoUeKg10hH6Begx8QAJibreuy2C/DubrNfEyrTZH4HOfDd6L4WkLoFzGReDG4Rt2ZmsP4FRM9GF5+w0E+n/osD7Dz8TjFp1/JgkpRk4voVRfFOWcU0AmM/VRk9V8R6ha3PpM2ndZY0RxdGayL7r1TS85Y+Ivuk0gPiL7pNID4i+6TSA+IiIApaL7pn5QolS0X3TPyhSikyLREVS4REQBERAEREARFI4PFzZS9HXgbtzj1J7AeqtGLk6RDdGeCwtnL2hFXZ83OPZo9SumY3g/G1qzWSbkl/ieSRtbOExFjEMDa0cH2eU82+vzPzUvLBmuUOhhoF3cB3Mt3odPDGrzY236rRnhja3fMiP6q47ezHv9SqlxI7AYubwY6vvE/wDEGvIDVZbt7OPyceIYylHasN0ZIw79031Oyrrw57OeHWwsE8JvTuG3yyuPxH5BeXtTtbBpX3eOC4v+qNnptDl1UXOKSS6tH59s368zgKtBkXU/xuP+K2qGLy914bUxsspPUcrT/mv1JifZzw7Rm8SDGQl5O9v27X1VxgwtVjWiOFjddtNA0tHPtXJLeC/ZfBE/0/DF3llfqVffuPxbLSv42blymKnYO/xNc0qTx9Ghfjc6CEEjuCSNfzX7KdhYnt+OFjx6OaCuQe1b2cR1qtnP8NxGG9F8c9Zg+CZvmeX1Wy7M7cWKahqsacX5Iwz0mOv9N36ziVnF1ogzUIPxtBGz16ga7rydjIGE8jO/zOlKtiyFupHZibTMb9OA+LyIP+C8ZIMkD8Ta2/xK69R0+WTnHFcWlXo+s8jwO3cdvUVjI44xkuZ2UUQWnRVwnjvlp54q+vxKhspjZIAHP5DvzYSQub7Q0awy4sadea5HmnB435EQiEaOii1YCIiAIiIDFERSApaL7pn5QolS0X3TPyhSikyLREVS4REQBERAEREB9jaXuAC6lwg3G4bFeJZsMZZl6vJB+EeQVH4Soe/ZaBjhtgPM78AunZGmyRvKGDp6Ld9j6LJll3sWlW26v+UY5ZVjuT3ola2ewkkQ8S/GAOvQO/yWwzizBwkEZOPTR1HK7Z/koDgsNObyFeRo5WsYeT9D5rY9qRipcKHw2hr5ZGsGvTuf7lsMs82OE5Nr0b6Po68T0wyKcVN7WRuOyUeUzd29GSHSfC35NXVuBi/lb1Lh81w72exudWe8jq53+a7bwfbgpsjY+eHmPXXONr53rm5Zbbt9T6N2fBrseNLdnSK7ieXQUnAdvHRR+MtV7DQGub2UhC+PxftjophyOUzWm00SzCDD2UHkWCQPa4AhwIIKl22IeTlDgCom+w82x1Ctk3R58O0j8wV5aeDy2dw2RkZD7tac6Hm39hx3/koW9mMYHlsVmNx6nfVb3tGnlq+12+ANeK+MdRv+z6qbzdGKOVxbvud67Ltuwdblmu6TXJc7+ZmlGU7jF1wsol7LUxWeWzguI0A3usLtqhLAGOst+Jo9T5BWGSszm2WDovCxXbINuYHaGhvrpbvUabLkblJrlVU/mYnppvm09q5HN7kQY7bSC09QR5rWVm4iqNYA5jdKskaJC4vUYXhyOD6GmcHjk4S6BERYAEREBiiIpAUtF90z8oUSpaL7pn5QpRSZFoiKpcIiIAiIgCIg7hAWzgmJ7robFM+J7mk7ZrfTXTr+KvYxF2eTbMlbYNeQZ/0qk8ICeG1HYiqTWGBpb+7A7k/M/JX2pm54+jsNknH0bG0//wBLpuzO6hgubd+uS/bYxqLceR40+HLtW1LPBlbkcsoAe4cmyB2/hVe9o9TIw4iB13KT24hJprJQ0a6d+gCt7OJTJZfBHhMkZY2hzm8rQWg9j3UBx3LJk8Q2J9K1U5ZG68cAcxJ100SnaGXTR08pRu/W+bZ6dNp5558EF0b9ysp09+ajjK9SvIYuZvM9476PVfWYazJSN3GT2ZOQbcBE4a/VWW/wDkcqBLjWGTQA5eg7fqtzDeynKbEl6VzWj7TNa/ntcd32NbqVHUZOz9VLM8WSFpJJPiqvNb/CmRnsv4yzNHiGnR94kmgmlEfI871v0X6I9o923hOEJ8lUndFK1o+Jrdkb81xnhnhKLDcb0nxTB/hSDQPXR8+q/SlupHexfu8zWvje3RDhsH9F58koTnceRZ4dRooQjqd3b89tqPyjwje4m4tybg7ibKQtZ8Rcxskh/wCFi7dwLYyFS6+u/iR2Zh7SRWIuSWI+vr9Qq9Y9g9Z1501TK2arS4u5YxvQ323sK84HgKDD3Pe23Ls8gHK1s0vOGj0G+uv1V87tei/gYtO8UU45d3423fs6HH/bZjnP9qmMdHtpswNdzAdi0nr/ACC0c1UvFodJk7JB8hy9P/xXWONcJHf43wk8tdsxbWmYOYkAEaIPT8Sud8YPkrXrNeGhNKI3coeJGj+RO1t+wtRg7xQyXft5ewdxFYpTfXwu+XkUG225BGXjIWCB1O2t7efkt6xQsskcI8jY5QSBzMbv+QXjdF2WIsGOm+IdPjaf8Vsz353Ocf2dYAJPct/zXaT/AC7n6LdV/wCZqcSam+K66cyFylWdsTjNafK3XZwA/uVQmHLIVd79l7oSJKkrAdDbiP8ANUu4NSlcz2tGCypwfTz/AJPBqqWb0eq++Z4oiLVGIIiIDFERSApaL7pn5QolS0X3TPyhSikyLREVS4REQBERAEHcIg7hAdZ9mTGnGPJA34muq6PVYzl5vg1+HdcJ4chhs2KsczecOLgWkkeQ12Kv9ThzGSfC+r0PT7Tuv811eg7zJp1wpUtuf0MmKb7tE5iwx/G2W7ACvCOvr8S9eMYG2GVQQHsD+v6Ha0q3CmHj5nDHxFz2lpLxzdP18143eHqWKpSz46BsTgPiI31C8faemyvSZFS8eb8b8DcdiZ449bj4+W696fzJrgzIsq3iJHHlcdd+gVu4j4kp0qLzsPk10aD/ADK4Rw1kJZMi+NsnU9dLws8TB16WDIuLWb0QRvouElhm5uMTtMur0eWMNTldW2vK14s2v/ECOLMwSwVG9JOZ0hd1Pn6Ls9/2uUsfjqcj6FmzzgB3hAAN/VcIpYTB5WyZPensYT9kDR/TZXXOERgMJRFVplkj+1uw1rh9Flk8ca4OnNHhjp9ZrYTnqqkv9rjTr2Lo/N2dDfxhFWNWWxDLHSstDo5XDtvyKtcFuOes2RjwWkbB2uZcU5rDWeHZWWbkTYHAN2OhYfI679FH+y/N3JcaI7MviMY4sa/sDo6WLvGo2+R58vZ0Zw9FcMlzXivmdKseGLXjOa0lsbtO11C5TefDansyPfGDI9zidjzKufE+egx2Lk5yTPYjcyJoHc/9lcRt0qr2ue+vEXO6kBmgtz2FhyylLLBeSvb+DHhlPCnSv2kpeZFHI4McD89rQke3r8Tfqq1fx9KOCRzKsIcBsfCvO7jqbLMwZVjDQ4gADsu/g9RfA4q68X8jVT7RnGVOHx+hv51zXU3EFvcefzC53e++KslmrWjAcyFjSOxAVauHcpXN9scXerjq66b/AMI0mszPNnUmq2PBERacwhERAYoiKQFLRfdM/KFEqWi+6Z+UKUUmRaIiqXCIiAIiIAiIgLFwy6c2YzVMYlYdgSb1/JX2vb4hZoxjGkjsSJB/ILmWDtGrbjePIrpFTiDHNaRJbjafMHf+S6TsmeOWFwlPhafjRl08YNNS6EjRzPEc1mzAxuIMsPLzh3i9iNghbNp/FFmnJHKzEckjS08ok5gFB4DO0GZ7KyyWGeE9sYa4g6IAOz2+asg4qwxZp2QhH6H/ACXoj3c4tSydWua5XR6McMcXxXun4nIYLkmKzDZW/ba7TgrLl6GOybYbc7nNcTp5YfJQnHjaTsy6zjrEc0M3xEM/hPmsuHmSXwYA4demiuM1eHuZ2ny6+RuuztTxueklHjjLdLzOgcH4HEwWWvbNBPBr7NmMuAP6aK6HWx9GeuyCBuDa4bAPguc4j9XLkNLg+zJLqCxJG8+TT/6q98LcP5DFTxyzySzMDt7ed6WtyZMb5u2dZjwzilB4+6SX+Sr3czdtezDGm1bydiSSU6L44geVgOvT0+S3eErEZrinyiKRhJd09VabVktoudKQ0cvn+C5bFdfFk3tqvGnP0T8tryzk8qcfAjRY1KGS6Tbu/MnPaNLLNksVVquhADD1k3rffy/BRoxUsuNPOaniEf72wVFZHP1LebrzOsjkY/WyDprQCPRYW+IMa6ctZbaRvr0P+S7DsjClCGOWSqSfNdd2aHKsU+O8lVy3IK7i8i9r4/Grcrun2XbC17VDJl5f4lUl3UjThoqbny9E7f71Gd+gJ/wUdZzFJv8A8SPof8l0ssuJPiWbf/sjXy02ma4uP4orWRZagYTYMOtHXJvaqs55pCrFxDebOdxnbNbB9VWidklc1rsve5W7s5zLwvNJw3S2CIi8RAREQGKIikBS0X3TPyhRKlovumflClFJkWiIqlwiIgCIiAIiID7G7leCrfw9cbI1sbj8Q6BU9bNKw6GQEEhevRap6XKsi3IT4JKa6HU67joFskrT2OnkbXtEAX7c9+z0bzOJVPw0klxz2vvWWE65Q1wH4+SnY8aHfayF4k//ADR/0rsMGu76PFix7ew2WKLzx4oR29hF8dwNJruBJID97O9a1/mqXBalqy80Ly1w8wuh5DDRS0pSbVx8rY3BviSggb79OX5Lm8g0VzHbGKXf95ONcX8GLNDJgalVeH2i2VOM7rK/KZCyZv2ZB3Vq4f8AalLXr+HfcZHepBK5MvrWlzgGjZK0c9JilzR7sfb2ti1xS4um+51bOe02bIRmCuw6PQAbG1K8E4yy+jcyFrmEjY3OA9CqvwNwvzyxz2W7ceoB8guuutVcHhJ5puURNYeYHz6dlrc+XHg9DEtzqtH+Z7r8xqnVrZckl4spktl4b0e/X5j1ULalcXk7d9VRshxFfnuTPhsPjhc4lkY7NHovejla8zA2/PdbJ/abIOU/pyrvNF2phx847v1HM6vtPHnfDBfsWZ1t8MsRZI4blZvTj1+ILWytprYjs/ETv8eq1JY6Xh+Iy1Zfrq396Do/RQOQtlw5edzteZPVU1+sTk5R6o1ubUvFxQivSl6tvvoal6YySFaqE7Oyi0LdnhjHhVBERQWCIiAxREUgKWi+6Z+UKJUtF90z8oUopMi0RFUuEREAREQBERAF8X1EBtU7b4Hgg6IVrx/EAEX7xhe8ehAJVJWccjmHoV6tPq8und42TjyZML4sTou13imJkMkRglEhbrRI81Sj8Q2tttpsjeWZocPmvohrP+w5zD9Qp1Wqy6pp5HdFsmsnkrvTVggfM8NaNkq78McPsY+OawBvfYqvUgytIHMka78eimW5eRo+CRg+v+S1eojmn6MDcdkars7Ty73UO2ulM6nDYpY6r4j3sY1o25xK5Zx9xg/OSe61SW0mH/jPqVFZSzcyB/f22+H/AGRtR4qV2H45XP8AwGv81g0vZ/dS7ye7L9r/AIhWrvHhtR+L+hoLbhpPcOab92z59yvYTQQD9ywA+p6las1l8hPVbI5vilL9Ko2Jp2Qs8OEaH960XOLjsr4evdFDZeMFEIiKC4REQBERAYoiKQFLRfdM/KFEqWi+6Z+UKUUmRaIiqXCIiAIiIAiIgCIiAIiID4voJHYoiAyEjh5r74r/AFWCJZFIyMjz5r4XOPmviJYpBERCQiIgCIiAIiIAiIgMURFIClovumflCiVLRfdM/KFKKTItERVLhERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAYoiKQFLRfdM/KFEqWi+6Z+UKUUmRaIiqXCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAxREUgKWi+6Z+UKJUtF90z8oUopMi0RFUuEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREBiiIpAUtF90z8oUSpaL7pn5QpRSZFoiKpcIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIDFERSApaL7pn5QolS0X3TPyhSikyLREVS5PcD8LXuMuI4MLi5K8VqZr3tdYcWsAa0uOyAT2HorNm/ZHncdh7eTp3sLma9NvPZGLt+M+Jo7uc3Q6D5Le/oz/wDvcxv/ANCx/wDqcrH7DsLlcDxNxLmM7Rt4/Cw4yyJ5bUTo2P2Rpo5h1PQ/9lSiDhSLufsTq0ans64mz0EjYM1DajgbYFAXX1oSGnbYv94lwJ+XyWj7QYMYfaxwvNVwViaSxHWlu0DS9297fzHbmRnoOcDt672lCzjSlf6v5IcNft91fWKNj3RsxcPik0XaA79h3X6A9qFU8Q8FcSzY25C6DGPZLJQyOIbWnojm+xFK0AHtrXxbHn1Vbbmck7+jDFHVhilY3JSU5S2uHckPIXFxOuh2ftd0oWcORfpD2SV7uG4e4PbZfThp5q27lgqYkWprbOcA+PK46Y0A+XUD11pQnBWCxX/tBcT1TQrysoi3PQpPYDG6ZpHI0N7HQLiB8koWcKRd64gs5TNewjP5bibE16uUOUiiZOKbYHvYC3yAHYkjfy15LTmwkmQ4H9kMmPxxnc+3Myw+KHm3/pA+2QPQHv5ApQs4ii/Q8ODw+Q/pUZGjkK1c1I9yw1iweG+RsDSBy9j5nXnpRvtZmqZP2ePt5COxYy0GR8Kve/Y3uLWs18UDj567jfolCzhSK4ZDC8JQ8GxX6fE80+fcyMvxppua1riRzDxO3Qb/AB0u94GCPK4XDYDHRDB25sYAcVk8M2araPIdzeM0cwJ0Tsu9Om0oWflRF2z2E4unXx/GuRl8L9s4uNjK8wq++GAFzg+RkX8R6d1Ee3YUZncO3oas0WSs1Cbc76BpttaI5ZQztsgnf6KKBypFdvYrDHP7VOG4p42SROtAOY9oII5T3BXTr2SHEHDPtXxlyhjmU8JLzY9sNVkZgIme3YcBsk8o2T6lBZ+e0XbeDn2+HfYzXz3B+Lgu52zk3V7lg1RYkgjA+FgaQdA9Ovz/AAUD7f8AG06HE2Jmr04aF+7jIbWQqQt5WxTu3zfD/DvQ6f5pQOYIiISEREAREQGKIikBS0X3TPyhRKlovumflClFJkWiIqlzcxGUv4a8y7ibk9K2wENmgeWPAI0dEfJSGZ4v4jzdX3bL53JXa+9+FPZe9pP4E6UficXey9v3XF1J7djlL/DhYXO5R3Oh5BTH9ROK/FqRHh3KiS2C6FvuztvAGz5eiAjsBn8vw9ZdYweRtUJnjlc6CQs5h6HXf9V45DLZHI5N2Rv3rNi+XBxsSSF0mx2PN36LG9jb1DJPx92pPBeY8MdXkYQ8OPYcvfrsLezvC2ewEMM2axF6jFN0jfPC5gcfTZ8/kgPbM8Z8SZug2ll85kLlQaPgzTuc0kdtjz/VatDiLMY/EW8VSyduDG29+PWZIRHJsaOx+AC9qHCXEGQosuUsNfnqPjfK2aOFxYWMOnHfbQKwwHC+c4hbM7B4m7fbD946CIuDfkSPP5ID1x3GHEeNxYxuPzmRrUA7mEEU7mtB3voAenXqtL9t5T9tftf9oWv2rz+J734p8Xm9ebvteceLvy5QYyOlZdkTJ4XuwiPic/8AZ5e+/kt3iDhfO8OiI5zE3KDZdiN08RaHEeQPqgLVa9pNvJ+znL4DOTXshk7t2Owy3NLzNYxgb8PXr5Ht06qr43iziDGYt+Nx2Zv1qDzzOginc1m/PoCpDhDgbNcQ2cfMzGZAYexZZBJdjgLmMBcGl2+3Tf4LW4v4bfh+Oclw9jvHuvr2jWi5WbklIPT4R5/ghBGWMzk7OX/ati/akyfMH+9OlJl5gNA83fY0FtcQcU53iJsLc7lrt9sP3bZ5S4N+YHr818z/AAxnOHhEc5ibtBsv3bp4iwO+QJ8/kodCQrDW434nq4n9l1s/koseG8ggbYcGhv8AZHXoPkpv2fezbL8TZnEMu0MjUwt95b7+2uSwDlJBBPTRI1vt1WrieFadnPcUY+xLkCzFRWHxPq1jKXOjfyjn19lp8z5ICuYTM5LBXRcw16zRtAcviwSFjiPQ67j5Jm8zks7eNzM3rF20QG+LPIXu16dew+S9cDw/l+IJ5IcJjbd+SNvM9teMv5R6nXZY5LCZLFPrDLULVMWNmPxoiwvAOjoHvooDVx161jbsNzH2Ja1qF3NHNE4tcw+oI7LZZnMpG3ItZkLTW5HrcAlP+kdSfj/tdST19VbZPZ7JkPacOFMA66WHkPjXqzonxtLQXOezuAN/r09VAZ/hXJ4ni6zw+Klqa6yd0UMYhPPM3Z5XBvfTgNoDX4f4lzfDr5HYLK3KBl+37vKWB34gdCtC/dtZG5Lbv2JrNqU8z5Znl7nH5k9SpHiDhfOcOiI5zE3KDZdiN08RaHEeQPqprjrg+Dhvh/hLIwWpZ35ql71Ix7QBGfh6DXcfEgKYiIgCIiAIiIDFERSApaL7pn5QolS0X3TPyhSikyLREVS51P8Ao22GVfaU2WSVkQbRsac9wA3y9O6lH8TZNv8AR9nkGXs+/ScQ8rne8HxCzw+bvveuYA/iuMIlg/RXF+WxFH+k5hcjk5oDQbDDzzEhzGvMbg1zj26OLevlrfkntTsz47gXievepV44cleY+u+xnPe5JXB/N4sMYZ8I5e4JGh+C/OqEk9ypsijsHFGdt0fYLwPSxuQlgE8tsWY4JS0ubzkBrtHeiHHoehUtwvBkOI/Y1g8XwRkoqeXoZJ8uQiFptd5BJLJSSRzNA19PkuEoCR2OksUdj4Xpvve3iaHJ8YeNbYH7ylJ7YTYkEYHhscRoE/Z38ip72rNLPYlBUlqsp2q+cDn1TkvfZY2mJ/xPfs6JJB0NDqOnVfn5EsUfpil7/lnezHMcN5qtV4fxteCC+w3GxCGVrgJA9hILi4fCBo7/AAO1B8P5bG0f6SPE81u3XrusOtQ07cpHhxTOA5Xb7DzG/muBolijunEEeR4b9jvEGL47yUVzKZC7FJjYHWxZkaWuBfKCCeVpG/8AsrhjdBwJGxvqF8J33RQSfrSq65f9qfCvE2IzVWPg00WQNZ741jWnkcPB8Le+bm0e3TXyXN/ZxYhZxr7UnPmja2TG5AMJcAHEy9Neq4n5a8kU2RR2b2YF+W9kXEnD2CyNejxHJejskSWBA6euGtHKHkjsQ4n8fmvf2/iZmP8AZ023djvWG40CS0x/O2VwLNuDv4gfXz7rnvB/G1nhrH3ce7G4vKY645r5K9+DxGhw7EEEEHt9Atfjfi+/xfdqzXoq1aCnA2tWq1Y+SKGMdg0bKA7BxBlIav8ASwr2W3WRVnzV43ytl0wgwtGid61vSisZh7bv6Q16DN5ufHTSSWLFexBbbzyMcXeHG2Q7DdtOtHsOmlxFNne99UsUfoH2rNLPYlXqS1Y6dqvnA59U5L32WNpif8T37OiSQdDQ6jp1VV9sc0UvBHsyZFKx7mYgteGuBLT8HQ+i5QiixRM8XcO2+Fs3Li8hLVmsRta4vrSeIwhw2NHQUMiISEREAREQGKIikBS0X3TPyhRKlovumflClFJkWiIqlyW4WwkvEGagx8LxHz7L5CNhjQNkqwzYjhC1DcgxuWtw3a7C5slsNbFMR5N8xvy/xUf7OMzXwvE8U148lWVjoJH63yBw7/UBST+EMZQivW8tnKclNrHGsKkwdJK7+H4fL5rYYMaeK4xTdu76Ktv53BW8Tw9lsvD4uNoy2I+fw+ZmtB2t6+i934iOLhea7LDcbcjt+7l3w+CAB1B8+bf6KbxmSbV9ll+CG22K2++0hjZNPLdN6gd9dF5R2oP/AAqmrOnj95OS5/CLxzlvIOuu+vmqrDjUfPhbBEw8J52fHe/xYyw6qW84eANlvqB3I/RamMwmSykT5MdTlsMY4McYxvRPYLrfDxxeOyeNnZdpy13VOT3yzfJk5uU/AGE6aB8x/NUrB3Yqvs+4ogFmOOzJNEGMEgDnjnG9DzGtrLPR4oVb6O9/BX4dfaCr5XD5DE3G1cjUkgsOALWOG+YH013VnwfAl2Rl6TOVbdSKKm+xC4aHM5utA99fh0K38llqUdjgS1PPHM2rE33jlcHOZpw+0PUd9Kdr+HSy/FN2zm6MtbIVZTXY2yHF++3TyIHTX0V8Olw8bb3Xs6q9/wBgcww2Ayma5/2XSlsBn2nN0APls9N/JaV2pYo2ZK9yF8M7DpzHjRCvWI5cxwDWxWOyNaler2nSzRzTeF4rT2cD56/w/BR3tMyFW9majKs7LT61SOCaww7ErxvZB8+/debJp4RwrInvt6nfT2Ar+Hw+QzNh0GMqyWZGjbgzs0fMnoFnbwWTp5OLHWacsd2UgMiI6u320exVi9n9enPQzHj2GmzyMEdOS0a8c42d8x2N69FYczZr2eMOCfdpqknhtjjeK0nO1jg/q3eydem1fHpISxKbe7a/evvf2Aod3hfN0qL7lrG2IqzHFrnuH2euuo76+fZbE+Erx8C1s0Hy+8yXDXLCRycoaTvtvfT1XQLhbiMxxZkcjla01SzDJBHXE3M9zz0DSzuNdR+qp1qzAfZXTrCaI2BkXPMQcOcN5D113181fJpseLiXk+fk+ftBFcRYhlLIU61GC7zTwRvDJ2jnc539kN8vTzXnl+G8xh67J8lQmrwvOg92iN+h12P4q9W8xjq3tF4duzWIZKsVKON8jHBwjcWOHXXoSPwUNxLjp6OKyUlniOGZlmwHx1IJvF94675naPw679fRVy6bHU5Lo3yrbb+QQVbhPO2scL1fGWH1S3mDwB1HqB3I/ALTxGHyGZsOgxlSSxI0bcGDo0fMnoF1vhw4vH5DDWY7tOav7ryut2rxMjXFp/dtj3po3ruP5qr8H8uS4cz+Bp2IoMrZnY+IufyiVoPVoP6H6q70ONOKvnftpWq26+32gplvE3aOSbRv1pobBcB4Zbtx36Dz/RWDinhePEYz3qOnl4+Z4DTZjYGNb16ktJOz00CBrr3UnVnh4f48wxzOX/aPu0fJM7q5tZ2iA0HZ2ASt55bhMTxPJlMvVvMyLCytFFOJHSOJOnkfw62P+9KIabHwzT8/Dale/r5Ao2M4azGUpvtY/Hzz12729o6HXp6/otfFYbI5a0+vjqks8zBt7WjXL+JPb9V1DCXqVzAcOPqOx4lx4IlFm4YTC7f2+UH4ge/6qH4ZyvvHEHEbmSYl0V07dUsOLI7OnH7DzrXcnr6/R+TxJw9Ln8r29u3X+AUXLYq9iLXu+SrSV5tcwa8dx6g9itJXP2kx46ObGjHyBs3gkT1mWTYjg6jTWu+vT8FTF4tRjWLI4LoAiIsIMURFIC9RPKAAHnQXkiAyREUAIvrWucdNBJ9AF9dG9paHMcC7qAR3QGKLKSN8buWRrmO9HDRX0wyCMSGN4jPZxHT6pQMEWTIpH65GOds6GhvZXxwLXEOBBHQgoD4izfFJGGl7HNDuoJGtoyKR/LyRvdzdtDe0pgwRfQ1xdygEu3rWuq+yRvidyyscx3o4aSgYrZxtyXHX69ytyiaB4kZzDY2D0XvmMa2hd93gsx3ByNf4kIOuo7fotANcWlwaS0dzrsrNShLzQPfJXJcjfsXLPKZp3mR/KNDZWusxDIYzII3mMfxaOvqkUUkrtRMc8+jRtQ7bt9QYIhBBII0R5FZMY6Rwaxpc49gBsqAYraxtw0bImbDFM4DQbKDofPoQtZzS1xDgQR3BXxSm4u0DZyd6fJ357ltwdPM7meQNDf4LWREbcnbAREUAIiIAiIgMURFICIiAyREUAuvsh0OM4iQCBBKdH8pUrwBlJc7xfZs5aXxrsNOQUwGN20g9mDoCQCdbXOa9iatJ4leWSKTWuZji06/ELGKR8UjZInuZI07DmnRB/FezDq3iUI1sm36+X7A6Lx5I6fA4h1yrfdc94cGWMgyOJ72ebSA7egddSNK15hljKUcnCTkMS9tPmfBPEyWnyhoPwO1oH5g779FxS3cs3ZBJbsSzvA0HSPLiB+qzfkrslQVX3LDqw6CIyEt+nZZ1r0pSbTp118FX3/IOicNOy0fstdJgGPddbfPWJgc8N5RvlH07eW1u5KGjJ7SuGxlmQizJVY66wgBpn5Ty83lvev5KhwcSzV+Fo8RWY+GVlo2RZZIWkfDrWh/moOWWSaV0s0jnyOOy9x2SfxSWtjGEIpXXD6tgdWuOzFnAcUjjGItrRDdQysDeWXZ5RGR3Hb/va04stcxPAHCL8fL4L5bEzXvDQSWiU9NnyK53av3LcbGWrU8zGfZbJIXBv4bXm6zO6GOJ00hiiJLGFx00nqdDyVZa7duN3VXe/O/oDq026ftfyjqlA2f3HMWROa17dxt29m+7u/T5lRntJrSSYPF3jduSRGV0bIb8IZYb5k82gS3p/cufOuWXWhZdYmNkdfFLzzfXuly7auvD7liad4Gg6V5cQP1UT1sZwnCv1Nv3uwdJ4nywwftQo23dIBBCyYa6Fjm6P9+/0Wvx5Vh4V4eOGqSB0mRtPsvLfKFp+Bv9x/QrndixNZk8SxLJK/QHM9xcdenVfbFiay5rrEskrmt5QXuLtD06+Siet4lNV+p7eV8/eDunDlW7Vt0MdcltWq7qPUQwMZTa0tOgT3c76KpezqeSDhy+z3TINhdZG7mOLXTMOujXN78v6ea5+zKX2RxRsu2Wsi+7aJXAM/Dr0XnVv26cjpKlqeGR/wBp0by0n8dLK+0I8UWk9r6+KQLH7TaktTiqXx7QsySxskL/AAhG4bHQOaP4uinPZeI2YHPzV/eP2kwRhjqrGvmbGT15Af5//wCLnUsj5pHSSvc+Rx25zjsk/MrOrZnqTCWrNJDKOz43Fp+oXmhqVHO81bO/j5guPtReJLuNfJVsQ3DWHjPsNY18vo5zWk6PfvpUlelieWzM6WxK+WV3d73Ek/qV5rDnyd7kc/EBERYgEREAREQBERAYoiKQEREBkiIoBuYnGW8vdbUx8QlsOBcGlwb0A2epIHZaZBBIPcK1+zCnXvcX14LcTJoTHISxw2NhhIW/wvBQg4O4gyVnH17c9WeIRCYHQ2deXl8l68em7yCldfq+CTBRmMdI9rGNLnuOg0DZJ9F63Ks9Ky+vbidFOzo5jhot6b6romUjpVc9wblKuPqwuvMa+WBrdR82wNgeWubf6BbNtlXLe2ltO3SrmBrnxvby/e6jc4Od6nt9Asn5Hpxb8SXvVg5Yt23i7lSlStzxcsFwOMDg4Hn5To9AdjqfNWujjKruEeL7MlWMzVp42QyFvWP95ogfovuRirY/CcE3Y6kL5JTK6UPHSTT2gcyotLUXKT6X/wC3CCrRYbIS5aPGCs5t9+gIXkMPUcw3vt09Vp2YJK1mWCdvLLE4seN70QdHqF1PiDwMj7ZqtKxTg8Jjw15Desu4wfi9ddlCYbH0clluKMKa8QtPMr6L+X4mvY4nkB9CP7lknokpOMX/ALmvcvtAoaK88Q4qvVy/D/D9OjFNejYw2wHcplkeQSwu8gB/Iqcz+OxtnhTPv91xMdzHujDPcGOBiJfotc8gc57qi0Mnxb/p+VtewHKlvYvEXco206jD4oqxGeX4g3lYO56nr+i6Tw3Sw9nC4uvVrYr36WM+LBkoXtkncfOOT09NAqtcMTHDWeKqtgNgl9xng5ObencwHKD5+f0U/k1Fxc3s/D1WCmoiLwgIiIAiIgCIiAIiIAiIgCIiAxREUgIiIDJERQDcxGUuYe825jpfBsNBaH8od0I0ehBHYrKDLXYMZbx8U3LUtOa6ZnK08xB2Outj9FoorLJJKk/t8wSNrNZC0ygyewXCg3lraa0GMbB7gdew7rav8U5e9lq2TsWv9NrgCOVkbWkfQde/moRFbvsn+T/+cvcCwZPjDOZKrZq27gdWs68SNsTGg6Oweg6Hfn5qNt5a7bpUak83NBSDhA3lA5OY7PUDZ6jzWiiSzZJ/qk37faCet8XZq3kqV+e2HXKgIhk8JgI2NHfTR/VR1fK3a2XGUgnLLwkMviho+0e51rXmei0kR5sknbk758+oN6TLXpMuco+w/wB/Mni+MNA83r6fopO/xnnL9azXsW2GCyNSsbBG0P8APfQd/n3VeRFmyRTSk9+e4LDj+Ms5QpRVa9weHCCIi+Jj3Rj/AHXEEhR1LM36b7rq9gh12N0Vhzmhxe13fqR5+o6qPRHmyOrk9uW4CIixgIiIAiIgCIiAIiIAiIgCIiAxREUgIiIDJERQAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgMURFICIiAyREUA3MZi7+VmfFi6Vm5KxniOZXidIWt2BsgDoNkDfzC8LVaenZkr24ZIJ4zyvjkaWuafQg9QprhTN18LBmhYqMtm7TFeOOQEx83jRP27TgdaYex76UxX4tpWcdb/a0G7kgnaY4qzDHM10DY4WlxO2CIt5hoH69UBSpI3xP5ZGOY7odOGj16rFdFPGWGliybrVV89m1Gz95LVa7m1XEfhnUg5QHjYd1770CAtZnFuKfZr+PTcIoGtZCW1o9w/6KYi8DY5iJeWTRPXW9goCjGKQQtlLHCJzi1r9dCRrYB9RsfULNlSy+uZ2V5XQDm/eBhLenLvr8uZu/zD1V0o8SYWK4ySdtp745LEgsCpEHPL4omtJaCNdWSHoQRzA8xO1lleKMJa/asdepPFBZlsyQDwGfuvFfXIIHN0IET+x8x6nQFDRdLbxhw/Hm5ZhHYsVBWZXryWKEfiR8sgc4uDZRzl43s7Gt8uuVVnh7MY+nkspLPG6s2y3UEsNdkxr/AL1rtBj3AaLQW9/PzG0BWkVswmexNTirK35aHhU7Xi+7RtjEnuvNIHN03mbvTQW9CO/6LctcV4qWlbqMx7WwTusPDG12MHM6Zj4+uyWgNa4dCdb0N7KAo6ydG9sbJHMcI3khriOhI76P6hdXzGcwOOyNaV87bL+Ww9hrQQP8IPkjMbDyP7BrXgac1w2NgAkLQjz3D9K+6+IuSKzLbmrxQxRvdEx8zCxsjQ4cnwteNBwI2O7Sdgc1RdDbxriq1i8KNF0dWR0r4GmrFtjnW2yNPc61CHM79ObXY7WLOK+HmYyGuzGcpZZ8RzDWa7mb7z4nNzc+g7w9M1ynoNb0UBQGRve17mMc5rBzOIGw0bA2fTqQP1WKvMvF9GeO2JIJAbFI15GshY1shFvxWtOiNN8MBm+46DRAUbxjmcblJqzqEcjyyWWRz5K7IDyOcCyIBhIIYAdH/e1oABAVhFa+Ps7i83YrvxNQV42OkcR4AiLWuI5Y+j3bDQDrt37Kw2uL+HDbxb61WYNqmwHvlpM5uR7IxG3TZBstLX9Rygc2wOpCA5mi3c3PWs5i9PRZIypLO98TZA0ODS4kAhvQHXkOi0kAREQBERAEREBiiIpAREQGSIigBFPcIyY1k139puqRymECtJbjfJE1/O3m5msBOyzmA6dz5dCLDTscINq0TZFUsbJD4kYhlEvMJ9yuceoMZi6BoJO9dN7JAoCK71b/AAvOYpMhVhjkbU8dzYYnhrrEcsnLER5NfGWAkeYB77W0LnBrMfhS2vA+VhhNhr/EL9iN3ih4DAC1z+XWnE61rXVAc+Qgg6PRX3F3eFzi8VNkG1orrLjZLDII5OYt8RxO9NAa0NLejXHoBoA7KkYcnwpZyMs+blr3broYBNOfGbDKQ6TxAzcbnA8nggdG9Q7RHTYHMUVtyZ4fscM42OpNVrZEPaJTySOIbp3M555Brry9AX78uXRC8OD7+Nq1L1fLPAhsTVeZha5wcxswL+w/s7/wQFZRXitkOF57kUl6rXjjFYyObFE8AzRzPc2P8HxcrSfUgk7BWePucNTYyw2+6AWPcY2Me9sjnNkDJNtYOUj7RZ5t106kbCAoiLp1XIcI3LkljLTUuV1OnDye7ytLS2tySaIYRsSAdtb6EO7hV7gSbh2Fl7+sUcT5C6IxeKXhpjHN4jRyscQ4/Bo9Ox6hAVJFfqGT4VZWpwT06Zb/AKMyaR0MhfylknjnfqD4etfp5qJ4OkwbaeUZnDXZI9g8CSRr3OHwv2GhrSCd8vct8uuthAVdFfprfDFnG5PxJIfefdIGwPeyR0hkbWjaWgFuteIHDfM3Xo4aC2sjkuFLgz1iUVJLc8kkkPKySMcpiHhhgEZ05r982y0Hp1IQHN0V9yWT4WkrOgrVKbGllhniNgkDxqvGYiCfMzeJs/XQ0t+1PwS25ivd3UZWsNhszvDljaWckfhEgxu683idCH/M9iAOZot3N+6ftm9+zXh9Lx3+A4MLAWcx5fhJJHTXQna0kAREQBERAEREBiiIpAREQGSIigBFMYGPGupZmbJBr5YaodVjMvJzyGVjfxdprnu0PT0Vxv4HhGLNY+Gna8erJ423m1CBIwMaY3u/ejlJJdtriw+WgR1A5si6Df4dwNbEWbBmg8HxrLI7TLge48kjRGGR9C8EF23AfPprr8y2L4Xoe8zMNeZ0bJjBXjviRszBLE2J7nNOw5zXSks6H4N6CA5+i6KMJwxHFLLFcgBgyfhtfJbjdzw+O1o03ez8BLtlnKQCeb+FaUGL4XlFGaa8A+zaMEkPjBvh8heS8ns1jwYQHdhuT+ygKOi6FVwXDks9+OxYqwzNqRyaF5jooZS1/M1rubb+zPs85GyNHuI3gDDY3MOkiuiOSczMZyPtCEtjLXkvYCfjdzBg0N9+3XYAp6K/1OH+GyMfPayMDK9h9QabbYXjdd5mDm7BYPGa1u3aAB766qOmpYatx7RrQzMbjC+HxnPljexhIHOOYOc3QO/M67EoCoor7jKHCkuPiZaMTbJFZjpTc11kildI7l7fA5kY+XN17he9jhvAxRY+OxJBVnsVoHxE3mkyOkpukJkBP7oCUxgc3KNOPfW0BztF0KDF8PxPhx9iapKPHhMjo7URPManM4CTmALRKda5gOmtjuvj8RgAH14bNKxPHat+DCbbI2SAMr8gdISND4pdHm0SwgE9yBz5Fep8ZwsypejjsRun8W74UvvQPI2KON0QA7ODnGRoP8Wui28tiOEaVgOrTtswtrzyMBtsAm5QzwieV7iHOJdtp5T07DSA50is3GNXCQWAMI5oiZcsVzyz+LzxMc3kl/8AuDnduh5enmvTjbG4egyA4iaFxdPMxoitNn5645PCldr7Dnbftp0RrsPMCqoukDAcKm3Q/wBLgDZasj/BNuMl0o8Pl53eIGtBDnkbcwkt1yjzjr2CwAoZG1Suwlld1pjGSXI/Ec5r2eFpoO3AtLurdg67oCkIi+sbzva0eZ0gMdptdkq8CYOOBjZqz5pAPie6Vw2fwBAXr/Ujh/8A2A/86T/qWofbenTqn8PmaF/iHSp1UvcvmcW2m12n+pHD/wDsB/50n/Un9SOH/wDYD/zpP+pR/W9P4P4fMj+4tL/jL3L5nFUXav6kcP8A+wn/AJ0n/UvKzwLg5IHsirPhkI+F7ZXHR/AkhSu29O3VP4fMlfiLSt1UvcvmcaRZys8ORzN75TpYLcG+MkRFACKy8BcPQ8SZSapO+w0ti52CFhcSedreumuIGiTvWvUgdVK1OBWTUaNuW1LFVseAx1gtBja99l0Tm829Hla0O7+fogKO6R7mNY57ixm+VpPQb76WK6JjeA6tx90WTkse+BsRNexEXSxB3ibkeGNJ5ByD7QZ9odR0J86vA1SaDAzGe54eQaeciI7LvBL9MbykuGxrbOf5gH4UBz9FfbHA8EEGUc6WyTUkstMrQ0x1/Cja9glPkZC7lHY7HYnYETgsDRv4N9qxPOy091psTWcvIPBgEu3b6nf2emvX5ECsLKKR8UjXxPcx7TsOadEfqrTxZwxBhcZBailnPPI2NrpQAyy0xh/ixa7sBOvPuOvcCTi4QxElMhtq6LYr+Js8nJz+5mz21vW2lnfz38kBQUXRbfAuMpuqPmvWnwuqz2HlkZaJhHX8XcbnNA0T8PTm8jvyWrU4KgtfskRC+9lxrJPeAG+E/cT5HMZ/EXM5OU6Duu+m+VrgKIspJHyuDpHue4ANBcd9ANAfoAAumDgOjTvZAPbcvRQV3yaYNCtun4zXS9Adc55R0b1YdjfwqucTcMQYnCQXY5bBL3Qta+VoEdkPi53Pi9WsPwnv3HY9EBVEXR6HB9EYerLLDYc+xJXLbcg/dSB9aWR7Y9a3yuDWnqerfLsvKDgqq2jUtONoskDNSyNHgzc9WSU8mtH4XM5T1PX07IDnqLpsHAVLJ3Z/dmXK1ZtSm9jht4L5a3O55Iafh5gR15RvY5gdBVDirGNqTVpaddzKpp03SPGy3xZK7XnZPmTzHX4oCBRXajwfBYr4x5GQLbTA8Tsa3wpnGN7/AAY99TJtgZ59T1A6b3IeDqRNmpJ7wyw2aBzY3f8AmG81WaU19ducua1vbe9dPJAc9RXq3wZBXgyEjf2hM+BjHOiY1vNT3AJf3+9AaceTy6tPnpq3chwDRx1etPbsXGtMNmSWMABzjFEx45SWgacXEbHOOmwSgOcLOv8Afx/mC6JT4Mx8UGXsObauxwRXORzdBlcsriSMykeZL+nYEsPfrqG4o4ZhwcVSaJ9g89gxNdM0Btloa0iaLXdh5tefl17gQyHyOvKOytyzTa18NaOaNzms26XlPM52h00fUKRWrkqzrVdkbHNaRKx+3ejXA/4Lg8PDxrj5HzPA4d4uNbGEOQiMjYLD4o7ROjG13MAfIb0OuuullDkacz3MjsRlzQSevTp36/JacmOsOfJEHQ+7PsiyX7POOoPLrWu477WlWxlq7jY4LHhwRN8blIB5yXczRseQ+Lfz6L09zha4uKvv725nr7jTtcXFX39quZOVLle3ze7yteW9wO/Xsfw+a2FoVK9j3w2bXgtcIRC1sRJB67JOwPot9ebLGMZVFnkzRjGVQZ+eLn/mZfzH+9eC97n/AJmX8x/vXgu9XI+mLkZIiISO3ZFM8L4CbiK5JUqSxssta17WP/jHO1rjv/dDi4/JpPkpepwRJcire6343TTiGQNdGWsEcs/gsdzeZ5tEt10BPU6IQFP2fVNnp17K98P8G0chDdmddLq5YyKtJMRVPjP8TlLg7fM0eE7fKSevrvUHwtw1NxA8NgnbGTcrU+rS7rM5wDunkOX+aAgNorpiOB48hSqyftUR2LBha2L3ckB0pkDAXb9Yjvp0BHfqFF8K8OjOtlLrfu+rEFVmoTJzSTFwbvR6AFvU9fkCgK+iuUXA0j8ZRtSZCKI2LEMMjHNB8IS8/K/Qdza0wnq0A76EjqknA0jXZRrbzHPqQiaJga0mw0xGXbdPIIAH8Bf69uqApqbPqp/iDh04ir4otCdzJvd5m+GWhsnIH/Cd/E3R79O3bRC2+I+FhiuHMfkWygyPLI7EZI2HPZ4jem9t+HppwHbY2CgKqiudrhajLjIJ6VuSOUQ02uEke/FnsB5A3vTWgM7/AMl62uA46tqy2bMQmvXh8SSSJgkcHeOyHl5WvI+08Hqe29gHogKOt+5l71yjBTsT81eHXK0Ma3ehoFxA24gdATvQ6BWlnA0cj44f2gIpYYbEtx8nK1jfCn8Echc5oOyR3I8/wUKzh7lzeVo2bjBDjWyOmnhZ4nM1rg3bG7G9lw8x02fJAQKyEjxEYg93hlwcWb6Ejejr16n6q85DgMB2elqW+SGhLZbCyZoDpWQgFx6kHeneTTo99bCr+PwQtYYXn2Sx8kksUMTYXP5jGxr3cxH2Rp40dEd96A2gIRPPaucvBMcL7bpcpy1qgnbPJ7sebnhfGxwa3m6gmVuiSOx2AvG1wW+tZmqSXWm4LktSJrYXFjzHI1jnOf8AwDbgeo8uutjYFS2its3CMMVW5b/aTjTrV5JuY1iHueyZkJZyl3Qczwd77b6bGlJ0+B6fPm4Zr7ZJKjhVikc9sA945XOPRxJc34ddOp328wBz9ZRO5ZWF3YEK4O4H/dVnMyLXFzIZJx4JHhCWs6yOXr8ZDGOGunXXr08q/CTLRqeDad4Mz5iZpIjGWxshjl2WuIA+81su5fPetEgdchlZNEySJwcx4DgQe4KzXCeIsdZ4fzNvGusGQQPDRIzo12wHD+RHqo73qf8A10n/ABFc++wd9snw+pyz/DW+2T4fU/Q6L88e9T/66T/iKe9T/wCuk/4io/oL/wCT4fUj+2n/AMvw+p+h1hNKyGJ8krg1jQXEk60Avz371P8A66T/AIisX2JXt5XyPcPQlSuwd98nw+pK/DW++T4fU+2XB80jm9i4kLxRF0J1JkiIoB6V55q8hfXlkieWuYXMcWnlcCCNjyIJB+RWx+074x8VP3217pFJ4jIPFdyMd/aDd6B6nqiIDZOfzBs2pzlsgZ7EfhzSe8v5pG61yuO9kfIrXxeUv4uSSTGXrVOR7eVzq8zoy4b3olpHmiIDCLI3YuTwrllnIWlvLK4cpbvl118uZ2vTZ9VPcPXrdDg/Pvo2p6z3z1Y3OhkLC5pbPtpI7j5IiAiBmsq2rWrtyV0V67g+GITv5YyDsFo3oEHr0Wcmcyz33y7KXnG2A2wTYefGA6AP6/ENdOqIgNa7kbt2CtFcuWbEVdnJCyWVz2xj0aCeg6Dt6LO5lcjcqQ1rd+3PWiA8OKWZzmM0CBoE6Gh0REBrut2XRGJ1iZ0Z5dsLyR8IIb0+QJ16bK2bmYydyQvt5G5O8xtjLpZ3OJYCHBvU9gQDr1G0RAZV81lYJopIMnejkjke9jmTvBa5+ucgg9C7XU+fmvGpkLtXIC7Wt2IbnMT48crmybPc8wO+uyiID3GcywrWIRlL3hWHudMz3h/LKXDTi4b6kjod91r18hdr0rFSC3Yiqz68WFkrmsk125mg6P6oiA9bmXyVsj3rIXJ9RCH95O537vYPJ1P2dgHXbovjstkXVrMDshbMNmTxZozM7llf35nDfU78yiIBey2RuyPfdyFuw58YicZZnPLmAhwadnqNgHXqEr5bJQG2YchcjNpurBZM4eMPR/X4u57+qIgMGZO+x7Hsu2mvY5jmuErgWljeVhHXoWjoPQdAvduayjb/AL03JXRaD3P8YTv5+Zw048297IABPmAiIDWt37lzfvdqxPt3OfFkLtu0Bvqe+gBv0AWqiIAiIgPiIikBERAf/9k=",
            "timestamp": 223867181890
          },
          {
            "data": "data:image/jpeg;base64,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",
            "timestamp": 223867559890,
            "timing": 756
          },
          {
            "timing": 1134,
            "data": "data:image/jpeg;base64,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",
            "timestamp": 223867937890
          },
          {
            "data": "data:image/jpeg;base64,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",
            "timestamp": 223868315890,
            "timing": 1512
          },
          {
            "timing": 1890,
            "data": "data:image/jpeg;base64,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",
            "timestamp": 223868693890
          },
          {
            "data": "data:image/jpeg;base64,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",
            "timestamp": 223869071890,
            "timing": 2268
          },
          {
            "timestamp": 223869449890,
            "timing": 2646,
            "data": "data:image/jpeg;base64,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"
          },
          {
            "data": "data:image/jpeg;base64,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",
            "timing": 3024,
            "timestamp": 223869827890
          }
        ],
        "scale": 3024,
        "type": "filmstrip"
      }
    },
    "layout-shifts": {
      "id": "layout-shifts",
      "title": "Avoid large layout shifts",
      "description": "These are the largest layout shifts observed on the page. Each table item represents a single layout shift, and shows the element that shifted the most. Below each item are possible root causes that led to the layout shift. Some of these layout shifts may not be included in the CLS metric value due to [windowing](https://web.dev/articles/cls#what_is_cls). [Learn how to improve CLS](https://web.dev/articles/optimize-cls)",
      "score": null,
      "scoreDisplayMode": "notApplicable",
      "details": {
        "headings": [],
        "items": [],
        "type": "table"
      }
    },
    "skip-link": {
      "id": "skip-link",
      "title": "Skip links are focusable.",
      "description": "Including a skip link can help users skip to the main content to save time. [Learn more about skip links](https://dequeuniversity.com/rules/axe/4.8/skip-link).",
      "score": null,
      "scoreDisplayMode": "notApplicable"
    },
    "largest-contentful-paint": {
      "id": "largest-contentful-paint",
      "title": "Largest Contentful Paint",
      "description": "Largest Contentful Paint marks the time at which the largest text or image is painted. [Learn more about the Largest Contentful Paint metric](https://developer.chrome.com/docs/lighthouse/performance/lighthouse-largest-contentful-paint/)",
      "score": 0.99,
      "scoreDisplayMode": "numeric",
      "displayValue": "1.6 s",
      "numericValue": 1576,
      "numericUnit": "millisecond"
    },
    "third-party-facades": {
      "id": "third-party-facades",
      "title": "Lazy load third-party resources with facades",
      "description": "Some third-party embeds can be lazy loaded. Consider replacing them with a facade until they are required. [Learn how to defer third-parties with a facade](https://developer.chrome.com/docs/lighthouse/performance/third-party-facades/).",
      "score": null,
      "scoreDisplayMode": "notApplicable"
    },
    "td-headers-attr": {
      "id": "td-headers-attr",
      "title": "Cells in a `<table>` element that use the `[headers]` attribute refer to table cells within the same table.",
      "description": "Screen readers have features to make navigating tables easier. Ensuring `<td>` cells using the `[headers]` attribute only refer to other cells in the same table may improve the experience for screen reader users. [Learn more about the `headers` attribute](https://dequeuniversity.com/rules/axe/4.8/td-headers-attr).",
      "score": null,
      "scoreDisplayMode": "notApplicable"
    },
    "html-xml-lang-mismatch": {
      "id": "html-xml-lang-mismatch",
      "title": "`<html>` element has an `[xml:lang]` attribute with the same base language as the `[lang]` attribute.",
      "description": "If the webpage does not specify a consistent language, then the screen reader might not announce the page's text correctly. [Learn more about the `lang` attribute](https://dequeuniversity.com/rules/axe/4.8/html-xml-lang-mismatch).",
      "score": null,
      "scoreDisplayMode": "notApplicable"
    }
  },
  "categories": {
    "performance": {
      "id": "performance",
      "title": "Performance",
      "score": 1,
      "auditRefs": [
        {
          "id": "first-contentful-paint",
          "weight": 10,
          "group": "metrics",
          "acronym": "FCP",
          "relevantAudits": [
            "server-response-time",
            "render-blocking-resources",
            "redirects",
            "critical-request-chains",
            "uses-text-compression",
            "uses-rel-preconnect",
            "uses-rel-preload",
            "font-display",
            "unminified-javascript",
            "unminified-css",
            "unused-css-rules"
          ]
        },
        {
          "id": "largest-contentful-paint",
          "weight": 25,
          "group": "metrics",
          "acronym": "LCP",
          "relevantAudits": [
            "server-response-time",
            "render-blocking-resources",
            "redirects",
            "critical-request-chains",
            "uses-text-compression",
            "uses-rel-preconnect",
            "uses-rel-preload",
            "font-display",
            "unminified-javascript",
            "unminified-css",
            "unused-css-rules",
            "largest-contentful-paint-element",
            "prioritize-lcp-image",
            "unused-javascript",
            "efficient-animated-content",
            "total-byte-weight",
            "lcp-lazy-loaded"
          ]
        },
        {
          "id": "total-blocking-time",
          "weight": 30,
          "group": "metrics",
          "acronym": "TBT",
          "relevantAudits": [
            "long-tasks",
            "third-party-summary",
            "third-party-facades",
            "bootup-time",
            "mainthread-work-breakdown",
            "dom-size",
            "duplicated-javascript",
            "legacy-javascript",
            "viewport"
          ]
        },
        {
          "id": "cumulative-layout-shift",
          "weight": 25,
          "group": "metrics",
          "acronym": "CLS",
          "relevantAudits": [
            "layout-shift-elements",
            "layout-shifts",
            "non-composited-animations",
            "unsized-images"
          ]
        },
        {
          "id": "speed-index",
          "weight": 10,
          "group": "metrics",
          "acronym": "SI"
        },
        {
          "id": "interactive",
          "weight": 0,
          "group": "hidden",
          "acronym": "TTI"
        },
        {
          "id": "max-potential-fid",
          "weight": 0,
          "group": "hidden"
        },
        {
          "id": "first-meaningful-paint",
          "weight": 0,
          "group": "hidden",
          "acronym": "FMP"
        },
        {
          "id": "render-blocking-resources",
          "weight": 0
        },
        {
          "id": "uses-responsive-images",
          "weight": 0
        },
        {
          "id": "offscreen-images",
          "weight": 0
        },
        {
          "id": "unminified-css",
          "weight": 0
        },
        {
          "id": "unminified-javascript",
          "weight": 0
        },
        {
          "id": "unused-css-rules",
          "weight": 0
        },
        {
          "id": "unused-javascript",
          "weight": 0
        },
        {
          "id": "uses-optimized-images",
          "weight": 0
        },
        {
          "id": "modern-image-formats",
          "weight": 0
        },
        {
          "id": "uses-text-compression",
          "weight": 0
        },
        {
          "id": "uses-rel-preconnect",
          "weight": 0
        },
        {
          "id": "server-response-time",
          "weight": 0
        },
        {
          "id": "redirects",
          "weight": 0
        },
        {
          "id": "uses-rel-preload",
          "weight": 0
        },
        {
          "id": "efficient-animated-content",
          "weight": 0
        },
        {
          "id": "duplicated-javascript",
          "weight": 0
        },
        {
          "id": "legacy-javascript",
          "weight": 0
        },
        {
          "id": "prioritize-lcp-image",
          "weight": 0
        },
        {
          "id": "total-byte-weight",
          "weight": 0
        },
        {
          "id": "uses-long-cache-ttl",
          "weight": 0
        },
        {
          "id": "dom-size",
          "weight": 0
        },
        {
          "id": "critical-request-chains",
          "weight": 0
        },
        {
          "id": "user-timings",
          "weight": 0
        },
        {
          "id": "bootup-time",
          "weight": 0
        },
        {
          "id": "mainthread-work-breakdown",
          "weight": 0
        },
        {
          "id": "font-display",
          "weight": 0
        },
        {
          "id": "third-party-summary",
          "weight": 0
        },
        {
          "id": "third-party-facades",
          "weight": 0
        },
        {
          "id": "largest-contentful-paint-element",
          "weight": 0
        },
        {
          "id": "lcp-lazy-loaded",
          "weight": 0
        },
        {
          "id": "layout-shifts",
          "weight": 0
        },
        {
          "id": "uses-passive-event-listeners",
          "weight": 0
        },
        {
          "id": "no-document-write",
          "weight": 0
        },
        {
          "id": "long-tasks",
          "weight": 0
        },
        {
          "id": "non-composited-animations",
          "weight": 0
        },
        {
          "id": "unsized-images",
          "weight": 0
        },
        {
          "id": "viewport",
          "weight": 0
        },
        {
          "id": "performance-budget",
          "weight": 0,
          "group": "budgets"
        },
        {
          "id": "timing-budget",
          "weight": 0,
          "group": "budgets"
        },
        {
          "id": "network-requests",
          "weight": 0,
          "group": "hidden"
        },
        {
          "id": "network-rtt",
          "weight": 0,
          "group": "hidden"
        },
        {
          "id": "network-server-latency",
          "weight": 0,
          "group": "hidden"
        },
        {
          "id": "main-thread-tasks",
          "weight": 0,
          "group": "hidden"
        },
        {
          "id": "diagnostics",
          "weight": 0,
          "group": "hidden"
        },
        {
          "id": "metrics",
          "weight": 0,
          "group": "hidden"
        },
        {
          "id": "screenshot-thumbnails",
          "weight": 0,
          "group": "hidden"
        },
        {
          "id": "final-screenshot",
          "weight": 0,
          "group": "hidden"
        },
        {
          "id": "script-treemap-data",
          "weight": 0,
          "group": "hidden"
        },
        {
          "id": "resource-summary",
          "weight": 0,
          "group": "hidden"
        },
        {
          "id": "layout-shift-elements",
          "weight": 0,
          "group": "hidden"
        }
      ]
    },
    "accessibility": {
      "id": "accessibility",
      "title": "Accessibility",
      "description": "These checks highlight opportunities to [improve the accessibility of your web app](https://developer.chrome.com/docs/lighthouse/accessibility/). Automatic detection can only detect a subset of issues and does not guarantee the accessibility of your web app, so [manual testing](https://web.dev/articles/how-to-review) is also encouraged.",
      "score": 0.93,
      "manualDescription": "These items address areas which an automated testing tool cannot cover. Learn more in our guide on [conducting an accessibility review](https://web.dev/articles/how-to-review).",
      "auditRefs": [
        {
          "id": "accesskeys",
          "weight": 0,
          "group": "a11y-navigation"
        },
        {
          "id": "aria-allowed-attr",
          "weight": 0,
          "group": "a11y-aria"
        },
        {
          "id": "aria-allowed-role",
          "weight": 0,
          "group": "a11y-aria"
        },
        {
          "id": "aria-command-name",
          "weight": 0,
          "group": "a11y-aria"
        },
        {
          "id": "aria-dialog-name",
          "weight": 0,
          "group": "a11y-aria"
        },
        {
          "id": "aria-hidden-body",
          "weight": 10,
          "group": "a11y-aria"
        },
        {
          "id": "aria-hidden-focus",
          "weight": 0,
          "group": "a11y-aria"
        },
        {
          "id": "aria-input-field-name",
          "weight": 0,
          "group": "a11y-aria"
        },
        {
          "id": "aria-meter-name",
          "weight": 0,
          "group": "a11y-aria"
        },
        {
          "id": "aria-progressbar-name",
          "weight": 0,
          "group": "a11y-aria"
        },
        {
          "id": "aria-required-attr",
          "weight": 0,
          "group": "a11y-aria"
        },
        {
          "id": "aria-required-children",
          "weight": 0,
          "group": "a11y-aria"
        },
        {
          "id": "aria-required-parent",
          "weight": 0,
          "group": "a11y-aria"
        },
        {
          "id": "aria-roles",
          "weight": 0,
          "group": "a11y-aria"
        },
        {
          "id": "aria-text",
          "weight": 0,
          "group": "a11y-aria"
        },
        {
          "id": "aria-toggle-field-name",
          "weight": 0,
          "group": "a11y-aria"
        },
        {
          "id": "aria-tooltip-name",
          "weight": 0,
          "group": "a11y-aria"
        },
        {
          "id": "aria-treeitem-name",
          "weight": 0,
          "group": "a11y-aria"
        },
        {
          "id": "aria-valid-attr-value",
          "weight": 0,
          "group": "a11y-aria"
        },
        {
          "id": "aria-valid-attr",
          "weight": 0,
          "group": "a11y-aria"
        },
        {
          "id": "button-name",
          "weight": 0,
          "group": "a11y-names-labels"
        },
        {
          "id": "bypass",
          "weight": 0,
          "group": "a11y-navigation"
        },
        {
          "id": "color-contrast",
          "weight": 7,
          "group": "a11y-color-contrast"
        },
        {
          "id": "definition-list",
          "weight": 0,
          "group": "a11y-tables-lists"
        },
        {
          "id": "dlitem",
          "weight": 0,
          "group": "a11y-tables-lists"
        },
        {
          "id": "document-title",
          "weight": 7,
          "group": "a11y-names-labels"
        },
        {
          "id": "duplicate-id-active",
          "weight": 7,
          "group": "a11y-navigation"
        },
        {
          "id": "duplicate-id-aria",
          "weight": 0,
          "group": "a11y-aria"
        },
        {
          "id": "form-field-multiple-labels",
          "weight": 0,
          "group": "a11y-names-labels"
        },
        {
          "id": "frame-title",
          "weight": 0,
          "group": "a11y-names-labels"
        },
        {
          "id": "heading-order",
          "weight": 3,
          "group": "a11y-navigation"
        },
        {
          "id": "html-has-lang",
          "weight": 7,
          "group": "a11y-language"
        },
        {
          "id": "html-lang-valid",
          "weight": 7,
          "group": "a11y-language"
        },
        {
          "id": "html-xml-lang-mismatch",
          "weight": 0,
          "group": "a11y-language"
        },
        {
          "id": "image-alt",
          "weight": 10,
          "group": "a11y-names-labels"
        },
        {
          "id": "image-redundant-alt",
          "weight": 1,
          "group": "a11y-names-labels"
        },
        {
          "id": "input-button-name",
          "weight": 10,
          "group": "a11y-names-labels"
        },
        {
          "id": "input-image-alt",
          "weight": 0,
          "group": "a11y-names-labels"
        },
        {
          "id": "label",
          "weight": 7,
          "group": "a11y-names-labels"
        },
        {
          "id": "link-in-text-block",
          "weight": 0,
          "group": "a11y-color-contrast"
        },
        {
          "id": "link-name",
          "weight": 7,
          "group": "a11y-names-labels"
        },
        {
          "id": "list",
          "weight": 7,
          "group": "a11y-tables-lists"
        },
        {
          "id": "listitem",
          "weight": 7,
          "group": "a11y-tables-lists"
        },
        {
          "id": "meta-refresh",
          "weight": 0,
          "group": "a11y-best-practices"
        },
        {
          "id": "meta-viewport",
          "weight": 10,
          "group": "a11y-best-practices"
        },
        {
          "id": "object-alt",
          "weight": 0,
          "group": "a11y-names-labels"
        },
        {
          "id": "select-name",
          "weight": 0,
          "group": "a11y-names-labels"
        },
        {
          "id": "skip-link",
          "weight": 0,
          "group": "a11y-names-labels"
        },
        {
          "id": "tabindex",
          "weight": 0,
          "group": "a11y-navigation"
        },
        {
          "id": "table-duplicate-name",
          "weight": 0,
          "group": "a11y-tables-lists"
        },
        {
          "id": "td-headers-attr",
          "weight": 0,
          "group": "a11y-tables-lists"
        },
        {
          "id": "th-has-data-cells",
          "weight": 0,
          "group": "a11y-tables-lists"
        },
        {
          "id": "valid-lang",
          "weight": 0,
          "group": "a11y-language"
        },
        {
          "id": "video-caption",
          "weight": 0,
          "group": "a11y-audio-video"
        },
        {
          "id": "focusable-controls",
          "weight": 0
        },
        {
          "id": "interactive-element-affordance",
          "weight": 0
        },
        {
          "id": "logical-tab-order",
          "weight": 0
        },
        {
          "id": "visual-order-follows-dom",
          "weight": 0
        },
        {
          "id": "focus-traps",
          "weight": 0
        },
        {
          "id": "managed-focus",
          "weight": 0
        },
        {
          "id": "use-landmarks",
          "weight": 0
        },
        {
          "id": "offscreen-content-hidden",
          "weight": 0
        },
        {
          "id": "custom-controls-labels",
          "weight": 0
        },
        {
          "id": "custom-controls-roles",
          "weight": 0
        },
        {
          "id": "empty-heading",
          "weight": 0,
          "group": "hidden"
        },
        {
          "id": "identical-links-same-purpose",
          "weight": 0,
          "group": "hidden"
        },
        {
          "id": "landmark-one-main",
          "weight": 0,
          "group": "hidden"
        },
        {
          "id": "target-size",
          "weight": 0,
          "group": "hidden"
        },
        {
          "id": "label-content-name-mismatch",
          "weight": 0,
          "group": "hidden"
        },
        {
          "id": "table-fake-caption",
          "weight": 0,
          "group": "hidden"
        },
        {
          "id": "td-has-header",
          "weight": 0,
          "group": "hidden"
        }
      ]
    },
    "best-practices": {
      "id": "best-practices",
      "title": "Best Practices",
      "score": 0.93,
      "auditRefs": [
        {
          "id": "is-on-https",
          "weight": 5,
          "group": "best-practices-trust-safety"
        },
        {
          "id": "geolocation-on-start",
          "weight": 1,
          "group": "best-practices-trust-safety"
        },
        {
          "id": "notification-on-start",
          "weight": 1,
          "group": "best-practices-trust-safety"
        },
        {
          "id": "csp-xss",
          "weight": 0,
          "group": "best-practices-trust-safety"
        },
        {
          "id": "paste-preventing-inputs",
          "weight": 3,
          "group": "best-practices-ux"
        },
        {
          "id": "image-aspect-ratio",
          "weight": 1,
          "group": "best-practices-ux"
        },
        {
          "id": "image-size-responsive",
          "weight": 1,
          "group": "best-practices-ux"
        },
        {
          "id": "preload-fonts",
          "weight": 0,
          "group": "best-practices-ux"
        },
        {
          "id": "doctype",
          "weight": 1,
          "group": "best-practices-browser-compat"
        },
        {
          "id": "charset",
          "weight": 1,
          "group": "best-practices-browser-compat"
        },
        {
          "id": "no-unload-listeners",
          "weight": 1,
          "group": "best-practices-general"
        },
        {
          "id": "js-libraries",
          "weight": 0,
          "group": "best-practices-general"
        },
        {
          "id": "deprecations",
          "weight": 5,
          "group": "best-practices-general"
        },
        {
          "id": "third-party-cookies",
          "weight": 5,
          "group": "best-practices-general"
        },
        {
          "id": "errors-in-console",
          "weight": 1,
          "group": "best-practices-general"
        },
        {
          "id": "valid-source-maps",
          "weight": 0,
          "group": "best-practices-general"
        },
        {
          "id": "inspector-issues",
          "weight": 1,
          "group": "best-practices-general"
        }
      ]
    },
    "seo": {
      "id": "seo",
      "title": "SEO",
      "description": "These checks ensure that your page is following basic search engine optimization advice. There are many additional factors Lighthouse does not score here that may affect your search ranking, including performance on [Core Web Vitals](https://web.dev/explore/vitals). [Learn more about Google Search Essentials](https://support.google.com/webmasters/answer/35769).",
      "score": 1,
      "manualDescription": "Run these additional validators on your site to check additional SEO best practices.",
      "auditRefs": [
        {
          "id": "viewport",
          "weight": 1,
          "group": "seo-mobile"
        },
        {
          "id": "document-title",
          "weight": 1,
          "group": "seo-content"
        },
        {
          "id": "meta-description",
          "weight": 1,
          "group": "seo-content"
        },
        {
          "id": "http-status-code",
          "weight": 1,
          "group": "seo-crawl"
        },
        {
          "id": "link-text",
          "weight": 1,
          "group": "seo-content"
        },
        {
          "id": "crawlable-anchors",
          "weight": 1,
          "group": "seo-crawl"
        },
        {
          "id": "is-crawlable",
          "weight": 1,
          "group": "seo-crawl"
        },
        {
          "id": "robots-txt",
          "weight": 1,
          "group": "seo-crawl"
        },
        {
          "id": "image-alt",
          "weight": 1,
          "group": "seo-content"
        },
        {
          "id": "hreflang",
          "weight": 1,
          "group": "seo-content"
        },
        {
          "id": "canonical",
          "weight": 0,
          "group": "seo-content"
        },
        {
          "id": "font-size",
          "weight": 1,
          "group": "seo-mobile"
        },
        {
          "id": "plugins",
          "weight": 1,
          "group": "seo-content"
        },
        {
          "id": "tap-targets",
          "weight": 1,
          "group": "seo-mobile"
        },
        {
          "id": "structured-data",
          "weight": 0
        }
      ]
    },
    "pwa": {
      "id": "pwa",
      "title": "PWA",
      "description": "These checks validate the aspects of a Progressive Web App. [Learn what makes a good Progressive Web App](https://web.dev/articles/pwa-checklist).",
      "score": 0.88,
      "manualDescription": "These checks are required by the baseline [PWA Checklist](https://web.dev/articles/pwa-checklist) but are not automatically checked by Lighthouse. They do not affect your score but it's important that you verify them manually.",
      "auditRefs": [
        {
          "id": "installable-manifest",
          "weight": 2,
          "group": "pwa-installable"
        },
        {
          "id": "splash-screen",
          "weight": 1,
          "group": "pwa-optimized"
        },
        {
          "id": "themed-omnibox",
          "weight": 1,
          "group": "pwa-optimized"
        },
        {
          "id": "content-width",
          "weight": 1,
          "group": "pwa-optimized"
        },
        {
          "id": "viewport",
          "weight": 2,
          "group": "pwa-optimized"
        },
        {
          "id": "maskable-icon",
          "weight": 1,
          "group": "pwa-optimized"
        },
        {
          "id": "pwa-cross-browser",
          "weight": 0
        },
        {
          "id": "pwa-page-transitions",
          "weight": 0
        },
        {
          "id": "pwa-each-page-has-url",
          "weight": 0
        }
      ]
    }
  },
  "categoryGroups": {
    "budgets": {
      "title": "Budgets",
      "description": "Performance budgets set standards for the performance of your site."
    },
    "seo-content": {
      "title": "Content Best Practices",
      "description": "Format your HTML in a way that enables crawlers to better understand your app’s content."
    },
    "pwa-installable": {
      "title": "Installable"
    },
    "a11y-best-practices": {
      "title": "Best practices",
      "description": "These items highlight common accessibility best practices."
    },
    "pwa-optimized": {
      "title": "PWA Optimized"
    },
    "best-practices-browser-compat": {
      "title": "Browser Compatibility"
    },
    "seo-crawl": {
      "title": "Crawling and Indexing",
      "description": "To appear in search results, crawlers need access to your app."
    },
    "load-opportunities": {
      "title": "Opportunities",
      "description": "These suggestions can help your page load faster. They don't [directly affect](https://developer.chrome.com/docs/lighthouse/performance/performance-scoring/) the Performance score."
    },
    "a11y-aria": {
      "title": "ARIA",
      "description": "These are opportunities to improve the usage of ARIA in your application which may enhance the experience for users of assistive technology, like a screen reader."
    },
    "metrics": {
      "title": "Metrics"
    },
    "a11y-tables-lists": {
      "title": "Tables and lists",
      "description": "These are opportunities to improve the experience of reading tabular or list data using assistive technology, like a screen reader."
    },
    "a11y-language": {
      "title": "Internationalization and localization",
      "description": "These are opportunities to improve the interpretation of your content by users in different locales."
    },
    "best-practices-trust-safety": {
      "title": "Trust and Safety"
    },
    "best-practices-general": {
      "title": "General"
    },
    "a11y-audio-video": {
      "title": "Audio and video",
      "description": "These are opportunities to provide alternative content for audio and video. This may improve the experience for users with hearing or vision impairments."
    },
    "seo-mobile": {
      "title": "Mobile Friendly",
      "description": "Make sure your pages are mobile friendly so users don’t have to pinch or zoom in order to read the content pages. [Learn how to make pages mobile-friendly](https://developers.google.com/search/mobile-sites/)."
    },
    "best-practices-ux": {
      "title": "User Experience"
    },
    "a11y-color-contrast": {
      "title": "Contrast",
      "description": "These are opportunities to improve the legibility of your content."
    },
    "diagnostics": {
      "title": "Diagnostics",
      "description": "More information about the performance of your application. These numbers don't [directly affect](https://developer.chrome.com/docs/lighthouse/performance/performance-scoring/) the Performance score."
    },
    "a11y-names-labels": {
      "title": "Names and labels",
      "description": "These are opportunities to improve the semantics of the controls in your application. This may enhance the experience for users of assistive technology, like a screen reader."
    },
    "a11y-navigation": {
      "title": "Navigation",
      "description": "These are opportunities to improve keyboard navigation in your application."
    }
  },
  "timing": {
    "total": 11278.1
  },
  "i18n": {
    "rendererFormattedStrings": {
      "varianceDisclaimer": "Values are estimated and may vary. The [performance score is calculated](https://developer.chrome.com/docs/lighthouse/performance/performance-scoring/) directly from these metrics.",
      "opportunityResourceColumnLabel": "Opportunity",
      "opportunitySavingsColumnLabel": "Estimated Savings",
      "errorMissingAuditInfo": "Report error: no audit information",
      "errorLabel": "Error!",
      "warningHeader": "Warnings: ",
      "passedAuditsGroupTitle": "Passed audits",
      "notApplicableAuditsGroupTitle": "Not applicable",
      "manualAuditsGroupTitle": "Additional items to manually check",
      "toplevelWarningsMessage": "There were issues affecting this run of Lighthouse:",
      "crcLongestDurationLabel": "Maximum critical path latency:",
      "crcInitialNavigation": "Initial Navigation",
      "lsPerformanceCategoryDescription": "[Lighthouse](https://developers.google.com/web/tools/lighthouse/) analysis of the current page on an emulated mobile network. Values are estimated and may vary.",
      "labDataTitle": "Lab Data",
      "warningAuditsGroupTitle": "Passed audits but with warnings",
      "snippetExpandButtonLabel": "Expand snippet",
      "snippetCollapseButtonLabel": "Collapse snippet",
      "thirdPartyResourcesLabel": "Show 3rd-party resources",
      "runtimeDesktopEmulation": "Emulated Desktop",
      "runtimeMobileEmulation": "Emulated Moto G Power",
      "runtimeNoEmulation": "No emulation",
      "runtimeSettingsBenchmark": "Unthrottled CPU/Memory Power",
      "runtimeSettingsCPUThrottling": "CPU throttling",
      "runtimeSettingsDevice": "Device",
      "runtimeSettingsNetworkThrottling": "Network throttling",
      "runtimeSettingsUANetwork": "User agent (network)",
      "runtimeUnknown": "Unknown",
      "dropdownCopyJSON": "Copy JSON",
      "dropdownDarkTheme": "Toggle Dark Theme",
      "dropdownPrintExpanded": "Print Expanded",
      "dropdownPrintSummary": "Print Summary",
      "dropdownSaveGist": "Save as Gist",
      "dropdownSaveHTML": "Save as HTML",
      "dropdownSaveJSON": "Save as JSON",
      "dropdownViewer": "Open in Viewer",
      "footerIssue": "File an issue",
      "throttlingProvided": "Provided by environment",
      "calculatorLink": "See calculator.",
      "runtimeSettingsAxeVersion": "Axe version",
      "viewTreemapLabel": "View Treemap",
      "showRelevantAudits": "Show audits relevant to:"
    }
  },
  "entities": [
    {
      "name": "GitHub",
      "category": "utility",
      "isFirstParty": true,
      "origins": [
        "https://daniels436.github.io"
      ]
    }
  ],
  "fullPageScreenshot": {
    "screenshot": {
      "width": 412,
      "data": "data:image/webp;base64,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",
      "height": 8243
    },
    "nodes": {
      "1-42-A": {
        "bottom": 0,
        "width": 0,
        "left": 0,
        "top": 0,
        "height": 0,
        "right": 0
      },
      "1-66-FORM": {
        "right": 396,
        "left": 16,
        "height": 661,
        "width": 379,
        "top": 6083,
        "bottom": 6745
      },
      "1-17-A": {
        "height": 37,
        "top": 7108,
        "width": 38,
        "right": 114,
        "left": 76,
        "bottom": 7145
      },
      "1-18-A": {
        "right": 158,
        "bottom": 7145,
        "height": 37,
        "width": 38,
        "top": 7108,
        "left": 120
      },
      "1-85-IMG": {
        "left": 411,
        "bottom": 43,
        "height": 23,
        "top": 20,
        "width": 23,
        "right": 434
      },
      "1-107-META": {
        "right": 0,
        "bottom": 0,
        "width": 0,
        "left": 0,
        "height": 0,
        "top": 0
      },
      "1-70-TEXTAREA": {
        "height": 290,
        "bottom": 6583,
        "top": 6293,
        "left": 16,
        "width": 379,
        "right": 396
      },
      "1-32-A": {
        "width": 0,
        "right": 0,
        "bottom": 0,
        "left": 0,
        "top": 0,
        "height": 0
      },
      "1-68-INPUT": {
        "height": 60,
        "top": 6153,
        "width": 379,
        "left": 16,
        "right": 396,
        "bottom": 6213
      },
      "1-19-A": {
        "height": 37,
        "right": 202,
        "bottom": 7145,
        "left": 164,
        "width": 38,
        "top": 7108
      },
      "1-34-A": {
        "top": 0,
        "height": 0,
        "bottom": 0,
        "width": 0,
        "left": 0,
        "right": 0
      },
      "1-79-IMG": {
        "bottom": 5130,
        "right": 303,
        "width": 210,
        "height": 209,
        "left": 93,
        "top": 4921
      },
      "1-38-A": {
        "top": 0,
        "right": 0,
        "width": 0,
        "height": 0,
        "bottom": 0,
        "left": 0
      },
      "1-69-INPUT": {
        "right": 396,
        "bottom": 6283,
        "top": 6223,
        "left": 16,
        "width": 379,
        "height": 60
      },
      "1-103-META": {
        "height": 0,
        "right": 0,
        "top": 0,
        "left": 0,
        "bottom": 0,
        "width": 0
      },
      "1-101-LINK": {
        "height": 0,
        "width": 0,
        "top": 0,
        "bottom": 0,
        "left": 0,
        "right": 0
      },
      "1-91-DIV": {
        "width": 330,
        "bottom": 4089,
        "left": 36,
        "top": 3659,
        "right": 366,
        "height": 430
      },
      "1-1-H1": {
        "left": 34,
        "right": 352,
        "width": 319,
        "top": 451,
        "height": 199,
        "bottom": 650
      },
      "1-104-META": {
        "height": 0,
        "top": 0,
        "right": 0,
        "bottom": 0,
        "left": 0,
        "width": 0
      },
      "1-50-A": {
        "top": 0,
        "left": 0,
        "right": 0,
        "width": 0,
        "height": 0,
        "bottom": 0
      },
      "1-44-A": {
        "width": 0,
        "left": 0,
        "top": 0,
        "right": 0,
        "bottom": 0,
        "height": 0
      },
      "1-49-A": {
        "width": 0,
        "top": 0,
        "right": 0,
        "left": 0,
        "height": 0,
        "bottom": 0
      },
      "1-108-META": {
        "right": 0,
        "bottom": 0,
        "height": 0,
        "left": 0,
        "width": 0,
        "top": 0
      },
      "1-94-LINK": {
        "bottom": 0,
        "width": 0,
        "top": 0,
        "height": 0,
        "right": 0,
        "left": 0
      },
      "1-40-A": {
        "right": 0,
        "top": 0,
        "width": 0,
        "bottom": 0,
        "left": 0,
        "height": 0
      },
      "1-62-A": {
        "top": 476,
        "right": 501,
        "bottom": 506,
        "left": 501,
        "width": 0,
        "height": 30
      },
      "1-61-A": {
        "width": 0,
        "bottom": 506,
        "top": 476,
        "height": 30,
        "left": 481,
        "right": 481
      },
      "1-6-A": {
        "width": 0,
        "height": 0,
        "left": 0,
        "top": 0,
        "bottom": 0,
        "right": 0
      },
      "1-35-A": {
        "right": 0,
        "height": 0,
        "width": 0,
        "bottom": 0,
        "left": 0,
        "top": 0
      },
      "1-82-IMG": {
        "height": 40,
        "right": 190,
        "bottom": 8924,
        "width": 40,
        "top": 8884,
        "left": 150
      },
      "1-53-A": {
        "height": 22,
        "top": 126,
        "left": 411,
        "bottom": 148,
        "right": 510,
        "width": 99
      },
      "1-86-IMG": {
        "width": 0,
        "height": 30,
        "left": 441,
        "right": 441,
        "top": 476,
        "bottom": 506
      },
      "1-14-A": {
        "top": 2109,
        "right": 353,
        "left": 59,
        "bottom": 2364,
        "width": 294,
        "height": 255
      },
      "1-63-A": {
        "top": 8215,
        "height": 12,
        "right": 248,
        "left": 164,
        "width": 85,
        "bottom": 8227
      },
      "1-67-INPUT": {
        "right": 396,
        "height": 60,
        "bottom": 6143,
        "top": 6083,
        "left": 16,
        "width": 379
      },
      "1-65-BODY": {
        "left": 0,
        "bottom": 8243,
        "height": 8243,
        "top": 0,
        "right": 412,
        "width": 412
      },
      "1-39-A": {
        "left": 0,
        "width": 0,
        "right": 0,
        "height": 0,
        "bottom": 0,
        "top": 0
      },
      "1-27-A": {
        "right": 380,
        "bottom": 7645,
        "left": 32,
        "top": 7609,
        "height": 36,
        "width": 348
      },
      "page-0-P": {
        "left": 34,
        "width": 313,
        "right": 346,
        "bottom": 928,
        "top": 690,
        "height": 238
      },
      "1-78-IMG": {
        "height": 63,
        "bottom": 2592,
        "left": 175,
        "right": 238,
        "width": 63,
        "top": 2529
      },
      "1-15-A": {
        "height": 215,
        "top": 2529,
        "width": 294,
        "bottom": 2744,
        "right": 353,
        "left": 59
      },
      "1-11-A": {
        "top": 0,
        "width": 0,
        "bottom": 0,
        "right": 0,
        "height": 0,
        "left": 0
      },
      "1-64-SPAN": {
        "bottom": 650,
        "width": 318,
        "height": 126,
        "right": 352,
        "top": 524,
        "left": 34
      },
      "1-71-INPUT": {
        "height": 63,
        "left": 194,
        "right": 394,
        "width": 200,
        "top": 9479,
        "bottom": 9542
      },
      "1-5-A": {
        "height": 0,
        "left": 0,
        "width": 0,
        "top": 0,
        "right": 0,
        "bottom": 0
      },
      "1-84-IMG": {
        "width": 24,
        "left": 480,
        "bottom": 37,
        "top": 13,
        "right": 504,
        "height": 24
      },
      "1-43-A": {
        "width": 0,
        "top": 0,
        "right": 0,
        "left": 0,
        "height": 0,
        "bottom": 0
      },
      "1-90-DIV": {
        "left": 36,
        "width": 330,
        "top": 3179,
        "right": 366,
        "bottom": 3609,
        "height": 430
      },
      "1-4-A": {
        "height": 0,
        "top": 0,
        "right": 0,
        "left": 0,
        "width": 0,
        "bottom": 0
      },
      "1-92-DIV": {
        "width": 330,
        "right": 366,
        "left": 36,
        "bottom": 4569,
        "top": 4139,
        "height": 430
      },
      "1-58-A": {
        "left": 411,
        "top": 391,
        "height": 49,
        "bottom": 440,
        "right": 442,
        "width": 31
      },
      "1-89-IMG": {
        "top": 476,
        "right": 501,
        "width": 0,
        "height": 30,
        "left": 501,
        "bottom": 506
      },
      "1-24-A": {
        "bottom": 7459,
        "top": 7423,
        "left": 32,
        "width": 348,
        "right": 380,
        "height": 36
      },
      "1-16-A": {
        "height": 37,
        "top": 7108,
        "bottom": 7145,
        "right": 70,
        "left": 32,
        "width": 38
      },
      "1-21-A": {
        "bottom": 7273,
        "height": 18,
        "width": 348,
        "top": 7255,
        "right": 380,
        "left": 32
      },
      "1-45-A": {
        "top": 0,
        "right": 0,
        "left": 0,
        "bottom": 0,
        "height": 0,
        "width": 0
      },
      "1-102-META": {
        "left": 0,
        "height": 0,
        "right": 0,
        "bottom": 0,
        "top": 0,
        "width": 0
      },
      "1-31-A": {
        "width": 0,
        "left": 0,
        "height": 0,
        "top": 0,
        "bottom": 0,
        "right": 0
      },
      "1-59-A": {
        "top": 476,
        "bottom": 506,
        "left": 441,
        "height": 30,
        "right": 441,
        "width": 0
      },
      "1-60-A": {
        "top": 476,
        "height": 30,
        "right": 461,
        "width": 0,
        "bottom": 506,
        "left": 461
      },
      "1-87-IMG": {
        "left": 461,
        "width": 0,
        "height": 30,
        "bottom": 506,
        "right": 461,
        "top": 476
      },
      "1-48-A": {
        "height": 0,
        "width": 0,
        "right": 0,
        "bottom": 0,
        "left": 0,
        "top": 0
      },
      "1-105-META": {
        "left": 0,
        "width": 0,
        "bottom": 0,
        "top": 0,
        "height": 0,
        "right": 0
      },
      "1-88-IMG": {
        "width": 0,
        "top": 476,
        "height": 30,
        "bottom": 506,
        "left": 481,
        "right": 481
      },
      "1-20-A": {
        "left": 32,
        "right": 380,
        "height": 18,
        "top": 7217,
        "width": 348,
        "bottom": 7235
      },
      "1-26-A": {
        "left": 32,
        "right": 380,
        "top": 7535,
        "width": 348,
        "bottom": 7589,
        "height": 54
      },
      "1-51-A": {
        "left": 0,
        "bottom": 0,
        "width": 0,
        "height": 0,
        "top": 0,
        "right": 0
      },
      "1-52-A": {
        "height": 22,
        "left": 411,
        "width": 64,
        "bottom": 95,
        "right": 475,
        "top": 73
      },
      "1-75-IMG": {
        "height": 63,
        "bottom": 1382,
        "top": 1319,
        "right": 238,
        "left": 175,
        "width": 63
      },
      "1-46-A": {
        "width": 0,
        "right": 0,
        "height": 0,
        "top": 0,
        "bottom": 0,
        "left": 0
      },
      "1-96-LINK": {
        "top": 0,
        "width": 0,
        "left": 0,
        "right": 0,
        "bottom": 0,
        "height": 0
      },
      "1-106-META": {
        "height": 0,
        "top": 0,
        "right": 0,
        "left": 0,
        "width": 0,
        "bottom": 0
      },
      "1-73-IMG": {
        "height": 0,
        "width": 0,
        "left": 0,
        "right": 0,
        "top": 0,
        "bottom": 0
      },
      "1-8-A": {
        "height": 0,
        "bottom": 0,
        "right": 0,
        "left": 0,
        "width": 0,
        "top": 0
      },
      "1-23-A": {
        "height": 54,
        "bottom": 7403,
        "top": 7349,
        "left": 32,
        "width": 348,
        "right": 380
      },
      "1-56-A": {
        "left": 411,
        "width": 90,
        "bottom": 307,
        "top": 285,
        "height": 22,
        "right": 501
      },
      "1-30-A": {
        "bottom": 0,
        "height": 0,
        "right": 0,
        "left": 0,
        "top": 0,
        "width": 0
      },
      "1-37-A": {
        "right": 0,
        "bottom": 0,
        "left": 0,
        "width": 0,
        "height": 0,
        "top": 0
      },
      "1-0-A": {
        "right": 104,
        "height": 26,
        "bottom": 26,
        "width": 18,
        "left": 86,
        "top": 0
      },
      "1-54-A": {
        "height": 22,
        "width": 67,
        "bottom": 201,
        "left": 411,
        "right": 478,
        "top": 179
      },
      "1-55-A": {
        "top": 232,
        "right": 507,
        "width": 96,
        "left": 411,
        "bottom": 254,
        "height": 22
      },
      "1-25-A": {
        "width": 348,
        "top": 7479,
        "right": 380,
        "left": 32,
        "bottom": 7515,
        "height": 36
      },
      "1-99-LINK": {
        "bottom": 0,
        "width": 0,
        "top": 0,
        "height": 0,
        "left": 0,
        "right": 0
      },
      "1-81-IMG": {
        "bottom": 8924,
        "top": 8884,
        "width": 40,
        "right": 135,
        "left": 95,
        "height": 40
      },
      "1-28-A": {
        "top": 7665,
        "height": 36,
        "right": 380,
        "width": 348,
        "left": 32,
        "bottom": 7701
      },
      "1-57-A": {
        "top": 338,
        "width": 84,
        "right": 495,
        "left": 411,
        "bottom": 360,
        "height": 22
      },
      "1-12-A": {
        "height": 235,
        "bottom": 1554,
        "left": 59,
        "width": 294,
        "top": 1319,
        "right": 353
      },
      "1-80-IMG": {
        "right": 80,
        "width": 40,
        "bottom": 8924,
        "left": 40,
        "height": 40,
        "top": 8884
      },
      "1-100-LINK": {
        "bottom": 0,
        "right": 0,
        "left": 0,
        "width": 0,
        "top": 0,
        "height": 0
      },
      "1-83-IMG": {
        "right": 244,
        "height": 40,
        "left": 204,
        "top": 8884,
        "bottom": 8924,
        "width": 40
      },
      "1-13-A": {
        "bottom": 1924,
        "top": 1749,
        "right": 353,
        "width": 294,
        "height": 175,
        "left": 59
      },
      "1-72-INPUT": {
        "height": 0,
        "right": 0,
        "top": 0,
        "left": 0,
        "bottom": 0,
        "width": 0
      },
      "1-7-A": {
        "width": 0,
        "height": 0,
        "bottom": 0,
        "left": 0,
        "right": 0,
        "top": 0
      },
      "1-93-LINK": {
        "left": 0,
        "bottom": 0,
        "width": 0,
        "height": 0,
        "right": 0,
        "top": 0
      },
      "page-1-IMG": {
        "left": 110,
        "top": 123,
        "right": 303,
        "height": 193,
        "width": 193,
        "bottom": 316
      },
      "1-77-IMG": {
        "top": 2109,
        "right": 238,
        "bottom": 2172,
        "left": 175,
        "width": 63,
        "height": 63
      },
      "1-47-A": {
        "top": 0,
        "width": 0,
        "height": 0,
        "right": 0,
        "left": 0,
        "bottom": 0
      },
      "1-10-A": {
        "bottom": 0,
        "left": 0,
        "height": 0,
        "width": 0,
        "top": 0,
        "right": 0
      },
      "1-3-A": {
        "top": 8177,
        "right": 396,
        "width": 80,
        "height": 50,
        "left": 316,
        "bottom": 8227
      },
      "1-76-IMG": {
        "height": 63,
        "bottom": 1812,
        "left": 175,
        "right": 238,
        "top": 1749,
        "width": 63
      },
      "1-29-A": {
        "right": 380,
        "bottom": 7739,
        "width": 348,
        "left": 32,
        "height": 18,
        "top": 7721
      },
      "1-22-A": {
        "right": 380,
        "left": 32,
        "bottom": 7329,
        "width": 348,
        "height": 36,
        "top": 7293
      },
      "1-9-A": {
        "left": 0,
        "bottom": 0,
        "height": 0,
        "top": 0,
        "right": 0,
        "width": 0
      },
      "1-98-LINK": {
        "height": 0,
        "top": 0,
        "right": 0,
        "bottom": 0,
        "width": 0,
        "left": 0
      },
      "1-97-LINK": {
        "width": 0,
        "right": 0,
        "bottom": 0,
        "top": 0,
        "height": 0,
        "left": 0
      },
      "1-74-IMG": {
        "top": 123,
        "right": 303,
        "left": 110,
        "width": 193,
        "bottom": 316,
        "height": 193
      },
      "1-95-LINK": {
        "right": 0,
        "height": 0,
        "bottom": 0,
        "top": 0,
        "left": 0,
        "width": 0
      },
      "1-2-SECTION": {
        "top": 271,
        "bottom": 968,
        "height": 697,
        "width": 371,
        "right": 371,
        "left": 0
      },
      "1-36-A": {
        "left": 0,
        "bottom": 0,
        "height": 0,
        "right": 0,
        "width": 0,
        "top": 0
      },
      "1-41-A": {
        "right": 0,
        "bottom": 0,
        "width": 0,
        "top": 0,
        "height": 0,
        "left": 0
      },
      "1-33-A": {
        "width": 0,
        "top": 0,
        "bottom": 0,
        "right": 0,
        "height": 0,
        "left": 0
      }
    }
  }
}