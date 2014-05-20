var mediawiki = {
  'b': [rr.Literal("'''"), rr.Ref('wikichunk'), rr.Literal("'''")],
  'del': [rr.Literal('<strike>'), rr.Ref('wikichunk'), rr.Literal('</strike>')],
  'h2': [rr.StartOfLine(), rr.Literal('== '), rr.SingleLineText(), rr.Literal(' =='), rr.EndOfLine()],
  'h3': [rr.StartOfLine(), rr.Literal('=== '), rr.SingleLineText(), rr.Literal(' ==='), rr.EndOfLine()],
  'h4': [rr.StartOfLine(), rr.Literal('==== '), rr.SingleLineText(), rr.Literal(' ===='), rr.EndOfLine()],
  'h5': [rr.StartOfLine(), rr.Literal('===== '), rr.SingleLineText(), rr.Literal(' ====='), rr.EndOfLine()],
  'h6': [rr.StartOfLine(), rr.Literal('====== '), rr.SingleLineText(), rr.Literal(' ======'), rr.EndOfLine()],
  'hr': [rr.StartOfLine(), rr.Literal('----'), rr.EndOfLine()],
  'i': [rr.Literal("''"), rr.Ref('wikichunk'), rr.Literal("''")],
  'nowiki': [rr.Literal('<nowiki>'), rr.MultiLineText(), rr.Literal('</nowiki>')],
  'nowikiword': [rr.WordText(), rr.Literal('<nowiki/>')],
  'wikichunk': [rr.Or(
      'i',
      rr.MultiLineText(),
   )],
  'wikidoc': [rr.ZeroOrMore('wikichunk')],
};
