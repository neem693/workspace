package practice019;

import java.util.*;
import java.util.regex.*;
  
class RegexMatches05
{
  static Map props = new HashMap();
  static
  {
    props.put("key1", "fox");
    props.put("key2", "dog");
  }
  
  public static void main(String[] args)
  {
    String input = "The quick brown ${key1} jumps over the lazy ${key2}.";
  System.out.println(input);
    Pattern p = Pattern.compile("\\$\\{([^}]+)\\}");
    Matcher m = p.matcher(input);
    StringBuffer sb = new StringBuffer();
    while (m.find())
    {
      m.appendReplacement(sb, "-");
      sb.append(props.get(m.group(1)));
    }
    m.appendTail(sb);
    System.out.println(sb.toString());
  }
}
