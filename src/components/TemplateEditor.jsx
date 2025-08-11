import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { X, Plus, Upload, Bold, Italic, Underline, Link, Info } from 'lucide-react';

export const TemplateEditor = () => {
  const [selectedLanguage, setSelectedLanguage] = useState('English');
  const [templateName, setTemplateName] = useState('');
  const [category, setCategory] = useState('');
  const [headerType, setHeaderType] = useState('Image');
  const [bodyText, setBodyText] = useState('Dear User! Plz read this information');
  const [footerText, setFooterText] = useState('Subscribe Now');
  const [buttonText, setButtonText] = useState('Visit Now');
  const [buttonUrl, setButtonUrl] = useState('zonemedia.co');

  return (
    <div className="flex-1 bg-background">
      <Tabs defaultValue="setup" className="h-full">
        {/* Tab Navigation */}
        <div className="border-b border-border bg-card px-6">
          <div className="flex items-center justify-between py-4">
            <TabsList className="bg-neutral-100">
              <TabsTrigger value="add" className="text-neutral-600">Add template</TabsTrigger>
              <TabsTrigger value="setup" className="text-neutral-600">Setup Template</TabsTrigger>
            </TabsList>
            <Button className="bg-neutral-900 text-white hover:bg-neutral-800">
              Submit
            </Button>
          </div>
        </div>

        <TabsContent value="setup" className="flex h-full m-0">
          {/* Form Section */}
          <div className="flex-1 p-6 overflow-y-auto">
            <div className="max-w-2xl space-y-6">
              {/* Template Name */}
              <div className="space-y-2">
                <Label htmlFor="template-name" className="text-sm font-medium text-neutral-700">
                  Template Name
                </Label>
                <Input
                  id="template-name"
                  placeholder="Give new template a name"
                  value={templateName}
                  onChange={(e) => setTemplateName(e.target.value)}
                  className="h-10 border-neutral-200"
                />
              </div>

              {/* Category */}
              <div className="space-y-2">
                <Label className="text-sm font-medium text-neutral-700">Category</Label>
                <Select value={category} onValueChange={setCategory}>
                  <SelectTrigger className="h-10 border-neutral-200">
                    <SelectValue placeholder="Choose category" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="marketing">Marketing</SelectItem>
                    <SelectItem value="sales">Sales</SelectItem>
                    <SelectItem value="support">Support</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Language */}
              <div className="space-y-2">
                <Label className="text-sm font-medium text-neutral-700">Language</Label>
                <div className="flex items-center gap-2">
                  <div className="flex-1 border border-neutral-200 rounded-md px-3 py-2 text-sm text-neutral-500">
                    Select language(s)
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Badge variant="secondary" className="bg-red-50 text-red-700 border-red-200">
                    English
                    <X size={14} className="ml-1 cursor-pointer" />
                  </Badge>
                </div>
              </div>

              {/* Header Section */}
              <div className="space-y-4">
                <div className="flex items-center gap-2">
                  <Label className="text-sm font-medium text-neutral-700">Header</Label>
                  <span className="text-xs text-neutral-500">(Optional)</span>
                </div>
                <p className="text-xs text-neutral-500">
                  Add a title or choose which type of media you'll use for this header.
                </p>
                <div className="flex gap-4">
                  <Select value={headerType} onValueChange={setHeaderType}>
                    <SelectTrigger className="w-32 h-10 border-neutral-200">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Image">Image</SelectItem>
                      <SelectItem value="Video">Video</SelectItem>
                      <SelectItem value="Text">Text</SelectItem>
                    </SelectContent>
                  </Select>
                  <div className="flex items-center gap-2 px-3 py-2 border border-neutral-200 rounded-md">
                    <span className="text-sm text-neutral-700">Sample_pic.jpg</span>
                    <X size={16} className="text-neutral-400 cursor-pointer" />
                  </div>
                </div>
              </div>

              {/* Body Section */}
              <div className="space-y-2">
                <Label className="text-sm font-medium text-neutral-700">Body</Label>
                <p className="text-xs text-neutral-500">
                  Enter the text for your message in the language that you've selected.
                </p>
                <div className="border border-neutral-200 rounded-md">
                  {/* Rich Text Toolbar */}
                  <div className="flex items-center gap-1 p-2 border-b border-neutral-200">
                    <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                      <Bold size={14} />
                    </Button>
                    <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                      <Italic size={14} />
                    </Button>
                    <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                      <Underline size={14} />
                    </Button>
                    <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                      <Link size={14} />
                    </Button>
                    <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                      <Info size={14} />
                    </Button>
                    <div className="ml-auto text-xs text-neutral-400">0/1024</div>
                  </div>
                  <Textarea
                    value={bodyText}
                    onChange={(e) => setBodyText(e.target.value)}
                    className="min-h-[100px] border-0 resize-none focus:ring-0"
                    placeholder="Enter your message..."
                  />
                </div>
              </div>

              {/* Footer Section */}
              <div className="space-y-2">
                <Label className="text-sm font-medium text-neutral-700">Footer</Label>
                <p className="text-xs text-neutral-500">
                  Add a short line of text to bottom of your message template, if you add the marketing opt-out button, the associated footer will be shown here by default.
                </p>
                <Input
                  value={footerText}
                  onChange={(e) => setFooterText(e.target.value)}
                  className="h-10 border-neutral-200"
                  placeholder="Footer text..."
                />
                <div className="text-xs text-neutral-400">0/64</div>
              </div>

              {/* Buttons Section */}
              <div className="space-y-4">
                <div className="flex items-center gap-2">
                  <Label className="text-sm font-medium text-neutral-700">Buttons</Label>
                  <span className="text-xs text-neutral-500">(Optional)</span>
                </div>
                <p className="text-xs text-neutral-500">
                  Create buttons that let customers respond to your message or take action.
                </p>
                <Button variant="outline" className="text-primary border-primary hover:bg-primary/10">
                  <Plus size={16} className="mr-2" />
                  Add a button
                </Button>
                <div className="flex items-center gap-2 text-xs text-neutral-500">
                  <Info size={14} />
                  If you will add more than 1 button, they will appear in a list.
                </div>

                {/* Call to Action */}
                <div className="space-y-4 pt-4">
                  <Label className="text-sm font-medium text-neutral-700">Call to action</Label>
                  <div className="grid grid-cols-3 gap-4">
                    <div className="space-y-1">
                      <Label className="text-xs text-neutral-600">Button label</Label>
                      <Input
                        value={buttonText}
                        onChange={(e) => setButtonText(e.target.value)}
                        className="h-9 text-sm border-neutral-200"
                      />
                    </div>
                    <div className="space-y-1">
                      <Label className="text-xs text-neutral-600">URL Type</Label>
                      <Select defaultValue="static">
                        <SelectTrigger className="h-9 text-sm border-neutral-200">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="static">Static</SelectItem>
                          <SelectItem value="dynamic">Dynamic</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-1">
                      <Label className="text-xs text-neutral-600">Website URL</Label>
                      <div className="flex items-center">
                        <Input
                          value={buttonUrl}
                          onChange={(e) => setButtonUrl(e.target.value)}
                          className="h-9 text-sm border-neutral-200"
                        />
                        <Button variant="ghost" size="sm" className="ml-2 h-9 w-9 p-0">
                          <X size={14} />
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Preview Section */}
          <div className="w-80 border-l border-border bg-card p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-medium text-neutral-900">Template Preview</h3>
              <span className="text-xs text-neutral-500">04:32 pm</span>
            </div>
            
            <Card className="max-w-sm mx-auto shadow-sm">
              <CardHeader className="pb-3">
                <div className="w-full h-32 bg-gradient-to-br from-neutral-800 to-neutral-600 rounded-lg mb-3"></div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-medium text-neutral-900 mb-1">
                    Dear User! Plz read this information
                  </h4>
                  <p className="text-sm text-neutral-600">Subscribe Now</p>
                </div>
                
                <div className="space-y-2">
                  <Button 
                    variant="outline" 
                    className="w-full text-primary border-primary hover:bg-primary/10"
                  >
                    🔗 Visit Now
                  </Button>
                  <Button 
                    variant="outline" 
                    className="w-full text-primary border-primary hover:bg-primary/10"
                  >
                    📞 Call Now
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};