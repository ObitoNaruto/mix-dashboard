define("mix/lib/syntaxhighlighter/scripts/shBrushJavaFX.js",function(e,t){!function(){function i(){var e="Boolean Byte Character Double Duration Float Integer Long Number Short String Void",t="abstract after and as assert at before bind bound break catch class continue def delete else exclusive extends false finally first for from function if import in indexof init insert instanceof into inverse last lazy mixin mod nativearray new not null on or override package postinit protected public public-init public-read replace return reverse sizeof step super then this throw true try tween typeof var where while with attribute let private readonly static trigger";this.regexList=[{regex:SyntaxHighlighter.regexLib.singleLineCComments,css:"comments"},{regex:SyntaxHighlighter.regexLib.multiLineCComments,css:"comments"},{regex:SyntaxHighlighter.regexLib.singleQuotedString,css:"string"},{regex:SyntaxHighlighter.regexLib.doubleQuotedString,css:"string"},{regex:/(-?\.?)(\b(\d*\.?\d+|\d+\.?\d*)(e[+-]?\d+)?|0x[a-f\d]+)\b\.?/gi,css:"color2"},{regex:new RegExp(this.getKeywords(e),"gm"),css:"variable"},{regex:new RegExp(this.getKeywords(t),"gm"),css:"keyword"}],this.forHtmlScript(SyntaxHighlighter.regexLib.aspScriptTags)}"undefined"!=typeof e?SyntaxHighlighter=e("shCore").SyntaxHighlighter:null,i.prototype=new SyntaxHighlighter.Highlighter,i.aliases=["jfx","javafx"],SyntaxHighlighter.brushes.JavaFX=i,"undefined"!=typeof t?t.Brush=i:null}()});